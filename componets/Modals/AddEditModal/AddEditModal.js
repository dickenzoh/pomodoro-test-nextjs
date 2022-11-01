import React, { useState } from "react";
import PropTypes from "prop-types";
import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import Typography from "@mui/material/Typography";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import { Box } from "@mui/system";
import { Input, TextField } from "@mui/material";
import { useDispatch } from "react-redux";
import { addTask } from "../../../slice/taskSlice";
import useLocalStorage from "../../../useLocastorage";

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  "& .MuiDialogContent-root": {
    padding: theme.spacing(2),
  },
  "& .MuiDialogActions-root": {
    padding: theme.spacing(1),
  },
}));

const BootstrapDialogTitle = (props) => {
  const { children, onClose, ...other } = props;

  return (
    <DialogTitle sx={{ m: 0, p: 2 }} {...other}>
      {children}
      {onClose ? (
        <IconButton
          aria-label="close"
          onClick={onClose}
          sx={{
            position: "absolute",
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>
      ) : null}
    </DialogTitle>
  );
};

BootstrapDialogTitle.propTypes = {
  children: PropTypes.node,
  onClose: PropTypes.func.isRequired,
};

export default function AddEditModal() {
  const [open, setOpen] = useState(false);
  const dispatch = useDispatch();
  const [taskData, setTaskData] = useLocalStorage("tasks", []);
  console.log(taskData);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const clear = () => {
    setTaskData({
      id: "",
      title: "",
      est: 0,
      act: 0,
      note: "",
    });
  };

  const handleAddTask = (e) => {
    e.preventDefault();
    console.log(taskData);
    //if (currentId) {
    // dispatch(
    //   updateTask(currentId, { ...taskData, name: user?.result?.name })
    // );
    //} else {
    dispatch(addTask({ ...taskData, name: e.target.value }));
    //}
    handleClose();
  };

  return (
    <div>
      <Button
        onClick={handleClickOpen}
        startIcon={<AddCircleIcon />}
        sx={{ color: "white", borderColor: "white" }}
      >
        Add Task
      </Button>
      <BootstrapDialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
      >
        <Box sx={{ m: "10px" }}>
          <TextField
            name="title"
            variant="outlined"
            type="text"
            label="What are you working on"
            value={taskData?.title}
            onChange={(e) =>
              setTaskData({ ...taskData, title: e.target.value })
            }
          />
        </Box>
        <Box sx={{ color: "rgb(85, 85, 85)", fontWeight: "bold", m: "10px" }}>
          Est pomodoros
        </Box>
        <Box
          sx={{
            m: "10px",
          }}
        >
          <TextField
            id="filled-number"
            name="est"
            type="number"
            value={taskData?.est}
            onChange={(e) => setTaskData({ ...taskData, est: e.target.value })}
            InputLabelProps={{
              shrink: true,
            }}
            variant="filled"
            InputProps={{
              inputProps: {
                min: 1,
              },
            }}
          />
          <Button variant="contained">
            <KeyboardArrowDownIcon />
          </Button>
          <Button variant="contained">
            <KeyboardArrowUpIcon />
          </Button>
        </Box>
        <Box sx={{ m: "10px" }}>
          <TextField
            name="note"
            variant="outlined"
            type="text"
            label="some notes"
            value={taskData?.note}
            onChange={(e) => setTaskData({ ...taskData, note: e.target.value })}
          />
        </Box>
        <DialogActions>
          <Box
            sx={{
              display: "flex",
              justifyContent: "start-end",
            }}
          >
            <Button autoFocus onClick={handleClose}>
              Delete
            </Button>
          </Box>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <Box>
              <Button autoFocus onClick={handleClose}>
                Cancel
              </Button>
              <Button autoFocus onClick={handleAddTask}>
                Save
              </Button>
            </Box>
          </Box>
        </DialogActions>
      </BootstrapDialog>
    </div>
  );
}
