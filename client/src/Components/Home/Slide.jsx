import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Countdown from "react-countdown";
import { Box, Button, Divider, Typography, styled } from "@mui/material";
import { Link } from "react-router-dom";

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 4,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};
const Image = styled("img")({
  width: "auto",
  height: 150,
});

const Component = styled(Box)`
  margin-top: 10px;
  background: #ffffff;
`;

const Dealwrapper = styled(Box)`
  display: flex;
`;

// const Deal = styled(Box)`
//   padding: 15px 20px;
//   display: flex;
// `;

const Timer = styled(Box)`
  margin-left: 10px;
  align-items: center;
  color: #7f7f7f;
  display: flex;
`;

const ButtonComponent = styled(Button)`
  margin-left: auto;
  background-color: #2874f0;
  border-radius: 2px;
  font-size: 13px;
  font-weight: 600;
`;

const Heading = styled(Box)`
  font-weight: 600;
  margin-top: 10px;
`;

const Text = styled(Typography)`
  margin-top: 10px;
`;
const Slide = ({ products, title, slide, timer }) => {
  const timerURL =
    "https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/timer_a73398.svg";

  const renderer = ({ hours, minutes, seconds }) => {
    return (
      <Box variant="span">
        {hours}:{minutes}:{seconds} Left
      </Box>
    );
  };
  return (
    <>
      <Component>
        <Dealwrapper>
          <Heading>{title}</Heading>
          {timer && (
            <Timer>
              <img src={timerURL} alt="Timer" style={{ width: "24px" }} />
              <Countdown date={Date.now() + 5.04e7} renderer={renderer} />
            </Timer>
          )}

          <ButtonComponent variant="contained" color="primary">
            View All
          </ButtonComponent>
        </Dealwrapper>
        <Divider />

        <Carousel
          responsive={responsive}
          swipeable={false}
          draggable={false}
          showDots={false}
          ssr={true} // means to render carousel on server-side.
          infinite={true}
          autoPlay={slide}
          autoPlaySpeed={3000}
          centerMode={true}
          keyBoardControl={true}
          dotListClass="custom-dot-list-style"
          itemClass="carousel-item-padding-40-px"
          containerClass="carousel-container"
        >
          {products.map((data) => (
            <Link to={`product/${data.id}`} style={{textDecoration:'none'}}>
            <Box textAlign="center" style={{ padding: "25px 15px " }}>
              <Image src={data.url} alt="image" />
              <Text style={{ fontWeight: "600", color: "#212121" }}>
                {data.title.shortTitle}
              </Text>
              <Text style={{ color: "green" }}>{data.discount}</Text>
              <Text>{data.tagline}</Text>
            </Box>
            </Link>
          ))}
        </Carousel>
      </Component>
    </>
  );
};

export default Slide;
