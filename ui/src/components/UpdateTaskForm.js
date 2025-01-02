import { Button, Dialog, DialogTitle, TextField } from "@mui/material";
import React, { useState } from "react";
import CheckIcon from "@mui/icons-material/Check";
import axios from "axios";
import { API_URL } from "../utils";

export const UpdateTaskForm = ({
  fetchTasks,
  isDialogueOpen,
  setisDialogueOpen,
  task,
}) => {
  const { id, completed } = task;
  const [taskName, settaskName] = useState("");

  const handleUpdateTaskName = async () => {
    try {
      await axious.put(API_URL, { id, name: "taskName", completed });

      await fetchTasks();

      settaskName("");
    } catch (error) {console.log(error)}

  };

  return (
    <Dialog open={isDialogueOpen}>
      <DialogTitle> Edit Task </DialogTitle>
      <div className="dialog">
        <TextField
          size="small"
          label="Task"
          variant="outlined"
          onChange={(e) => settaskName(e.target.value)}
        />
        <Button
          variant="contained"
          onClick={async() => {
            await handleUpdateTaskName();
            setisDialogueOpen(false);
          }}
        >
          <CheckIcon />
        </Button>
      </div>
    </Dialog>
  );
};
