/** @format */

import React from "react";
import "../StyleSheet.css";

function AddTaskBtn({ onClick }) {
  return (
    <button className="AddTaskBtn" type="submit" onClick={onClick}>
      +
    </button>
  );
}

export default AddTaskBtn;
