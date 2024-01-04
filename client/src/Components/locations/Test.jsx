import React, { useState } from 'react';
import './test.css'; // You can create a CSS file for styling

const Test = () => {
  const [deskPositions, setDeskPositions] = useState([
    { id: 1, top: 50, left: 50, rotation: 0 },
    { id: 2, top: 150, left: 200, rotation: 45 },
    { id: 3, top: 250, left: 350, rotation: -30 },
    // Add more desk positions as needed
  ]);

  const handleRotationChange = (id, newRotation) => {
    setDeskPositions((prevPositions) => {
      const newPositions = prevPositions.map((position) =>
        position.id === id ? { ...position, rotation: newRotation } : position
      );
      return newPositions;
    });
  };

  return (
    <div className="office-layout">
      {deskPositions.map((position) => (
        <div
          key={position.id}
          className="desk"
          style={{
            top: `${position.top}px`,
            left: `${position.left}px`,
            transform: `rotate(${position.rotation}deg)`,
            position: 'fixed', // Set position to fixed
          }}
        >
          <span>Desk {position.id}</span>
          <input
            type="range"
            min="-180"
            max="180"
            step="1"
            value={position.rotation}
            onChange={(e) => handleRotationChange(position.id, parseInt(e.target.value, 10))}
            style={{ display: 'none' }} // Hide the input
          />
        </div>
      ))}
    </div>
  );
};

export default Test;
