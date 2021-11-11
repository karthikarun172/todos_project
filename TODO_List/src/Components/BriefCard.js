/** @format */

import React from "react";

function BriefCard({ datas }) {
  return (
    <div
      style={{
        height: "auto",
        width: "350px",
        borderStyle: "solid",
        padding: "10px",
        borderWidth: "3px",
        borderColor: "lightgray",
        position: "absolute",
        right: "6%",
        bottom: "47%",
      }}
    >
      <h4>Brief</h4>
      <div style={{ height: "200px", overflow: "auto" }}>
        <p>{datas}</p>
      </div>
    </div>
  );
}

export default BriefCard;
