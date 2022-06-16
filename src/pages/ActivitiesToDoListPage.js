import { Divider, Grid } from "@material-ui/core";
import React from "react";
import CardCarousel from "../containers/CardCarousel";
import NavBar from "../containers/NavBar";
import { Box } from "@material-ui/core";
import SearchBoxComp from "../components/SearchBox";
import Footer from "../containers/Footer";
import Pagination from "../containers/Pagination";
import { activitiesList } from "../containers/ActivitiesListCard/activitiesData";
import HorizontralCardComp from "../components/HorizontalCard";
import Filter from "../containers/Filter";
import data from "../containers/Filter/mockData";

function ActivitiesToDoListPage() {
  return (
    <Grid container spacing={0.5}>
      <Grid item xs={12}>
        <NavBar />
      </Grid>
      <Grid item xs={12}>
        <CardCarousel />
      </Grid>
      <Grid item xs={12}>
        <Box pt={4} pb={4}>
          <SearchBoxComp />
        </Box>
      </Grid>

      <Grid item xs={12}>
        <Box sx={{ mb: 1 }}>
          <Divider />
        </Box>
      </Grid>

      <Grid item xs={12}>
        <Grid container justifyContent="center" alignItems="center">
          <Box
            component="span"
            sx={{
              fontSize: 24,
              fontFamily: "Arial",
              fontWeight: "bold",
            }}
          >
            Top Activities to Do...
          </Box>
        </Grid>
      </Grid>

      <Grid item xs={2}>
        <Filter filterProperties={data}></Filter>
      </Grid>

      <Grid item xs={10}>
        <Grid
          container
          justifyContent="center"
          alignItems="center"
          spacing={{ xs: 2, md: 3 }}
          columns={{ xs: 4, sm: 8, md: 12 }}
        >
          {activitiesList.map((myVariable) => {
            return (
              <HorizontralCardComp
                name={myVariable.name}
                address={myVariable.address}
                image={myVariable.image}
                desc={myVariable.desc}
              />
            );
          })}
        </Grid>
      </Grid>

      <Grid item xs={12}>
        <Grid container alignItems="center" justifyContent="center">
          <Pagination />
        </Grid>
      </Grid>

      <Grid item xs={12}>
        <Grid container alignItems="center" justifyContent="center">
          <Footer />
        </Grid>
      </Grid>
    </Grid>
  );
}

export default ActivitiesToDoListPage;
