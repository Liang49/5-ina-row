import React from "react";

export default function Square({ value }) {
  return (
    <div>
      <div className="box" onClick={onclick}>
        <div className="co">{value}</div>
      </div>
    </div>
  );
}
