/**
 * Author: Sangramsinh More
 * Feature: Generic: Pagination
 * Task: Pagination
 */
import * as React from "react";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import { Grid } from "@mui/material";

/**
 *
 * @returns a pagination component used in multiple pages.
 */
export default function PaginationComp() {
  return (
    <Grid container justifyContent="center" sx={{ mt: 3, mb: 2 }}>
      <Stack spacing={2}>
        <Pagination
          count={10}
          color="primary"
          variant="outlined"
          shape="rounded"
        />
      </Stack>
    </Grid>
  );
}
