import React, { useState } from 'react';
import './App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faRobot, faUser } from '@fortawesome/free-solid-svg-icons'

function App() {
  const [selectedIcons, setSelectedIcons] = useState(Array(5).fill(null));
  const [iconColors, setIconColors] = useState(Array(5).fill('#000'));

  const handleIconClick = (cardIndex, icon) => {
    setSelectedIcons(prevIcons => {
      const newIcons = [...prevIcons];
      newIcons[cardIndex] = icon;
      return newIcons;
    });

    setIconColors(prevColors => {
      const newColors = [...prevColors];
      newColors[cardIndex] = icon === 'robot' ? '#3B82F6' : '#c30000';
      return newColors;
    });
  };

  return (
    <div className="App">
      <div className="prompt-text">Enter your prompt here</div>
      <div className="cards-container">
        {[...Array(5)].map((_, i) => (
          <div key={i} className={`card ${selectedIcons[i] === 'robot' ? 'robot' : selectedIcons[i] === 'human' ? 'human' : ''}`}>
            
            <div className="icon-robot"  onClick={() => handleIconClick(i, 'robot')}>
              <FontAwesomeIcon icon={faRobot} color={selectedIcons[i] === 'robot' ? iconColors[i] : '#000'} />
            </div>
            <div className="card-content">
              <p>Your text goes here and can be very long up to 140 characters...</p>
            </div>
            
            <div className="icon-human"  onClick={() => handleIconClick(i, 'human')}>
              <FontAwesomeIcon icon={faUser} color={selectedIcons[i] === 'human' ? iconColors[i] : '#000'}/>
            </div>
          </div>
        ))}
      </div>
      <button className="submit-button">Submit</button>
    </div>
  );
}

export default App;