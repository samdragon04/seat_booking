import React, { useState } from 'react';
import { Card } from "antd";

  const LeavePage = () => {
    
    const [leavingDate, FromDate] = useState('');
    const [returnDate, setReturnDate] = useState('');
    
  
    const handleSubmit = (event) => {
      event.preventDefault();
      // handle form submission here
    };
  
    return (
      <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "80vh",
        overflow: "hidden",
      }}
      >
      <Card style={{ width: 300, height: 500, borderRadius: 10 }}>
      <form onSubmit={handleSubmit}>
        <br />
        <label>
          Start Date:{' '}
          <input type="date" value={leavingDate} onChange={(event) => FromDate(event.target.value)} />
        </label>
        <br />
        <label>
          Return Date:{' '}
          <input type="date" value={returnDate} onChange={(event) => setReturnDate(event.target.value)} />
        </label>
        <br />
        <button type="submit">Submit</button>
      </form>
      </Card>
      </div>
    );
  };
  
  export default LeavePage;