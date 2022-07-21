/**
 * Author: Sangramsinh More
 * Feature: Activities to do
 * Task: Display the list of activities
 */

import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import { Grid } from "@material-ui/core";
import { Button } from "@mui/material";

/**
 * 
 * @param {*} props 
 * @returns A card component used in activities page to list down the activities for a place.
 */
const ActivitiesCardComp = (props) => {
  return (
    <Grid container>
      <Card sx={{ maxWidth: 250 }}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="145"
            image={props.image}
            alt={props.title}
          />
          <CardContent>
            <Typography gutterBottom variant="h6" component="div">
              {props.title}
            </Typography>
            <Button variant="contained">Add to Plan</Button>
          </CardContent>
        </CardActionArea>
      </Card>
    </Grid>
  );
};

export default ActivitiesCardComp;
