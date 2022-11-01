import * as React from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export default function CustomTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: "100%" }}>
      <Box>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
          sx={{
            "& button": {
              border: "none",
              color: "white",
              margin: "0px",
              borderRadius: "4px",
              fontFamily: "ArialRounded",
              fontSize: "16px",
              padding: "2px 12px",
              height: "28px",
              cursor: "pointer",
              background: "none",
              boxShadow: "none",
              fontWeight: 300,
            },
            "& button:hover": {
              background: "none rgba(0, 0, 0, 0.15)",
            },
            "& button:active": {
              background: "none rgba(0, 0, 0, 0.15)",
            },
            "& button.Mui-selected": {
              color: "#fff",
              background: "none rgba(0, 0, 0, 0.15)",
              borderBottom: "#fff",
            },
            "& span.MuiTabs-indicator": {
              backgroundColor: "transparent",
            },
          }}
        >
          <Tab label="Pomodoro" {...a11yProps(0)} />
          <Tab label="Short Break" {...a11yProps(1)} />
          <Tab label="Long Break" {...a11yProps(2)} />
        </Tabs>
      </Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        <TabPanel value={value} index={0}>
          <Typography variant="h1">25:00</Typography>
        </TabPanel>
      </Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        <TabPanel value={value} index={1}>
          <Typography variant="h1">15:00</Typography>
        </TabPanel>
      </Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        <TabPanel value={value} index={2}>
          <Typography variant="h1">05:00</Typography>
        </TabPanel>
      </Box>
    </Box>
  );
}
