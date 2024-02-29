// LoginForm.jsx
import React, { useState } from 'react';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:3000/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ email, password })
      });

      if (response.ok) {
        // Connexion réussie, redirigez ou effectuez d'autres actions nécessaires
        console.log('Connexion réussie');
      } else {
        // Gestion des erreurs
        const responseData = await response.json();
        console.error('Erreur de connexion:', responseData.message);
      }
    } catch (error) {
      console.error('Erreur lors de la soumission du formulaire:', error);
      // Gestion des erreurs si nécessaire
    }
  };

  

  return (
    <section className="container forms">
      <div className="form login">
        <div className="form-content">
          <header>Login</header>
          <form onSubmit={handleSubmit}>
            <div className="field input-field">
              <input
                type="email"
                placeholder="Email"
                className="input"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <div className="field input-field">
              <input
                type="password"
                placeholder="Password"
                className="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <i className='bx bx-hide eye-icon'></i>
            </div>

            <div className="field button-field">
              <button type="submit">Login</button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Login;
