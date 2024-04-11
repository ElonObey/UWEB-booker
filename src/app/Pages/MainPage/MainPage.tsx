import { Box, Button, Stack, Typography } from "@mui/material";
import React from "react";
import MainPageItem from "./MainPageItem";
import PostService from "../../../API/PostService";
import axios from "axios";

async function fetchPosts() {
  const response = await axios.get(
    "https://jsonplaceholder.typicode.com/posts"
  );
  console.log(response.data);
}

function MainPage() {
  return (
    <Stack py={"64px"} alignItems="center">
      <Box>
        <Typography variant="h3"> Top books</Typography>
      </Box>
      <Box>
        <MainPageItem HeadText="Test" />
        <MainPageItem HeadText="Test" />
      </Box>
      <Button onClick={fetchPosts}> Click</Button>
    </Stack>
  );
}

export default MainPage;
