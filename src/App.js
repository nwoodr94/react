import React from "react";
import {
  AppBar,
  Box,
  Button,
  List,
  Container,
  Typography,
  Stack,
} from "@mui/material";
import { Outlet, Link } from "react-router-dom";

// Themes
import CssBaseline from "@mui/material/CssBaseline";
import { lightTheme, darkTheme } from "./Themes/Theme";
import { ThemeProvider } from "@mui/material/styles";

function App() {
  return (
    <ThemeProvider theme={lightTheme}>
      <CssBaseline />
      <Box>
        <AppBar position="static" color="primary">
          <Typography
            variant="h1"
            sx={{
              fontWeight: "bold",
              fontSize: "1.5rem",
              margin: ".75rem",
            }}
          >
            Nathan Woodruff
          </Typography>
        </AppBar>
        <Container
          sx={{
            textAlign: "center",
            height: "80vh",
          }}
        >
          <Box
            sx={{
              height: "100%",
              alignItems: "center",
              justifyContent: "center",
              display: "flex",
            }}
          >
            <Stack>
              <Box>
                <b>Hi, I'm Nathan</b>
                <br />
                <br />
                I'm a software engineer based in Idaho Falls{" "}
                <span role="img" aria-label="mountain">
                  {String.fromCodePoint(0x1f3de)}
                </span>
              </Box>
              <br />
              <List
                sx={{
                  display: "inline",
                  alignItems: "center",
                  width: "500px",
                  maxWidth: "80vw",
                }}
              >
                <Button dense="true">
                  <Link to="/">
                    <Typography variant="caption" sx={{ padding: "0.25rem" }}>
                      Home
                    </Typography>
                  </Link>
                </Button>
                <Button dense="true">
                  <Link to="/about">
                    <Typography variant="caption">About</Typography>
                  </Link>
                </Button>
                <Button dense="true">
                  <Link to="/work">
                    <Typography variant="caption">Work</Typography>
                  </Link>
                </Button>
                <Button dense="true">
                  <Link to="/contact">
                    <Typography variant="caption">Contact</Typography>
                  </Link>
                </Button>
              </List>
              <Outlet />
            </Stack>
          </Box>
        </Container>
        <AppBar
          position="fixed"
          color="primary"
          elevation={0}
          sx={{
            top: "auto",
            bottom: 0,
            padding: "1rem",
          }}
        >
          <Box
            sx={{
              height: "100%",
              alignItems: "center",
              justifyContent: "center",
              display: "flex",
            }}
          >
            <Typography variant="caption" gutterBottom component="h2">
              Developed by Nathan Woodruff
            </Typography>
          </Box>
        </AppBar>
      </Box>
    </ThemeProvider>
  );
}

export default App;
