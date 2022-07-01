import { Grid, Box } from "@mui/material";
import Filter from "../containers/Filter";
import FilterMenu from "../containers/FilterMenu";
import { Typography } from "@mui/material";
import data from "../containers/Filter/mockData";
import destinationsData from "../containers/ContentCard/mockData";
import NavBar from "../containers/NavBar";
import ContentCardCont from "../containers/ContentCard";
import SearchCont from "../containers/Search";
import React, { useState } from "react";
import Pagination from "@mui/material/Pagination";
import NoDataFound from "../components/NoDataFound";
import Footer from "../containers/Footer";


const Destinations = () => {
  const [searchInput, setSearchInput] = useState("");
  let destinationIsEmpty = true;
  let showNoData = false;

  let handleEvent = (event) => {
    setSearchInput(event);
  };

  return (
    <Grid container>
      <Grid item xs={12}>
        <NavBar></NavBar>
      </Grid>
      <Grid
        item
        sx={{ display: { xs: "none", md: "block" } }}
        md={2.5}
        xs={0}
      >
        <Filter filterProperties={data}></Filter>
      </Grid>
      <Grid item xs={12} md={9.2}>
        <Typography
          gutterBottom
          variant="h4"
          component="h4"
          color="primary"
          paddingTop="0.5em"
          className="text-align-center"
        >
          Destinations
        </Typography>
        <SearchCont onEvent={handleEvent}></SearchCont>
        <Grid
        item
        sx={{ display: { xs: "block", md: "none" } }}
        md={0}
        xs={12}
        className="text-align-center"
      >
        <FilterMenu filterProperties={data}></FilterMenu>
      </Grid>
        <Grid container>
          {destinationsData.map((destination) => {
            if (searchInput) {
              if (
                destination.title
                  .toLowerCase()
                  .includes(searchInput.toLowerCase())
              ) {
                destinationIsEmpty = false;
                return (
                  <ContentCardCont details={destination}></ContentCardCont>
                );
              } else {
                showNoData = true;
                return false;
              }
            } else {
              destinationIsEmpty = false;
              return <ContentCardCont details={destination}></ContentCardCont>;
            }
          })}
          <NoDataFound
            display={showNoData}
            message="Destination not present. Please search for another one or select from the list."
            listEmpty={destinationIsEmpty}
            className="text-align-center"
          ></NoDataFound>
          <Box sx={{ textAlign: "center", width: "100%" }}>
            <Pagination
              count={2}
              color="primary"
              sx={{
                display: { xs: "inline-block", marginBottom: "2em" },
              }}
            />
          </Box>
        </Grid>
      </Grid>
      <Grid item xs={12}>
        <Footer></Footer>
      </Grid>
    </Grid>
  );
};

export default Destinations;