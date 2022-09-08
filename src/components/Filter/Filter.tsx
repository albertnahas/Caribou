import { Clear, ExpandMore, ExpandLess } from "@mui/icons-material"
import {
  Box,
  IconButton,
  Grid,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Divider,
  Button,
} from "@mui/material"
import React, { FC } from "react"
import { MultipleSelect } from "../../atoms/MultipleSelect/MultipleSelect"
import {
  continents,
  monthNames,
  themeTypes,
  weatherTypes,
} from "../../constants"
import { FilterState } from "./FilterReducer"

export const Filter: FC<Props> = ({
  filterState,
  setMonth,
  setRegion,
  setWeather,
  setThemes,
}) => {
  const { month, region, themes, weather } = filterState
  const [showFilter, setShowFilter] = React.useState(true)
  return (
    <>
      <MultipleSelect
        items={themeTypes}
        label="Themes"
        selectedItems={themes || []}
        setSelectedItems={setThemes}
      />
      {showFilter && (
        <Grid sx={{ my: 1 }} spacing={2} container>
          <Grid item xs={4}>
            <FormControl fullWidth sx={{ minWidth: 80 }}>
              <InputLabel sx={{ zIndex: 0 }} id="month-select-label">
                Month
              </InputLabel>
              <Select
                labelId="month-select-label"
                id="month-select"
                value={month}
                onChange={(e) => {
                  setMonth(e.target.value)
                }}
                label="Month"
              >
                <MenuItem value="all">
                  <em>All</em>
                </MenuItem>
                {monthNames.map((c) => (
                  <MenuItem value={c} key={c}>
                    {c}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={4}>
            <FormControl fullWidth sx={{ minWidth: 80 }}>
              <InputLabel sx={{ zIndex: 0 }} id="region-select-label">
                Region
              </InputLabel>
              <Select
                labelId="region-select-label"
                id="region-select"
                value={region}
                onChange={(e) => {
                  setRegion(e.target.value)
                }}
                label="Region"
              >
                <MenuItem value="all">
                  <em>All</em>
                </MenuItem>
                {continents.map((m) => (
                  <MenuItem value={m} key={m}>
                    {m}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={4}>
            <FormControl fullWidth sx={{ minWidth: 80 }}>
              <InputLabel sx={{ zIndex: 0 }} id="rating-select-label">
                Weather
              </InputLabel>
              <Select
                labelId="rating-select-label"
                id="rating-select"
                value={weather?.length ? weather[0] : []}
                onChange={(e) => {
                  setWeather([e.target.value as string])
                }}
                label="Weather"
              >
                <MenuItem value="all">
                  <em>All</em>
                </MenuItem>
                {weatherTypes.map((r, i) => (
                  <MenuItem value={r} key={i}>
                    {r}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Grid>
        </Grid>
      )}
      <Grid sx={{ my: 1 }} container>
        <Grid
          sx={{ alignItems: "center", display: "flex" }}
          item
          xs={8}
          md={10}
        >
          <Divider sx={{ flexGrow: 1 }} />
        </Grid>
        <Grid item md={2} xs={4}>
          <Button
            variant="text"
            color="primary"
            onClick={() => {
              setShowFilter((prev) => !prev)
            }}
            endIcon={!showFilter ? <ExpandMore /> : <ExpandLess />}
          >
            {showFilter ? "Hide" : "Show"} filters{" "}
          </Button>
        </Grid>
      </Grid>
    </>
  )
}

interface Props {
  filterState: FilterState
  setMonth: (month?: string) => void
  setRegion: (region?: string) => void
  setWeather: (weather?: string[]) => void
  setThemes: (themes?: string[]) => void
}
