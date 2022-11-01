import { Box, Button, Typography } from "@mui/material";
import React from "react";
//import { FiBellOff } from "react-icons/fi";

export default function Timerd({
  stage,
  switchStage,
  getTickingTime,
  seconds,
  ticking,
  startTimer,
  isTimeUp,
  muteAlarm,
  reset,
}) {
  const options = ["Pomodoro", "Short Break", "Long Break"];
  return (
    <Box
      sx={{
        mx: "auto",
        pt: 5,
        text: "white",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        mt: 10,
        bgcolor: "rgba(255, 255, 255, 0.1)",
      }}
    >
      <Box
        sx={{
          display: "flex",
          gap: 5,
          alignItems: "center",
          fontSize: "1rem",
          padding: "0.125rem 0.75rem",
          height: "1.75rem",
          backgroundColor: "rgba(0, 0, 0, 0)",
          color: "white",
          transition: "transform 0.1s ease-in-out",
        }}
      >
        {options.map((option, index) => {
          return (
            <Box
              sx={{
                p: 1,
                cursor: "pointer",
                transition: "all",
                borderRadius: "0.25rem",
                bgcolor: index === stage ? "rgba(0, 0, 0, 0.15)" : "",
              }}
              key={index}
              onClick={() => switchStage(index)}
            >
              {option}
            </Box>
          );
        })}
      </Box>
      <Box
        sx={{
          fontSize: "6.25rem",
          lineHeight: "8.6875rem",
          fontWeight: 600,
          marginTop: "1rem",
          userSelect: "none",
        }}
      >
        {getTickingTime()}:{seconds.toString().padStart(2, "0")}
      </Box>

      <Box
        sx={{
          display: "flex",
          gap: 2,
          alignItems: "center",
          mt: 2,
          mb: 5,
        }}
      >
        <Box
          sx={{
            padding: "0 0.75rem",
            boxShadow: "rgb(235 235 235) 0 0.375rem 0",
            fontSize: "1.375rem",
            height: "3.4375rem",
            fontWeight: 600,
            minWidth: "12.5rem",
            backgroundColor: "white",
            textTransform: "uppercase",
            transition: "color 0.5s ease-in-out 0s",
            cursor: "pointer",
          }}
          onClick={startTimer}
        >
          <Typography
            color="rgb(202, 86, 82)"
            fontSize="22px"
            fontWeight="bold"
            textAlign="center"
          >
            {ticking ? "Stop" : "Start"}
          </Typography>
        </Box>
        {isTimeUp && (
          <FiBellOff
            className="text-3xl text-white cursor-pointer"
            onClick={muteAlarm}
          />
        )}
      </Box>
      {ticking && (
        <Button
          sx={{
            textTransform: "uppercase",
            color: "white",
            mt: 5,
          }}
          onClick={reset}
        >
          Reset
        </Button>
      )}
    </Box>
  );
}
