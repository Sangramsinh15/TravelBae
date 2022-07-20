/**
 * Author: Sangramsinh More
 * Feature: Accommodation
 * Task: Accommoadation Main Page
 */
import React, { useEffect, useState } from "react";
import { Grid, Divider } from "@mui/material";
import NavBar from "../containers/NavBar";
import { Box } from "@material-ui/core";
import Footer from "../containers/Footer";
import AccommodationSearchBoxComp from "../components/AccommodationSearch";
import HorizontralCardComp from "../components/HorizontalCard";
import Filter from "../containers/Filter";
import FilterMenu from "../containers/FilterMenu";
import accommodationFilter from "../containers/AccommodationFIlters";
import axios from "axios";
import { BACKEND_URL } from "../config/index";
import AccommodationSortDropdown from "../components/AccommodationSortDropdown";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import usePagination from "../containers/UsePagination";
import { useParams } from "react-router-dom";
import NoDataFound from "../components/NoDataFound";

/**
 * This component is responsible for the api calls with backend and also for the sorting, filtering, pagination and searching tasks.
 * @param {*} props 
 * @returns 
 */

function AccommodationListPage() {
  const [allHotels, setAllHotels] = useState([]);

  let [keyword, setKeyword] = useState({
    keyword: "",
    cinDate: "",
    coutDate: "",
  });

  const params = useParams();

  if (params.code !== undefined) {
    keyword.keyword = params.code;
  }
  console.log("san", keyword.keyword);
  console.log("allHot", allHotels);

  let [sort, setSort] = useState(0);

  const [filtering, setFiltering] = useState({});

  const handleChange = (checkedItems) => {
    setFiltering({
      tags: checkedItems,
    });
  };

  const handleClearAll = () => {
    setFiltering({});
  };

  useEffect(() => {
    axios
      .post(`${BACKEND_URL}/acc/searchAccommodation`, {
        hotel_name: keyword.keyword,
        cin: keyword.cinDate,
        cout: keyword.coutDate,
        sort_type: sort,
        tags: filtering,
      })
      .then((res) => {
        setAllHotels(res.data.data);
      });
  }, [filtering, keyword, sort]);

  const [page, setPage] = useState(1);
  const PER_PAGE = 9;
  const count = Math.ceil(allHotels.length / PER_PAGE);

  const handleChange1 = (e, p) => {
    setPage(p);
    _DATA.jump(p);
  };

  const _DATA = usePagination(allHotels, PER_PAGE);

  return (
    <Grid container spacing={0.5}>
      <Grid item xs={12}>
        <NavBar />
      </Grid>
      <Grid item xs={12}>
        <Box
          component="img"
          sx={{
            height: 600,
            width: "100%",
            borderRadius: 2,
            p: 4,
          }}
          title="main image accommodation"
          alt="The house from the offer."
          src="https://images.pexels.com/photos/594077/pexels-photo-594077.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
        />
      </Grid>
      <Grid item xs={12}>
        <Box pt={4} pb={4}>
          <AccommodationSearchBoxComp keyword={setKeyword} />
          <Grid
            item
            sx={{ display: { xs: "block", md: "none" } }}
            md={0}
            xs={12}
            className="text-align-center"
          >
            <FilterMenu filterProperties={accommodationFilter}></FilterMenu>
          </Grid>
        </Box>
      </Grid>

      <Grid item xs={12}>
        <Box>
          <Divider />
        </Box>
      </Grid>
      <Grid item xs={12}>
        <Grid container justifyContent="center" alignItems="center">
          {allHotels.length === 0 && (
            <Grid
              item
              xs={12}
              sm={6}
              md={4}
              lg={2}
              style={{ textAlign: "center" }}
            >
              <NoDataFound
                message="Search Results are Empty"
                display={true}
                listEmpty={true}
                className="text-align-center"
              />
            </Grid>
          )}
          {allHotels.length !== 0 && (
            <Grid
              item
              xs={12}
              sm={6}
              md={4}
              lg={2}
              style={{ textAlign: "center" }}
            >
              <Box
                component="span"
                sx={{
                  fontSize: 24,
                  fontFamily: "Arial",
                  fontWeight: "bold",
                }}
              >
                Hotel results: 
              </Box>
            </Grid>
          )}
        </Grid>
      </Grid>

      <Grid container>
        <Box sx={{ flexGrow: 1 }}></Box>
        <Box sx={{ pr: 20 }}>
          <AccommodationSortDropdown sortingType={setSort} />
        </Box>
      </Grid>

      <Grid item>
        <Box sx={{ display: { xs: "none", md: "block" } }} md={2} xs={0}>
          <Filter
            filterProperties={accommodationFilter}
            handleChange={handleChange}
            handleClearAll={handleClearAll}
          ></Filter>
        </Box>
      </Grid>

      <Grid item xs={10}>
        <Grid
          container
          justifyContent="center"
          alignItems="center"
          spacing={{ xs: 2, md: 3 }}
          columns={{ xs: 4, sm: 8, md: 12 }}
        >
          {_DATA.currentData().map((myVariable, index) => {
            return (
              <HorizontralCardComp
                key={index}
                name={myVariable.hotel_name}
                address={myVariable.address}
                image={myVariable.hotel_image}
                price={myVariable.price}
                desc={myVariable.hotel_desc}
                city={myVariable.city}
                country={myVariable.country}
                id={myVariable.id}
                type="acc"
              />
            );
          })}
        </Grid>
      </Grid>

      <Grid item xs={12}>
        <Grid container alignItems="center" justifyContent="center">
          <Grid container justifyContent="center" sx={{ mt: 3, mb: 2 }}>
            <Stack spacing={2}>
              <Pagination
                count={count}
                color="primary"
                page={page}
                variant="outlined"
                shape="rounded"
                onChange={handleChange1}
              />
            </Stack>
          </Grid>
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

export default AccommodationListPage;
