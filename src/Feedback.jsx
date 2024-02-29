// Feedback.jsx
import React, { useState } from 'react';

const Feedback = () => {
  const [comment, setComment] = useState('');
  const [rating, setRating] = useState(0);

  const handleCommentChange = (e) => {
    setComment(e.target.value);
  };

  const handleRatingChange = (newRating) => {
    setRating(newRating);
  };

  const handleSubmit = () => {
    // Ici, tu peux envoyer le commentaire et la notation au serveur via une requête API
    // Assure-toi de gérer cela côté serveur avec Express
  };

  return (
    <div>
      <h1>Feedback Page</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Commentaire :</label>
          <textarea value={comment} onChange={handleCommentChange} />
        </div>
        <div>
          <label>Évaluation :</label>
          <input type="number" min="1" max="5" value={rating} onChange={(e) => handleRatingChange(e.target.value)} />
        </div>
        <button type="submit">Soumettre</button>
      </form>
    </div>
  );
};

export default Feedback;
