/** @format */

const express = require("express");
const app = express();
const cors = require("cors");
const helmet = require("helmet");
const config = require("config");
const mongoose = require("mongoose");
const Todos = require("./Route/TodosRoute");
mongoose
  .connect("mongodb://localhost/TodosDB")
  .then(() => console.log(`Connected to db`))
  .catch((er) => console.log("Could not Connect\n"));

app.use(cors());
app.use(helmet());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use("/api/todo", Todos);

const PORT = process.env.PORT || 9001;
app.listen(PORT, () => console.log(`Listening to port ${PORT}`));
