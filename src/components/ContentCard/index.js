import * as React from "react";
import Paper from "@mui/material/Card";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { useHistory } from "react-router-dom";

const ContentCardComp = ({ details }) => {
  const history = useHistory();
  const handleListItemClick = (destinationId) => {
    history.push("/destination");
  };
  return (
    <Paper
      elevation={6}
      sx={{ height: "150px", width: "90%", margin: "20px", cursor: "pointer" }}
      onClick={() => {
        handleListItemClick();
      }}
    >
      <Grid container spacing={5}>
        <Grid item xs={3}>
          <Box
            sx={{
              height: "110px",
              width: "100%",
              margin: "20px",
            }}
          >
            <img
              className="destination-image"
              src={details.details.img}
            ></img>
          </Box>
        </Grid>
        <Grid item xs={7}>
          <Typography
            variant="h5"
            component="div"
            sx={{ padding: "20px 10px 2px" }}
          >
            {details.details.title}
          </Typography>
          <Typography
            variant="body2"
            color="text.secondary"
            sx={{ margin: "0px 10px 20px" }}
            className="card-overflow-ellipsis"
          >
            {details.details.description}
          </Typography>
        </Grid>
        <Grid item xs={2} sx={{ paddingLeft: "20px" }}>
          <FavoriteIcon
            size="large"
            aria-label="add to bucket list"
            aria-controls="bucketlist-icon"
            aria-haspopup="false"
            color="primary"
            sx={{ margin: "0px", height: "100%" }}
          />
        </Grid>
      </Grid>
    </Paper>
  );
};
export default ContentCardComp;