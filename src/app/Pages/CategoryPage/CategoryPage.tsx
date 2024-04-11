import React from "react";
import SubHead from "../../Components/SubHead/SubHead";
import GlobalWrapper from "../../Components/GlobalWrapper";
import { Box } from "@mui/material";
import CustomPaper from "../../Components/CustomPaper";
import CustomTable from "../../Components/CustomTable";
import { IMockData } from "../../../API/mockData/book";


interface ICategoryPage {
  titleText: string;
  data: any[];
}

function handleClick(event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) {
  event.preventDefault();
  console.info("You clicked a breadcrumb.");
}

function CategoryPage({ titleText, data }: ICategoryPage) {
  return (
    <>
      <GlobalWrapper>
        <SubHead subHeadText={titleText} />
        <CustomPaper>
          <CustomTable data={data} />
        </CustomPaper>
      </GlobalWrapper>
    </>
  );
}

export default CategoryPage;
