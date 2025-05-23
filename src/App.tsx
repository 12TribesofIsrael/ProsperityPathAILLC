import React, { useEffect } from 'react';

function App() {
  useEffect(() => {
    console.log('React App mounted successfully!');
    console.log('Current location:', window.location.href);
    console.log('Base URL:', import.meta.env.BASE_URL);
  }, []);

  return (
    <div style={{ 
      padding: '20px', 
      textAlign: 'center',
      backgroundColor: '#f0f8ff',
      minHeight: '100vh',
      fontFamily: 'Arial, sans-serif'
    }}>
      <h1 style={{ color: '#2563eb' }}>🎉 Prosperity Path AI - Test Page 🎉</h1>
      <p style={{ fontSize: '18px', color: '#059669' }}>
        ✅ SUCCESS! React app is working correctly!
      </p>
      <p style={{ color: '#6b7280' }}>
        Site URL: https://12tribesofisrael.github.io/ProsperityPathAILLC/
      </p>
      <p style={{ color: '#6b7280' }}>
        If you can see this styled page, the deployment is working.
      </p>
      <div style={{ 
        marginTop: '20px', 
        padding: '20px', 
        backgroundColor: '#fff', 
        borderRadius: '8px',
        border: '2px solid #10b981'
      }}>
        <h2>Debugging Info:</h2>
        <p>Current URL: {window.location.href}</p>
        <p>Timestamp: {new Date().toLocaleString()}</p>
      </div>
    </div>
  );
}

export default App;