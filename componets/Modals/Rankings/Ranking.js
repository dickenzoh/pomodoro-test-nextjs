import {
  Avatar,
  Box,
  Divider,
  Grid,
  IconButton,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Typography,
} from "@mui/material";
import React from "react";

const Ranking = () => {
  function generate(element) {
    return [0, 1, 2].map((value) =>
      React.cloneElement(element, {
        key: value,
      })
    );
  }
  return (
    <Box sx={{ width: 526, height: 550 }}>
      <Grid item xs={12} md={6}>
        <Box
          sx={{
            display: "flex",
          }}
        >
          <Box
            sx={{
              zIndex: 1,
              backgroundColor: "white",
              fontWeight: "bold",
              color: "rgb(87, 87, 87)",
              fontSize: "18px",
            }}
          >
            <Typography>Activity Summary</Typography>
          </Box>
          <Box
            sx={{
              height: "1px",
              width: "90%",
              mt: "13px",
              paddingRight: "12px",
              backgroundColor: "rgb(240, 240, 240)",
              position: "absolute",
            }}
          >
            <Divider />
          </Box>
        </Box>

        <List>
          {generate(
            <ListItem
              secondaryAction={
                <IconButton edge="end" aria-label="delete">
                  127:19
                </IconButton>
              }
            >
              <ListItemAvatar>
                <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
              </ListItemAvatar>
              <ListItemText primary="Remy Sharp" />
            </ListItem>
          )}
        </List>
      </Grid>
    </Box>
  );
};

export default Ranking;
