import * as React from "react";
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
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import { Switch, TextField } from "@mui/material";
import { Box } from "@mui/system";
import CustomDropdown from "../../Custom/CustomDropdown";
import CustomSlider from "../../Custom/CustomSilder";
import CustomNoInput from "../../Custom/CustomNoInput";
import { useDispatch } from "react-redux";
import { addTask } from "../../../slice/taskSlice";
import useLocalStorage from "../../../useLocastorage";
import { addSettings } from "../../../slice/settingSlice";

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

export default function SettingsModal() {
  const [open, setOpen] = React.useState(false);
  const [checked, setChecked] = React.useState(true);
  const [settingsData, setSettingsData] = useLocalStorage("settings", [
    {
      id: 1,
      duration: {
        pomodoro: 25,
        shortBreak: 10,
        longBreak: 15,
      },
      autostartBreaks: false,
      autostartPomodoros: false,
      longBreakInterval: 4,
      alarmSound: {
        type: "digital",
        volume: 10,
        repeat: 1,
      },
      tickingSound: {
        type: "none",
        volume: 50,
      },
      hourFormant: "24 - hour",
      darkMode: false,
      notification: {
        type: "every",
        min: 5,
      },
    },
  ]);

  console.log(settingsData[0]);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const handleChange = (event) => {
    setChecked(event.target.checked);
  };

  const handleSave = (e) => {
    e.preventDefault();
    console.log(settingsData);
    dispatch(addSettings({ ...settingsData, name: e.target.value }));
    //}
    handleClose();
  };
  return (
    <>
      <Button
        variant="outlined"
        onClick={handleClickOpen}
        startIcon={<SettingsOutlinedIcon />}
        sx={{ color: "white", borderColor: "white" }}
      >
        Setting
      </Button>
      <Box>
        <BootstrapDialog
          onClose={handleClose}
          aria-labelledby="customized-dialog-title"
          open={open}
        >
          <BootstrapDialogTitle
            id="customized-dialog-title"
            onClose={handleClose}
          >
            <Box
              sx={{
                fontSize: "16px",
                color: "rgb(187, 187, 187)",
                textTransform: "uppercase",
                fontWeight: "bold",
                marginBottom: "16px",
              }}
            >
              {" "}
              Timer Setting
            </Box>
          </BootstrapDialogTitle>
          <DialogContent dividers>
            <Typography gutterBottom>Time (minutes)</Typography>
            <Box
              sx={{
                display: "flex",
                borderBottom: "2px solid rgba(182, 165, 166, 0.2)",
                padding: "20px 0px",
                minHeight: "30px",
                display: "flex",
                justifyContent: "space-around",
                mb: "20px",
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  padding: "20px 0px",
                  minHeight: "30px",
                  display: "flex",
                  justifyContent: "space-evenly",
                  gap: 2,
                }}
              >
                <TextField
                  id="filled-number"
                  name="promodoro"
                  type="number"
                  value={settingsData[0]?.duration.pomodoro}
                  onChange={(e) =>
                    setSettingsData({
                      ...settingsData,
                      promodoro: e.target.value,
                    })
                  }
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
                <TextField
                  id="filled-number"
                  name="shortBreak"
                  type="number"
                  value={settingsData[0]?.duration.shortBreak}
                  onChange={(e) =>
                    setSettingsData({
                      ...settingsData,
                      shortBreak: e.target.value,
                    })
                  }
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
                <TextField
                  id="filled-number"
                  name="longBreak"
                  type="number"
                  value={settingsData[0]?.duration.longBreak}
                  onChange={(e) =>
                    setSettingsData({
                      ...settingsData,
                      longBreak: e.target.value,
                    })
                  }
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
              </Box>
            </Box>
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                display: "flex",
                borderBottom: "2px solid rgba(182, 165, 166, 0.2)",
                padding: "20px 0px",
                minHeight: "30px",
                mb: "20px",
                display: "flex",
                borderBottom: "2px solid rgba(182, 165, 166, 0.2)",
                padding: "20px 0px",
                minHeight: "30px",
                mb: "20px",
              }}
            >
              <Typography>Auto start Breaks?</Typography>
              <Switch
                name="breakAuto"
                checked={settingsData[0]?.autostartBreaks}
                inputProps={{ "aria-label": "controlled" }}
                onChange={(e) =>
                  setSettingsData({
                    ...settingsData,
                    breakAuto: e.target.value,
                  })
                }
                value={settingsData[0]?.autostartBreaks}
              />
            </Box>
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                display: "flex",
                borderBottom: "2px solid rgba(182, 165, 166, 0.2)",
                padding: "20px 0px",
                minHeight: "30px",
                mb: "20px",
                display: "flex",
                borderBottom: "2px solid rgba(182, 165, 166, 0.2)",
                padding: "20px 0px",
                minHeight: "30px",
                mb: "20px",
              }}
            >
              <Typography>Auto start Pomodoros?</Typography>
              <Switch
                name="pomodoroAuto"
                checked={settingsData[0]?.autostartPomodoros}
                inputProps={{ "aria-label": "controlled" }}
                onChange={(e) =>
                  setSettingsData({
                    ...settingsData,
                    pomodoroAuto: e.target.value,
                  })
                }
                value={settingsData[0]?.autostartPomodoros}
              />
            </Box>
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                display: "flex",
                borderBottom: "2px solid rgba(182, 165, 166, 0.2)",
                padding: "20px 0px",
                minHeight: "30px",
                mb: "20px",
              }}
            >
              <Typography>Long Break interval</Typography>
              <TextField
                id="filled-number"
                name="longBreakInterval"
                type="number"
                value={settingsData[0]?.longBreakInterval}
                onChange={(e) =>
                  setSettingsData({
                    ...settingsData,
                    longBreakInterval: e.target.value,
                  })
                }
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
            </Box>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                borderBottom: "2px solid rgba(182, 165, 166, 0.2)",
                padding: "20px 0px",
                minHeight: "30px",
                mb: "20px",
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                }}
              >
                <Typography>Alarm Sound</Typography>
                <CustomDropdown />
              </Box>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "flex-end",
                }}
              >
                <CustomSlider />
              </Box>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "flex-end",
                  alignItems: "center",
                  mt: "20px",
                  gap: 2,
                }}
              >
                <Typography>repeat</Typography>
                <TextField
                  id="filled-number"
                  name="alarmRepet"
                  type="number"
                  value={settingsData[0]?.alarmSound.repeat}
                  onChange={(e) =>
                    setSettingsData({
                      ...settingsData,
                      alarmRepet: e.target.value,
                    })
                  }
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
              </Box>
            </Box>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                borderBottom: "2px solid rgba(182, 165, 166, 0.2)",
                padding: "20px 0px",
                minHeight: "30px",
                mb: "20px",
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                }}
              >
                <Typography>Tracking Sound</Typography>
                <CustomDropdown />
              </Box>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "flex-end",
                }}
              >
                <CustomSlider />
              </Box>
            </Box>
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                display: "flex",
                borderBottom: "2px solid rgba(182, 165, 166, 0.2)",
                padding: "20px 0px",
                minHeight: "30px",
                mb: "20px",
              }}
            >
              <Typography>Hour Format</Typography>
              <CustomDropdown />
            </Box>
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                display: "flex",
                borderBottom: "2px solid rgba(182, 165, 166, 0.2)",
                padding: "20px 0px",
                minHeight: "30px",
                mb: "20px",
              }}
            >
              <Typography>Dark Mode when running</Typography>
              <Switch
                name="darkMode"
                checked={settingsData[0]?.darkMode}
                inputProps={{ "aria-label": "controlled" }}
                onChange={(e) =>
                  setSettingsData({
                    ...settingsData,
                    darkMode: e.target.value,
                  })
                }
                value={settingsData[0]?.darkMode}
              />
            </Box>
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                display: "flex",
                borderBottom: "2px solid rgba(182, 165, 166, 0.2)",
                padding: "20px 0px",
                minHeight: "30px",
                mb: "20px",
                height: "150px",
              }}
            >
              <Typography>Notification</Typography>
              <Box
                sx={{
                  display: "flex",
                  gap: 2,
                }}
              >
                <CustomDropdown />
                <TextField
                  id="filled-number"
                  name="notificationTime"
                  type="number"
                  value={settingsData[0]?.notification.min}
                  onChange={(e) =>
                    setSettingsData({
                      ...settingsData,
                      notificationTime: e.target.value,
                    })
                  }
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
                min
              </Box>
            </Box>
          </DialogContent>
          <DialogActions>
            <Button autoFocus onClick={handleSave}>
              Ok
            </Button>
          </DialogActions>
        </BootstrapDialog>
      </Box>
    </>
  );
}
//padding: 20px 20px 0px;
