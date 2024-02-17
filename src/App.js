import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="prompt-text">Enter your prompt here</div>
      <div className="cards-container">
        {[...Array(5)].map((_, i) => (
          <div key={i} className="card">
            <span className="icon-robot">🤖</span>
            <div className="card-content">
              <p>Your text goes here and can be very long up to 140 characters...</p>
            </div>
            <span className="icon-human">👤</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;