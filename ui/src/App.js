import React, { useState, useEffect } from "react";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { AddTaskForm } from "./components/AddTaskForm";
import { Task } from "./components/Task";
import axios from "axios";
import { API_URL } from "./utils";

const darkTheme = createTheme({
  palette: {
    mode: "dark",
  },
});

export default function App() {
  const [task, settask] = useState([]);

  const fetchtasks = async () => {
    try {
      const { data } = await axios.get(API_URL);

      settask(data);
    } catch (error) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchtasks();
  }, []);

  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <AddTaskForm fetchtasks={fetchtasks}/>
      {tasks.map((task) => (
        <Task task={task} key={task.id} fetchtasks={fetchtasks} />
      ))}
      <Task task={task}></Task>
    </ThemeProvider>
  );
}
