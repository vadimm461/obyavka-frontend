import React, { useEffect, useState } from 'react';
import './App.css';
import { fetchWelcome } from './api';

function App() {
  const [message, setMessage] = useState('');

  useEffect(() => {
    const loadData = async () => {
      const data = await fetchWelcome();
      if (data) {
        setMessage(data.message || 'Нет данных');
      }
    };
    loadData();
  }, []);

  return (
    <div className="container">
      <h1>Объявка</h1>
      <p>{message}</p>
    </div>
  );
}

export default App;
