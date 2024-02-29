// Reservation.jsx
import React, { useState } from 'react';

const Reservation = () => {
  // États locaux pour gérer les champs du formulaire
  const [pickupLocation, setPickupLocation] = useState('');
  const [dateType, setDateType] = useState('');
  const [rideType, setRideType] = useState('');
  const [dropoffLocation, setDropoffLocation] = useState('');
  const [seats, setSeats] = useState('');

  // Gestionnaire de soumission du formulaire
  const handleSubmit = (e) => {
    e.preventDefault();

    // Effectuez ici des opérations de réservation en utilisant les valeurs des champs
    console.log('Pickup Location:', pickupLocation);
    console.log('Date Type:', dateType);
    console.log('Ride Type:', rideType);
    console.log('Dropoff Location:', dropoffLocation);
    console.log('Seats:', seats);

    // Réinitialisez les champs du formulaire après la soumission si nécessaire
    setPickupLocation('');
    setDateType('');
    setRideType('');
    setDropoffLocation('');
    setSeats('');
  };

  return (
    <section className="container forms">
      <div className="form reservation">
        <div className="form-content">
          <header>Reservation</header>
          <form onSubmit={handleSubmit}>
            <div className="field input-field">
              <input
                type="text"
                placeholder="Pickup Location"
                className="input"
                value={pickupLocation}
                onChange={(e) => setPickupLocation(e.target.value)}
              />
            </div>

            <div className="field input-field">
              <input
                type="text"
                placeholder="Date Type"
                className="input"
                value={dateType}
                onChange={(e) => setDateType(e.target.value)}
              />
            </div>

            <div className="field input-field">
              <input
                type="text"
                placeholder="Ride Type"
                className="input"
                value={rideType}
                onChange={(e) => setRideType(e.target.value)}
              />
            </div>

            <div className="field input-field">
              <input
                type="text"
                placeholder="Dropoff Location"
                className="input"
                value={dropoffLocation}
                onChange={(e) => setDropoffLocation(e.target.value)}
              />
            </div>

            <div className="field input-field">
              <input
                type="number"
                placeholder="Seats"
                className="input"
                value={seats}
                onChange={(e) => setSeats(e.target.value)}
              />
            </div>

            <div className="field button-field">
              <button type="submit">Submit Reservation</button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Reservation;
