import React from "react";
import { Route, Routes } from "react-router-dom";
import App from "../app/App";
import Header from "../app/Components/Header/Header";
import MainPage from "../app/Pages/MainPage/MainPage";
import { Typography } from "@mui/material";
import CategoryPage from "../app/Pages/CategoryPage/CategoryPage";
import AboutPage from "../app/Pages/AboutPage/AboutPage";
import { mockDataBook, mockDet } from "../API/mockData/book";

function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route
        path="allcategory"
        element={<CategoryPage titleText="All category" data={mockDataBook} />}
      />
      <Route
        path="detective"
        element={<CategoryPage titleText="Detective" data={mockDet} />}
      />
      <Route path="about" element={<AboutPage />} />
      <Route path="*" element={<Typography>Error</Typography>} />
    </Routes>
  );
}

export default AppRouter;
