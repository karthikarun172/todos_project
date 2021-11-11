/** @format */

import logo from "./logo.svg";
import "./App.css";
import AddTaskBtn from "./Components/AddTaskBtn";
import SearchInput from "./Components/SearchInput";
import TaskCard from "./Components/TaskCard";
import { useState, useEffect } from "react";
import Divider from "./Components/Divider";
import CreateTaskModal from "./Components/CreateTaskModal";
import BriefCard from "./Components/BriefCard";
import { TodoList } from "./Dummies";
import DailyTaskList from "./Components/DailyTaskList";
import axios from "axios";

function App() {
  const [list, setList] = useState([]);
  const [input, setInput] = useState("");
  const [open, setOpen] = useState(false);
  const [brief, setBrief] = useState(false);
  const [BriefData, setBriefData] = useState("");
  const [today, setToday] = useState([]);
  const [yesterday, setYesterday] = useState([]);
  const [pending, setPending] = useState([]);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  useEffect(async () => {
    const { data } = await axios.get("http://localhost:9001/api/todo");
    setList(data);
  }, []);

  const handleTaskClick = (id) => {
    let lists = [...list];
    let value = lists.filter((todos) => todos._id === id);
    console.log(value, "vv");
    setBriefData(value[0].brief);
    setBrief(true);
  };

  const handleFilter = async (id) => {
    setList(list.filter((l) => l._id !== id));
    await axios
      .delete(`http://localhost:9001/api/todo/${id}`)
      .then(() => console.log("done"));
  };

  useEffect(() => {
    var date_val = new Date();

    const todayDate = date_val.toISOString().toString().slice(0, 10);
    const yesterdayDate = date_val.getDate() - 1;
    const pendingDate = date_val.getDate() - 2;

    let today_todos = list.filter((v) => v.Date.slice(0, 10) === todayDate);
    let yesterday_todos = list.filter(
      (v) => parseInt(v.Date.slice(8, 10)) === yesterdayDate
    );
    let pending_todos = list.filter(
      (v) => parseInt(v.Date.slice(8, 10)) <= pendingDate
    );

    // let datecheck = list
    //   .map((l) => new Date(l.Date).getDate())
    //   .filter((l) => l === date_val.getDate());
    // console.log(datecheck);
    setPending(pending_todos);
    setYesterday(yesterday_todos);
    setToday(today_todos);
  }, [list]);

  return (
    <div style={{ display: "flex", flexDirection: "row" }}>
      <div
        style={{
          height: "100vh",
          width: "300px",
          backgroundColor: "#4D4141",
          position: "fixed",
        }}
      ></div>

      <div
        style={{
          width: "100%",
        }}
      >
        <div
          style={{
            display: "flex",
            width: "100%",
            justifyContent: "center",
            marginTop: "100px",
          }}
        >
          <SearchInput
            onChange={(e) => setInput(e.target.value)}
            value={input}
          />
          <AddTaskBtn onClick={handleOpen} />
        </div>
        <CreateTaskModal open={open} handleClose={handleClose} />
        <div style={{ width: "100%" }}>
          <div>
            <Divider date="today" />
            {today.map((todos) => (
              <TaskCard
                onClickTask={() => handleTaskClick(todos._id)}
                TaskName={todos.title}
                priority={todos.priority}
                key={todos._id}
                deleteData={() => handleFilter(todos._id)}
              />
            ))}
          </div>
          {brief ? <BriefCard datas={BriefData} /> : null}
        </div>
        {yesterday.length === 0 ? null : (
          <div style={{ width: "100%" }}>
            <div>
              <Divider date="Yesterday" />
              {yesterday.map((todos) => (
                <TaskCard
                  onClickTask={() => handleTaskClick(todos._id)}
                  TaskName={todos.title}
                  priority={todos.priority}
                  key={todos._id}
                  deleteData={() => handleFilter(todos._id)}
                />
              ))}
            </div>
            {brief ? <BriefCard datas={BriefData} /> : null}
          </div>
        )}
        {pending.length === 0 ? null : (
          <div style={{ width: "100%" }}>
            <div>
              <Divider date="Pendings" />
              {pending.map((todos) => (
                <TaskCard
                  onClickTask={() => handleTaskClick(todos._id)}
                  TaskName={todos.title}
                  priority={todos.priority}
                  key={todos._id}
                  deleteData={() => handleFilter(todos._id)}
                />
              ))}
            </div>
            {brief ? <BriefCard datas={BriefData} /> : null}
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
