import React, { useReducer } from "react"
import {
  Button,
  Box,
  Container,
  Grid,
  Typography,
  Stack,
  CircularProgress,
} from "@mui/material"
import { useFinder } from "../../hooks/useFinder"
import CityCard from "../CityCard/CityCard"
import logo from "../../logo.svg"
import {
  FilterActionType,
  FilterReducer,
  initialFilter,
} from "../Filter/FilterReducer"
import { Filter } from "../Filter/Filter"
export const Finder = () => {
  // const { isLoading, error, data } = useFinder()

  const [filterState, dispatch] = useReducer(FilterReducer, initialFilter)

  const { isLoading, error, data } = useFinder(filterState)

  const setMonth = (month?: string) =>
    dispatch({
      type: FilterActionType.UPDATE_MONTH,
      payload: {
        month,
      },
    })
  const setWeather = (weather?: string[]) =>
    dispatch({
      type: FilterActionType.UPDATE_WEATHER,
      payload: {
        weather,
      },
    })
  const setRegion = (region?: string) =>
    dispatch({
      type: FilterActionType.UPDATE_REGION,
      payload: {
        region,
      },
    })
  const setPage = (page?: number) =>
    dispatch({
      type: FilterActionType.UPDATE_PAGE,
      payload: {
        page,
      },
    })
  const setThemes = (themes?: string[]) =>
    dispatch({
      type: FilterActionType.UPDATE_THEMES,
      payload: {
        themes,
      },
    })
  const clearFilters = () =>
    dispatch({
      type: FilterActionType.CLEAR,
    })

  return (
    <>
      <Box
        sx={{
          mb: 6,
          backgroundRepeat: "no-repeat !important",
          backgroundSize: "cover !important",
          backgroundPosition: {
            md: "0 -154px !important",
            xs: "center !important",
          },
          background: `url(https://static.cityoneholidays.com/digital-asset/20220620045050_Pb_GreeceBanner.jpg)`,
        }}
      >
        <Box
          sx={{
            background: "rgba(0, 0, 0, 0.5)",
            width: "100%",
            py: 1,
            px: 4,
            pt: {
              md: 1,
              xs: 4,
            },
            height: 200,
          }}
        >
          <Typography
            sx={{ my: 3, fontSize: "4em", mt: 0, color: "#8feaff" }}
            variant="h1"
          >
            Caribou
            <img
              width="60"
              style={{ marginLeft: 20, marginTop: 5 }}
              src={logo}
            />
          </Typography>
        </Box>
      </Box>
      <Container>
        <Filter
          filterState={filterState}
          setMonth={setMonth}
          setRegion={setRegion}
          setWeather={setWeather}
          setThemes={setThemes}
          clearFilters={clearFilters}
        />
        {!isLoading ? (
          <Grid spacing={2} container>
            {data?.map((dest) => (
              <Grid md={4} xs={12} item>
                <CityCard city={dest} />
              </Grid>
            ))}
          </Grid>
        ) : (
          <Box sx={{ textAlign: "center", my: 8 }}>
            <CircularProgress />
          </Box>
        )}
        <Stack direction="row" sx={{ my: 4, justifyContent: "center" }}>
          {!!filterState.page && (
            <Button onClick={() => setPage((filterState.page || 0) - 1)}>
              Prev
            </Button>
          )}
          {data?.length == 10 && (
            <Button onClick={() => setPage((filterState.page || 0) + 1)}>
              Next
            </Button>
          )}
        </Stack>

        <Box sx={{ textAlign: "center", p: 4 }}>
          © 2022 Copyright by Albert Nahas. All Rights Reserved.{" "}
        </Box>
      </Container>
    </>
  )
}
