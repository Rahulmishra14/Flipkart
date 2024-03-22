import React from "react";
import Carousel from "react-multi-carousel";
import { bannerData } from "../../Constants/data";
import "react-multi-carousel/lib/styles.css";
import { styled } from "@mui/material";
// import {Box} from '@mui/material';

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 1,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 1,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

const Img = styled("img")(({theme})=>({
  width: "100%",
  height: 280,
  [theme.breakpoints.down('md')]:{
    objectFit:'cover',
    height:180
  }
}));
const Banner = () => {
  return (
    <Carousel
      responsive={responsive}
      swipeable={false}
      draggable={false}
      showDots={false}
      ssr={true} // means to render carousel on server-side.
      infinite={true}
      autoPlay={true}
      autoPlaySpeed={3000}
      keyBoardControl={true}
    >
      {bannerData.map((data) => (
        <Img src={data.url} alt="image" />
      ))}
    </Carousel>
  );
};

export default Banner;
