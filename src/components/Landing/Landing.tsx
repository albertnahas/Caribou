import { FC } from "react"
import { Box, Button, Grid, Typography } from "@mui/material"
import { styled } from "@mui/material/styles"
import { useTheme } from "@mui/system"
import logo from "../../logo.svg"

export var Landing: FC<Props> = function ({ onStart }) {
  const theme = useTheme()
  return (
    <>
      <Box sx={{ textAlign: "center" }}>
        <img
          width={600}
          src={
            "https://img.freepik.com/free-photo/travel-concept-with-landmarks_23-2149153262.jpg?2&w=900&t=st=1662658829~exp=1662659429~hmac=ede25514cd04a98735dd4f8c93e027bcb338506f8abdd7822ef9f2e649c03346"
          }
          className="App-logo"
          alt="logo"
        />

        <Typography
          sx={{
            fontWeight: "400",
            fontSize: { md: "4em", xs: "3em" },
          }}
          variant="h1"
          aria-label="IQBenchmark"
        >
          Caribou
          <img
            width={50}
            style={{ marginLeft: 12 }}
            src={logo}
            className="App-logo"
            alt="logo"
          />
        </Typography>
        {/* <img width={100} src={logo} className="App-logo" alt="logo" /> */}
        <Typography
          sx={{
            m: 2,
            fontSize: "18px",
            fontWeight: 400,
            px: { xs: "2.5rem", md: 0 },
          }}
          variant="h2"
          color="text.primary"
        >
          Find your next travel destination!
        </Typography>
        <Button
          color="primary"
          fullWidth
          size="large"
          onClick={onStart}
          sx={{
            width: 200,
            mt: 3,
          }}
          aria-label="get started"
          variant="contained"
        >
          Start
        </Button>
      </Box>
    </>
  )
}

interface Props {
  onStart: () => void
}
