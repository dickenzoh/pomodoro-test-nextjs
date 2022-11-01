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
import RocketLaunchSharpIcon from "@mui/icons-material/RocketLaunchSharp";
import CheckCircleOutlineOutlinedIcon from "@mui/icons-material/CheckCircleOutlineOutlined";
import RocketLaunchOutlinedIcon from "@mui/icons-material/RocketLaunchOutlined";
import { Box } from "@mui/system";
import { Paper, Tab, Tabs } from "@mui/material";

import { TabContext, TabList, TabPanel } from "@mui/lab";

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

export default function SubscriptionModal() {
  const [open, setOpen] = React.useState(false);
  const [value, setValue] = React.useState("1");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const Itm = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#000",
    ...theme.typography.body2,
    padding: theme.spacing(3),
    textAlign: "center",
    color: "#fff",
    display: "flex",
    justifyContent: "center",
  }));

  const subNotes = styled(Paper)(({ theme }) => ({
    marginTop: "36px",
    marginBottom: "8px",
    backgroundColor: "rgb(138, 138, 138)",
    padding: "4px 12px",
  }));

  const listPremiumOptions = [
    "Add projects",
    "See yearly report",
    "Save more than 3 templates",
    "Download report",
    "No ads",
    "... and all the future updates",
  ];

  return (
    <div>
      <Button
        onClick={handleClickOpen}
        startIcon={<RocketLaunchSharpIcon />}
        sx={{ color: "#000" }}
      >
        Subscription
      </Button>

      <BootstrapDialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
      >
        <Box
          sx={{
            padding: "14px 20px",
          }}
        >
          <BootstrapDialogTitle
            id="customized-dialog-title"
            onClose={handleClose}
          >
            Premium Plan
          </BootstrapDialogTitle>
          <Box
            sx={{
              color: "rgb(189, 189, 189)",
              fontWeight: "bold",
              fontSize: "18px",
              marginTop: "38px",
              width: 526,
            }}
          >
            You can...
          </Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
              fontSize: "18px",
              fontWeight: "bold",
              color: "rgb(87, 87, 87)",
            }}
          >
            {listPremiumOptions.map((item) => (
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <IconButton aria-label="delete" color="error">
                  <CheckCircleOutlineOutlinedIcon />
                </IconButton>
                <Box
                  sx={{
                    fontSize: "18px",
                    fontWeight: "bold",
                  }}
                >
                  {item}
                </Box>
              </Box>
            ))}
          </Box>
          <Box
            sx={{
              color: "rgb(189, 189, 189)",
              fontWeight: "bold",
              fontSize: "18px",
              marginTop: "38px",
              width: 526,
            }}
          >
            Select plan
          </Box>
          <TabContext value={value}>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  backgroundColor: "#fff",

                  gap: 2,
                  "& button": {
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    borderRadius: "8px",
                    margin: "0px 8px",
                    padding: "16px 8px",
                    width: "110px",
                    border: "2px solid rgb(240, 240, 240)",
                  },
                  "& button:hover": {
                    cursor: "pointer",
                    textAlign: "center",
                    padding: "8px 0px",
                    fontWeight: "bold",
                    fontSize: "16px",
                    backgroundColor: "rgb(225, 155, 153)",
                    color: "white",
                    borderRight: "2px solid rgb(225, 155, 153)",
                  },
                  "& button:active": {
                    cursor: "pointer",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    borderRadius: "8px",
                    margin: "0px 8px",
                    padding: "16px 8px",
                    width: "110px",
                    border: " 2px solid rgb(225, 155, 153)",
                    backgroundColor: "rgb(248, 232, 231)",
                  },
                  "& button.Mui-selected": {
                    color: "#fff",
                    backgroundColor: "rgb(225, 155, 153)",
                    borderBottom: "#fff",
                  },
                  "& span.MuiTabs-indicator": {
                    backgroundColor: "transparent",
                  },
                }}
              >
                <TabList
                  onChange={handleChange}
                  aria-label="lab API tabs example"
                >
                  <Tab
                    sx={{
                      cursor: "pointer",
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      borderRadius: "8px",
                      margin: "0px 8px",
                      padding: "16px 8px",
                      width: "110px",
                      border: "2px solid rgb(225, 155, 153)",
                      backgroundColor: "rgb(248, 232, 231)",
                    }}
                    label="Monthly   $36     /month"
                    value="1"
                  />
                  <Tab
                    sx={{
                      cursor: "pointer",
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      borderRadius: "8px",
                      margin: "0px 8px",
                      padding: "16px 8px",
                      width: "110px",
                      border: "2px solid rgb(225, 155, 153)",
                      backgroundColor: "rgb(248, 232, 231)",
                    }}
                    label="Yearly $36 /year"
                    value="2"
                  />
                  <Tab
                    sx={{
                      cursor: "pointer",
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      borderRadius: "8px",
                      margin: "0px 8px",
                      padding: "16px 8px",
                      width: "110px",
                      border: "2px solid rgb(225, 155, 153)",
                      backgroundColor: "rgb(248, 232, 231)",
                    }}
                    label="Forever $36 /lifetime "
                    value="3"
                  />
                </TabList>
              </Box>

              <TabPanel value="1">
                <Itm>
                  <RocketLaunchOutlinedIcon />
                  Go Premium - 7days free
                </Itm>
                <subNotes>
                  <Box
                    sx={{
                      color: "rgb(138, 138, 138)",
                      fontSize: "14px",
                      margin: "6px 0px",
                      lineHeight: "1.4em",
                    }}
                  >
                    * After the 7 days of free trial, you will automatically be
                    transitioned to the paying subscription.
                  </Box>
                  <Box
                    sx={{
                      color: "rgb(138, 138, 138)",
                      fontSize: "14px",
                      margin: "6px 0px",
                      lineHeight: "1.4em",
                    }}
                  >
                    * After the 7 days of free trial, you will automatically be
                    transitioned to the paying subscription.
                  </Box>
                  <Box
                    sx={{
                      color: "rgb(138, 138, 138)",
                      fontSize: "14px",
                      margin: "6px 0px",
                      lineHeight: "1.4em",
                    }}
                  >
                    * The subscription will be auto-renewed until you
                    unsubscribe.
                  </Box>
                  <Box
                    sx={{
                      color: "rgb(138, 138, 138)",
                      fontSize: "14px",
                      margin: "6px 0px",
                      lineHeight: "1.4em",
                    }}
                  >
                    * You will be notified a week prior to the renewal date.
                  </Box>
                </subNotes>
              </TabPanel>
              <TabPanel value="2">
                {" "}
                <Itm>
                  <RocketLaunchOutlinedIcon />
                  Go Premium - 7days free
                </Itm>
                <subNotes>
                  <Box
                    sx={{
                      color: "rgb(138, 138, 138)",
                      fontSize: "14px",
                      margin: "6px 0px",
                      lineHeight: "1.4em",
                    }}
                  >
                    * After the 7 days of free trial, you will automatically be
                    transitioned to the paying subscription.
                  </Box>
                  <Box
                    sx={{
                      color: "rgb(138, 138, 138)",
                      fontSize: "14px",
                      margin: "6px 0px",
                      lineHeight: "1.4em",
                    }}
                  >
                    * After the 7 days of free trial, you will automatically be
                    transitioned to the paying subscription.
                  </Box>
                  <Box
                    sx={{
                      color: "rgb(138, 138, 138)",
                      fontSize: "14px",
                      margin: "6px 0px",
                      lineHeight: "1.4em",
                    }}
                  >
                    * The subscription will be auto-renewed until you
                    unsubscribe.
                  </Box>
                  <Box
                    sx={{
                      color: "rgb(138, 138, 138)",
                      fontSize: "14px",
                      margin: "6px 0px",
                      lineHeight: "1.4em",
                    }}
                  >
                    * You will be notified a week prior to the renewal date.
                  </Box>
                </subNotes>
              </TabPanel>
              <TabPanel value="3">
                {" "}
                <Itm>
                  <RocketLaunchOutlinedIcon />
                  Go Premium
                </Itm>
                <subNotes>
                  <Box
                    sx={{
                      color: "rgb(138, 138, 138)",
                      fontSize: "14px",
                      margin: "6px 0px",
                      lineHeight: "1.4em",
                    }}
                  >
                    * You will immediately be charged after placing this order.
                  </Box>
                  <Box
                    sx={{
                      color: "rgb(138, 138, 138)",
                      fontSize: "14px",
                      margin: "6px 0px",
                      lineHeight: "1.4em",
                    }}
                  >
                    * You can request a refund within 7 days after the purchase.
                  </Box>
                </subNotes>
              </TabPanel>
            </Box>
          </TabContext>
        </Box>
      </BootstrapDialog>
    </div>
  );
}
