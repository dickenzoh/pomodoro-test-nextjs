import { Button, IconButton, Snackbar, Stack, Typography } from "@mui/material";
import React from "react";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import CheckCircleOutlineOutlinedIcon from "@mui/icons-material/CheckCircleOutlineOutlined";
import MoreVertOutlinedIcon from "@mui/icons-material/MoreVertOutlined";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { styled } from "@mui/material/styles";

const Itm = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(3),
  textAlign: "center",
  color: theme.palette.text.secondary,
  display: "flex",
  justifyContent: "space-between",
}));

const Item = (props) => {
  const { data } = props;
  console.log(data.name);
  return (
    <Box
      sx={{
        width: "70%",
        mt: "15px",
      }}
    >
      <Stack spacing={2}>
        <Itm>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <IconButton aria-label="delete" disabled color="primary">
              <CheckCircleOutlineOutlinedIcon />
            </IconButton>
            <Typography variant="body2">{data?.title}</Typography>
          </Box>
          <Box
            sx={{
              display: "flex",
              justifyContent: "flex-end",
              alignItems: "center",
            }}
          >
            <Typography variant="h6">{`${data.act ? data.act : 0}/${
              data?.est
            }`}</Typography>
            <MoreVertOutlinedIcon />
          </Box>
        </Itm>
      </Stack>
    </Box>
  );
};

export default Item;
