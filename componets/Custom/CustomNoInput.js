import { TextField } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";

const CustomNoInput = () => {
  return (
    <Box>
      <TextField
        id="filled-number"
        label="Long Break"
        type="number"
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
  );
};

export default CustomNoInput;
