import React from "react";
import { MusicPlayerProvider } from "./contexts/MusicPlayerContext";
import TrackList from "./components/TrackList";
import Controller from "./components/Controller";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Header from "./components/Header";
import "./App.css";

function App() {
  return (
    <MusicPlayerProvider>
      <Container maxWidth="xs">
        <Box sx={{ bgcolor: "white", padding: "20px" }}>
          {" "}
          <Header />
        </Box>
        <Box
          sx={{
            bgcolor: "#fee0e0",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            minHeight: "320px",
            padding: "0",
          }}
        >
          <TrackList />
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            padding: "20px",
            bgcolor: "white",
          }}
        >
          <Controller />
        </Box>
      </Container>
    </MusicPlayerProvider>
  );
}

export default App;