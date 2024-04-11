import { Paper } from "@mui/material";
import React, { Children } from "react";

interface ICustomPaper {
  children?: React.ReactNode;
}

function CustomPaper({ children }: ICustomPaper) {
  return <Paper sx={{ my: 1, padding: "64px 32px" }}>{children}</Paper>;
}

export default CustomPaper;
