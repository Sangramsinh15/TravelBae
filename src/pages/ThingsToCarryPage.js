import { Grid, Typography, Box, Divider, CardActions } from "@material-ui/core";
import Button from "@mui/material/Button";

import React from "react";
import NavBar from "../containers/NavBar";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import { CardActionArea } from "@mui/material";
import { makeStyles } from "@material-ui/core/styles";
import Footer from "../containers/Footer";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import Filter from "../containers/Filter";
import filterData from "../containers/ThingsToCarry/mockData";

//MockData
import dress from "../assets/clothes/dress.jpg";
import jacket from "../assets/clothes/jacket.jpg";
import shirt from "../assets/clothes/shirt.jpg";
import skirt from "../assets/clothes/skirt.jpg";

import jeans from "../assets/clothes/jeans.jpg";
import sleepwear from "../assets/clothes/sleepwear.PNG";
import tshirt from "../assets/clothes/tshirt.jpg";
import shorts from "../assets/clothes/shorts.jpg";

// import skirt from "../assets/clothes/skirt.png";
import heels from "../assets/clothes/heels.jpg";

// import trousers from "../assets/icons/trousers.png";
// import coat from "../assets/icons/coat.png";

//jwellery
import ring from "../assets/clothes/ring.jpg";
import bracelet from "../assets/clothes/bracelet.jpg";
import earring from "../assets/clothes/earring.jpg";
import necklace from "../assets/clothes/necklace.jpg";
import makeup from "../assets/clothes/makeup.jpg";
import adaptor from "../assets/clothes/adaptor.jpg";
import laptop from "../assets/clothes/laptop.jpg";
import passport from "../assets/clothes/passport.jpg";
import creditCard from "../assets/clothes/creditCard.jpg";

// import bangles from "../assets/clothes/bangles.png";

//shoes
import boots from "../assets/clothes/boots.jpg";
import shoes from "../assets/clothes/shoes.jpg";
import flipFlops from "../assets/clothes/flip-flop.jpg";
import sandals from "../assets/clothes/sandals.jpg";
import hat from "../assets/clothes/hat.jpg";

//Hats

// Tolietery
import shampoo from "../assets/clothes/shampoo.jpg";
import soap from "../assets/clothes/soap.jpg";
import towel from "../assets/clothes/towel.jpg";
import sunscreen from "../assets/clothes/sunscreen.jpg";
import toothpaste from "../assets/clothes/toothpaste.jpg";
import mouthwash from "../assets/clothes/mouthwash.jpg";

const data = [
  {
    category: "Clothes",
    itemList: [
      {
        name: "Dress",
        image: dress,
      },
      {
        name: "Sleepwear",
        image: sleepwear,
      },
      {
        name: "Jacket",
        image: jacket,
      },
      {
        name: "Shirt",
        image: shirt,
      },
      {
        name: "Jeans",
        image: jeans,
      },
      {
        name: "T-shirt",
        image: tshirt,
      },
      {
        name: "Skirt",
        image: skirt,
      },
      {
        name: "Shorts",
        image: shorts,
      },
    ],
  },
  {
    category: "Shoes",
    itemList: [
      {
        name: "Flip Flops",
        image: flipFlops,
      },
      {
        name: "Boots",
        image: boots,
      },
      {
        name: "Shoes",
        image: shoes,
      },
      {
        name: "Heels",
        image: heels,
      },
      {
        name: "Sandals",
        image: sandals,
      },
    ],
  },
  {
    category: "Tolietery",
    itemList: [
      {
        name: "Soap",
        image: soap,
      },
      {
        name: "Shampoo",
        image: shampoo,
      },
      {
        name: "Towel",
        image: towel,
      },
      {
        name: "Sunscreen",
        image: sunscreen,
      },
      {
        name: "Toothpaste & brush",
        image: toothpaste,
      },
      {
        name: "Mouthwash",
        image: mouthwash,
      },
    ],
  },
  {
    category: "Misc",
    itemList: [
      {
        name: "Hat",
        image: hat,
      },
      {
        name: "Ring",
        image: ring,
      },
      {
        name: "Earring",
        image: earring,
      },
      {
        name: "Credit/Debit Card",
        image: creditCard,
      },
      {
        name: "Bracelet",
        image: bracelet,
      },

      {
        name: "Make Up Kit",
        image: makeup,
      },
      {
        name: "Adaptor",
        image: adaptor,
      },
      {
        name: "Laptop",
        image: laptop,
      },
      {
        name: "Necklace",
        image: necklace,
      },
      {
        name: "Passport & Tickets",
        image: passport,
      },
    ],
  },
];

const useStyles = makeStyles((theme) => ({
  root: {
    // maxWidth: 310,
    // height: 200,
    backgroundSize: "contain",
    transition: "transform 0.15s ease-in-out",
    "&:hover": { transform: "scale3d(1.05, 1.05, 1)" },
    paddingBottom: "1rem",
  },
  media: {
    display: "flex",
    objectFit: "scale-down",
    height: "50%",
    alignItems: "center",
    width: "50%",
  },
  cardFooter: {
    justifyContent: "center",
  },
}));

const ThingsToCarryPage = (props) => {
  const classes = useStyles();
  const displayCards = (name, image) => {
    return (
      <Card className={classes.root}>
        <Typography gutterBottom component="div">
          <CheckCircleIcon color="success" />
        </Typography>
        {image && (
          <CardActionArea>
            <CardMedia
              className={classes.media}
              component="img"
              image={image}
              alt={name}
            />
          </CardActionArea>
        )}
        <CardActions className={classes.cardFooter}>
          <Typography gutterBottom component="div">
            {name}
          </Typography>
        </CardActions>
      </Card>
    );
  };
  return (
    <Grid container mt={2}>
      <Grid item xs={12}>
        <NavBar />
      </Grid>

      <Grid item xs={12} sx={{ overflow: "hidden" }}>
        <Grid container justifyContent="center">
          <Grid item xs={12} lg={3}>
            {/* <Filter /> */}
            <Filter filterProperties={filterData}></Filter>
          </Grid>
          <Grid item xs={12} lg={9}>
            <Grid container justifyContent="center" spacing={2}>
              {data.map((dataObj) => {
                return (
                  <>
                    <Grid item xs={12}>
                      <Typography variant="h5" textAlign="center">
                        {dataObj.category}
                      </Typography>
                    </Grid>
                    <Grid item xs={12}>
                      {/* <Box paddingBottom={2}> */}
                      <Divider />
                      {/* </Box> */}
                    </Grid>
                    {dataObj.itemList.map((item) => (
                      <Grid
                        item
                        xs={6}
                        sm={4}
                        md={2}
                        lg={2}
                        style={{ marginBottom: 20 }}
                      >
                        {displayCards(item.name, item.image)}
                      </Grid>
                    ))}
                  </>
                );
              })}

              <Grid item xs={12}>
                <Box display="flex" justifyContent="flex-end" paddingRight={4}>
                  <Button type="submit" variant="contained" color="primary">
                    Add to Plan
                  </Button>
                </Box>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>

      {/* <Grid item xs={12}>
        <Footer />
      </Grid> */}
    </Grid>
  );
};

export default ThingsToCarryPage;