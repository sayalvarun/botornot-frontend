import React, { useState } from 'react';
import './App.css';

function App() {
  const [selectedIcons, setSelectedIcons] = useState(Array(5).fill(null));

  const handleIconClick = (cardIndex, icon) => {
    setSelectedIcons(prevIcons => {
      const newIcons = [...prevIcons];
      newIcons[cardIndex] = icon;
      return newIcons;
    });
  };

  return (
    <div className="App">
      <div className="prompt-text">Enter your prompt here</div>
      <div className="cards-container">
        {[...Array(5)].map((_, i) => (
          <div key={i} className={`card ${selectedIcons[i] === 'robot' ? 'red' : selectedIcons[i] === 'human' ? 'green' : ''}`}>
            
            <span 
                className="icon-robot"
                onClick={() => handleIconClick(i, 'robot')}
              >
                🤖
              </span>
            <div className="card-content">
              <p>Your text goes here and can be very long up to 140 characters...</p>
            </div>
            
            <span 
                className="icon-human"
                onClick={() => handleIconClick(i, 'human')}
              >
                👤
              </span>
          </div>
        ))}
      </div>
      <button className="submit-button">Submit</button>
    </div>
  );
}

export default App;