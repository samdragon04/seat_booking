import React, { useState } from 'react';
import './test.css'; // You can create a CSS file for styling

const Test = () => {
  const [deskPositions, setDeskPositions] = useState([
    { top: 50, left: 50, rotation: 0 },
    { top: 150, left: 200, rotation: 0 },
    { top: 250, left: 350, rotation: 0 },
    // Add more desk positions as needed
  ]);

  const handleRotationChange = (index, newRotation) => {
    setDeskPositions((prevPositions) => {
      const newPositions = [...prevPositions];
      newPositions[index].rotation = newRotation;
      return newPositions;
    });
  };

  return (
    <div className="office-layout">
      {deskPositions.map((position, index) => (
        <div
          key={index}
          className="desk"
          style={{
            top: `${position.top}px`,
            left: `${position.left}px`,
            transform: `rotate(${position.rotation}deg)`,
            position: 'fixed', // Set position to fixed
          }}
        >
          <span>Desk {index + 1}</span>
          <input
            type="range"
            min="-180"
            max="180"
            step="1"
            value={position.rotation}
            onChange={(e) => handleRotationChange(index, parseInt(e.target.value, 10))} style={{ display: 'none' }}
          />
        </div>
      ))}
    </div>
  );
};

export default Test;
