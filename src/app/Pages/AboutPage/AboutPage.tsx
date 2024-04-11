import {
  Box,
  Button,
  Paper,
  Stack,
  Typography,
} from "@mui/material";
import React from "react";
import SubHead from "../../Components/SubHead/SubHead";
import GlobalWrapper from "../../Components/GlobalWrapper";
import CustomPaper from "../../Components/CustomPaper";

function AboutPage() {
  return (
    <>
      <GlobalWrapper>
        <SubHead subHeadText="About" />
        <CustomPaper>
          <Stack gap={3} alignItems="center">
            <Stack flexDirection="row" justifyContent="space-around">
              <Paper
                sx={{
                  background: "rgba(0, 0, 0, 0.04)",
                  width: "30%",
                  height: "400px",
                }}
              />
              <Box maxWidth="60%">
                <Typography>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
                  id eleifend nunc. Donec ornare risus sit amet velit rutrum
                  sagittis. Aliquam vel molestie orci, fringilla fringilla est.
                  Morbi sem tortor, gravida quis ipsum vitae, hendrerit dictum
                  magna. Praesent gravida at augue in sodales. Duis auctor diam
                  a arcu volutpat, nec malesuada neque tempus. Nullam pulvinar
                  iaculis ultrices. Aenean malesuada ligula ut luctus iaculis.
                  In dolor elit, pharetra vel blandit sed, fringilla ac arcu.
                  Proin accumsan vestibulum ex, id semper eros lobortis a. Sed
                  ut libero ante. Duis gravida lorem iaculis, mollis ex non,
                  dapibus odio. Proin ac felis sit amet velit tincidunt dictum.
                  Nullam aliquet vulputate dui, molestie vestibulum magna
                  sollicitudin id. Vivamus a elit efficitur, vestibulum magna
                  id, commodo mauris. Donec quis gravida arcu. Etiam efficitur
                  nunc eu risus bibendum interdum. Cras vel erat magna. Ut in
                  est id nunc venenatis dignissim non vel nunc. Maecenas nec
                  lacus eu quam imperdiet congue. Ut malesuada interdum purus
                  quis pharetra. Suspendisse vel nisl purus. Etiam dolor velit,
                  tincidunt quis nunc ac, posuere consectetur risus. Vestibulum
                  aliquam viverra euismod. Phasellus ut diam nec enim sodales
                  pulvinar ac a quam. Phasellus congue non augue in imperdiet.
                  Nulla at ligula gravida quam rhoncus rutrum at ut ligula.
                  Proin vitae accumsan ante, sed consectetur leo. Sed auctor et
                  felis id viverra. Proin a massa sit amet ligula elementum
                  finibus a condimentum odio. Praesent eget nisl porttitor,
                  egestas eros id, feugiat erat. Integer id tempus ex. Praesent
                  porttitor lorem ac mi tristique iaculis. Suspendisse pharetra
                  at quam ut auctor. Phasellus at diam augue. Praesent ipsum
                  tortor, iaculis ac aliquam sed, tempor id massa. Nunc sed
                  vulputate lacus. Nunc quis odio erat. Vivamus efficitur, massa
                  condimentum lobortis pulvinar, tellus tellus hendrerit velit,
                  quis maximus odio metus eget justo. Vivamus ut mattis ex, vel
                  volutpat neque. Phasellus elit augue, porta a ligula vel,
                  porta efficitur lectus. Phasellus ornare aliquam ex, ac
                  rhoncus diam porta a. Etiam tristique nisi vel arcu venenatis,
                  tristique rhoncus orci volutpat. In mollis quis lacus tempor
                  condimentum. Sed vel nunc nisl. Phasellus et sem tempus,
                  volutpat purus sit amet, finibus lectus. Proin sit amet tempor
                  enim. In dignissim ligula pellentesque, tempor orci sed,
                  luctus erat. Praesent faucibus dolor ac lorem porta volutpat.
                </Typography>
              </Box>
            </Stack>
            <Button
              variant="contained"
              sx={{ width: "40%", maxWidth: "500px" }}
            >
              {" "}
              Hello{" "}
            </Button>
          </Stack>
        </CustomPaper>
      </GlobalWrapper>
    </>
  );
}

export default AboutPage;
