import React from "react";
import { ThemeProvider } from "@mui/material";
import Header from "./Components/Header/Header";
import "../theme/App.css";
import { baseTheme } from "../theme/theme";
import AppRouter from "../config/AppRouter";
import { BrowserRouter, Route, Router, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <ThemeProvider theme={baseTheme}>
          <Header />
        </ThemeProvider>
        <AppRouter />
      </BrowserRouter>
    </>
  );
}

export default App;
