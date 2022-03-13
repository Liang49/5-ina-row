import "./styles.css";
import React, { useState, useEffect } from "react";
import Square from "./Square.js";
export default function App() {
  const [board, setBoard] = useState(Array(19).fill(null));

  return (
    <div className="App">
      <h1>5 in a row</h1>
      <div className="big">
        <div className="whole">
          <div className="board">
            {board.map((item) => (
              <div className="row">
                {board.map((col19) => (
                  <Square value={"X"} />
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
