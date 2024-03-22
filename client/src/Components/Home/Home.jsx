import { React, useEffect } from "react";
import NavBar from "./NavBar";
import Banner from "./Banner";
import { getProducts } from "../../Redux/Actions/product-action";
import { useDispatch, useSelector } from "react-redux";
import Slide from "./Slide";
import MidSlide from "./MidSlide";
import MidSection from "./MidSection";

const Home = () => {
  const { products } = useSelector((state) => state.getProducts);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);

  return (
    <>
      <NavBar></NavBar>
      <Banner></Banner>
      <MidSlide
        products={products}
        title="Deal of the Day!"
        slide={true}
        timer={true}
      ></MidSlide>
      <MidSection></MidSection>
      <Slide
        products={products}
        title="Discounts for you!"
        slide={true}
        timer={false}
      ></Slide>
      <Slide
        products={products}
        title="Suggesting Items!"
        slide={true}
        timer={false}
      ></Slide>
      <Slide
        products={products}
        title="Top Selections!"
        slide={true}
        timer={false}
      ></Slide>
      <Slide
        products={products}
        title="Recommended Items!"
        slide={true}
        timer={false}
      ></Slide>
      <Slide
        products={products}
        title="Trending Offers!"
        slide={true}
        timer={false}
      ></Slide>
      <Slide
        products={products}
        title="Season's top picks!"
        slide={true}
        timer={false}
      ></Slide>
      <Slide
        products={products}
        title="Top Deals on Accesories!"
        slide={true}
        timer={false}
      ></Slide>
    </>
  );
};

export default Home;
