//require('dotenv').config()
const express = require('express');
const cors = require('cors');
const app = express();
const mysql = require('mysql2');
const port = 3000;
const myMiddleware = require('./middleware');

require('dotenv').config();

app.use(cors()); // Activez CORS pour toutes les routes

// Utilisez le middleware pour toutes les routes
app.use(myMiddleware);

// Utilisez le middleware pour traiter les données JSON du corps de la requête
app.use(express.json());

const connexion = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE
});

connexion.connect((err) => {
    if (err) {
        console.error('Error connection to database:', err);
    } else {
        console.log('Connection to database MySQL');
    }
});

app.get("/user/:email", (req, res) => {
    const email = req.params.email;
    connexion.query('SELECT * FROM `Passenger` WHERE `email` = ?', [email], (err, results) => {
        if (err) {
            console.error('Erreur requete:', err);
            res.status(500).send('Erreur lors de la récupération des données utilisateur');
        } else {
            if (results.length > 0) {
                res.status(200).json(results[0]);
            } else {
                res.status(404).send('Utilisateur non trouvé');
            }
        }
    });
});


app.post("/login", (req, res) => {
    const { email, password } = req.body;

    // Exécutez la requête SQL
    connexion.query('SELECT * FROM `Passenger` WHERE `email` = ? AND `password` = ?', [email, password], (error, results) => {
        if (error) {
            console.error('Erreur lors de la requête:', error);
            return res.status(500).json({ message: 'Erreur lors de la connexion' });
        }

        // Résultats de la requête
        const userData = results[0];

        if (userData) {
            // Utilisateur trouvé, connexion réussie
            res.status(200).json({ message: 'Connexion réussie' });
        } else {
            // Utilisateur non trouvé, échec de connexion
            res.status(401).json({ message: 'Échec de connexion, identifiants incorrects' });
        }
    });
});


app.post('/api/feedback', (req, res) => {
    const {message, rating, email_user, user_id, order_id, service_id } = req.body;

    // Requête d'insertion dans la base de données
    const insertQuery = `
        INSERT INTO Feedback (message, rating, email_user, user_id, order_id, service_id)
        VALUES (?, ?, ?, ?, ?, ?)
    `;

    connexion.query(insertQuery, [message, rating, email_user, user_id, order_id, service_id], (err, result) => {
        if (err) {
            console.error('Erreur lors de l\'insertion dans la base de données :', err);
            return res.status(500).json({ error: 'Erreur lors de l\'insertion dans la base de données' });
        }

        console.log('Données insérées avec succès');
        res.status(200).json({ message: 'Feedback enregistré avec succès' });
    });
});



app.get("/accueil", (req, res) => {
    const message = req.query.message || ''; // Récupérez le message de la requête s'il existe
    res.send(`<h1>${message}</h1><p>Bienvenue sur la page d'accueil !</p>`);
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});

 