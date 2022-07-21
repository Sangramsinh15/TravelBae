/**
 * Author: Trushita Maurya
 * Feature: Generic
 * Task: Display a loader on the top of pages.
 */
import React from "react";
import Box from "@mui/material/Box";
import LinearProgress from "@mui/material/LinearProgress";

/**
 *
 * @returns a loader bar for multi-purpose use inside the application.
 */
function Loader() {
  return (
    <Box sx={{ width: "100%" }}>
      <LinearProgress />
    </Box>
  );
}

export default Loader;
