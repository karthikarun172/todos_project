/** @format */

import React, { useState } from "react";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { TextArea, TextInput, SelectInput } from "./Inputs/TextInput";
import axios from "axios";

function CreateTaskModal({ open, handleClose, style }) {
  const [Title, setTitle] = useState("");
  const [Brief, setBrief] = useState("");
  const [Priority, setPriority] = useState("");

  // const handleSubmit1 = (e) => {
  //   e.preventDefault();
  //   setList((prevData) => [
  //     ...prevData,
  //     { id: `${list.length + 1}`, name: input },
  //   ]);
  //   setInput("");
  // };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = {
      title: Title,
      brief: Brief,
      priority: Priority,
    };
    await axios
      .post("http://localhost:9001/api/todo", data)
      .then(() => handleClose());
  };

  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: 400,
          height: 400,
          bgcolor: "background.paper",
          boxShadow: 24,
          p: 4,
        }}
      >
        <h3>Create a Task</h3>
        <form
          onSubmit={handleSubmit}
          action=""
          style={{
            display: "flex",
            flexDirection: "column",
            height: "100%",
          }}
        >
          <TextInput
            placeholder="Title"
            value={Title}
            onChange={(e) => setTitle(e.target.value)}
            style={{ height: "40px", marginBottom: "20px", padding: "5px" }}
          />
          <TextArea onChange={(e) => setBrief(e.target.value)} />
          <SelectInput
            value={Priority}
            onChange={(e) => setPriority(e.target.value)}
          />
          <button
            type="submit"
            style={{
              backgroundColor: "lightgreen",
              height: "50px",
              color: "#4B4B4B",
              border: "none",
              fontWeight: "bolder",
            }}
          >
            SUBMIT
          </button>
        </form>
      </Box>
    </Modal>
  );
}

export default CreateTaskModal;
