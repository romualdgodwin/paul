import React, { useState } from 'react';
import Login from './Login';
import Reservation from './Reservation';

const App = () => {
  const [currentPage, setCurrentPage] = useState('login');

  const navigateTo = (page) => {
    setCurrentPage(page);
  };

  return (
    <div>
      <button onClick={() => navigateTo('login')}>Go to Login</button>
      <button onClick={() => navigateTo('reservation')}>Go to Reservation</button>

      {currentPage === 'login' && <Login />}
      {currentPage === 'reservation' && <Reservation />}
    </div>
  );
};

export default App;
