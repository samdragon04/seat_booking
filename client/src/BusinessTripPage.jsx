import React, { useState } from 'react';
import { Card } from "antd";

  const BusinessTripPage = () => {
    const [selectValue, setSelectValue] = useState('domestic');
    const [leavingDate, setLeavingDate] = useState('');
    const [returnDate, setReturnDate] = useState('');
    const [companyName, setCompanyName] = useState('');
  
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
        <label>
          Select Domestic or International:{' '}
          <select value={selectValue} onChange={(event) => setSelectValue(event.target.value)}>
            <option value="domestic">国内</option>
            <option value="international">外国</option>
          </select>
        </label>
        <br />
        <label>
          出発日:{' '}
          <input type="date" value={leavingDate} onChange={(event) => setLeavingDate(event.target.value)} />
        </label>
        <br />
        <label>
          戻り日:{' '}
          <input type="date" value={returnDate} onChange={(event) => setReturnDate(event.target.value)} />
        </label>
        <br />
        <label>
          メーカー名:{' '}
          <input type="text" value={companyName} onChange={(event) => setCompanyName(event.target.value)} />
        </label>
        <br />
        <button style = {{ width: "50%" }} type="submit">Submit</button>
      </form>
      </Card>
      </div>
    );
  };  
  export default BusinessTripPage;