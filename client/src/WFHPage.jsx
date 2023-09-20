import React, { useState } from 'react';
import { Card } from "antd";

  const WFHPage = () => {
    const [leavingDate, setLeavingDate] = useState('');
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
          Start 日:{' '}
          <input type="date" value={leavingDate} onChange={(event) => setLeavingDate(event.target.value)} />
        </label>
        <br />
        <label>
          End 日:{' '}
          <input type="date" value={returnDate} onChange={(event) => setReturnDate(event.target.value)} />
        </label>
        <br />
        <br />
        <button style = {{ width: "50%" }} type="submit">Submit</button>
      </form>
      </Card>
      </div>
    );
  };  
  export default WFHPage;