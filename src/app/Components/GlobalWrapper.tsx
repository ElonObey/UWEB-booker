import { jsx } from "@emotion/react";
import { Box } from "@mui/material";
import React from "react";

interface IGlobalWrapper {
  children?: React.ReactNode;
}

function GlobalWrapper({ children }: IGlobalWrapper) {
  return <Box mx="10%">{children}</Box>;
}

export default GlobalWrapper;
