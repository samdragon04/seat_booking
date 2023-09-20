import React, { useState, useEffect } from "react";

const NUM_ROWS = 6;
const NUM_COLS = 13;

const Box = ({ row, col, selected, onSelect, onNameChange, name }) => {
  const [inputValue, setInputValue] = useState("");

  const handleClick = () => {
    onSelect(row, col);
  };

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleInputKeyDown = (e) => {
    if (e.key === "Enter") {
      onNameChange(row, col, inputValue);
    }
  };

  return (
    <div
      style={{
        width: "50px",
        height: "90px",
        backgroundColor: selected ? (name ? "green" : "yellow") : "lightgrey",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
      onClick={handleClick}
    >
      {selected && !name && (
        <input
          type="text"
          onChange={handleInputChange}
          onKeyDown={handleInputKeyDown}
        />
      )}
      {name && (
        <div style={{ transform: "rotate(-90deg)" }}>
          {name.split("").join("\n")}
        </div>
      )}
    </div>
  );
};

const DesignDptPage = () => {
  const [grid, setGrid] = useState(
    Array.from({ length: NUM_ROWS }, () =>
      Array.from({ length: NUM_COLS }, () => ({
        selected: false,
        name: "",
      }))
    )
  );
  //const [selectedRow, setSelectedRow] = useState(null);
  //const [selectedCol, setSelectedCol] = useState(null);

  const handleSelect = (row, col) => {
    //setSelectedRow(row);
    //setSelectedCol(col);
    setGrid((prevGrid) =>
      prevGrid.map((r, i) =>
        r.map((c, j) => (i === row && j === col ? { ...c, selected: true } : c))
      )
    );
  };

  const handleNameChange = (row, col, name) => {
    setGrid((prevGrid) =>
      prevGrid.map((r, i) =>
        r.map((c, j) => (i === row && j === col ? { ...c, name } : c))
      )
    );
  };

  //const handleSubmit = () => {
  //if (selectedRow !== null && selectedCol !== null) {
  //  const name = prompt('Enter name:');
  //   handleNameChange(selectedRow, selectedCol, name);
  // }
  // };

  const handleReset = () => {
    setGrid(
      Array.from({ length: NUM_ROWS }, () =>
        Array.from({ length: NUM_COLS }, () => ({
          selected: false,
          name: "",
        }))
      )
    );
    //setSelectedRow(null);
    //setSelectedCol(null);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date();
      if (now.getHours() === 16 && now.getMinutes() === 45) {
        handleReset();
      }
    }, 60 * 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: `repeat(${NUM_COLS}, 50px)`,
          gridTemplateRows: `repeat(${NUM_ROWS}, 90px)`,
          gridGap: "5px",
        }}
      >
        {grid.map((row, i) =>
          row.map((col, j) => (
            <Box
              key={`${i}-${j}`}
              row={i}
              col={j}
              selected={col.selected}
              onSelect={handleSelect}
              onNameChange={handleNameChange}
              name={col.name}
            />
          ))
        )}
      </div>

      <button onClick={handleReset}>Reset</button>
    </>
  );
};

export default DesignDptPage;