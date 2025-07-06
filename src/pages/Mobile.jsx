// src/pages/Mobile.jsx
import { useEffect, useState } from 'react';

export default function Mobile() {
  const [status, setStatus] = useState('Connexion...');

  useEffect(() => {
    const socket = new WebSocket('wss://TON_SERVEUR_WS'); // 🔁 À remplacer

    socket.onopen = () => {
      setStatus('Connecté au sabre !');
      socket.send(JSON.stringify({ type: 'register', role: 'mobile' }));
    };

    const handleOrientation = (event) => {
      const { alpha, beta, gamma } = event;
      if (socket.readyState === WebSocket.OPEN) {
        socket.send(JSON.stringify({
          type: 'motion',
          payload: { alpha, beta, gamma }
        }));
      }
    };

    window.addEventListener('deviceorientation', handleOrientation);

    return () => {
      window.removeEventListener('deviceorientation', handleOrientation);
      socket.close();
    };
  }, []);

  return (
    <div style={{ padding: 30, fontSize: 24 }}>
      <h1>🟢 Contrôle du sabre</h1>
      <p>{status}</p>
      <p>Bouge ton téléphone pour faire bouger le sabre !</p>
    </div>
  );
}
