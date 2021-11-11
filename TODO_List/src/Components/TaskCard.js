/** @format */

import React from "react";
import "../StyleSheet.css";
import { MdDelete } from "react-icons/md";
import { MdOutlineCloudDone } from "react-icons/md";

function TaskCard({ TaskName, priority, deleteData, onClickTask }) {
  return (
    <div className="TaskCardContainer" onClick={onClickTask}>
      <div className="TaskSide1">
        <h4>{TaskName}</h4>
      </div>
      <div className="TaskSide2">
        <MdDelete
          size={24}
          style={{ alignSelf: "center", zIndex: "1000" }}
          color="red"
          onClick={deleteData}
        />
        <h3>{priority}</h3>
        <MdOutlineCloudDone
          size={24}
          style={{ alignSelf: "center" }}
          color="green"
        />
      </div>
    </div>
  );
}

export default TaskCard;
