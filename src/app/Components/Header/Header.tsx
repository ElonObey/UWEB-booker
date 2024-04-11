import {
  AppBar,
  Box,
  IconButton,
  Stack,
  Toolbar,
  Typography,
  useTheme,
} from "@mui/material";
import React, { useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import Sidebar from "./Sidebar";

function Header() {
  const theme = useTheme();
  const [open, setOpen] = useState(false);

  const openOptions = (newOpen: boolean) => () => {
    setOpen(newOpen);
  };

  const wrapperStyles = {
    background: theme.palette.background.default,
    padding: "30px 24px 24px 24px",
  };


  // Переделать без затенения
  
  return (
    <>
      <AppBar position="static">
        <Toolbar variant="dense">
          <IconButton
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
            onClick={openOptions(true)}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" color="inherit" component="div">
            Booker
          </Typography>
        </Toolbar>
      </AppBar>
      <Sidebar isOpen={open} openOptions={openOptions}/>
    </>
  );
}

export default Header;
