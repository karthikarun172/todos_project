/** @format */

import React from "react";

function Divider({ date }) {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        marginLeft: "20%",
        marginTop: "20px",
      }}
    >
      <h5 style={{ marginRight: "10px", color: "gray", fontSize: "1.2rem" }}>
        {date}
      </h5>
      <div
        style={{
          width: "57%",
          height: "2.4px",
          backgroundColor: "gray",
          alignSelf: "center",
        }}
      ></div>
    </div>
  );
}

export default Divider;
