import React from "react";
import { Box, Grid, Typography, styled } from "@mui/material";
import { useEffect } from "react";
import { UseDispatch, useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getProductDetails } from "../../Redux/Actions/product-action";
import ActionItem from "./ActionItem";
import ProductDetails from "./ProductDetails";
const Component = styled(Box)`
  margin-top: 55px;
  background: #f2f2f2;
`;

const Container = styled(Grid)(({ theme }) => ({
  background: "#FFFFFF",
  display: "flex",
  [theme.breakpoints.down("md")]: {
    margin: 0,
  },
}));

const RightContainer = styled(Grid)`
  margin-top: 50px;
  padding-left: 10%;
  & > p {
    margin-top: 10px;
  }
`;

// const PriceDetails = styled(Grid)`
//   dispaly:flex;

// `;

const DetailView = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const { loader, product } = useSelector((state) => state.getProductDetails);
  const fassured =
    "https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/fa_62673a.png";

  useEffect(() => {
    if (product && id !== product.id) {
      dispatch(getProductDetails(id));
    }
  }, [dispatch, id, product, loader]);
  return (
    <>
      <Component>
        <Box></Box>
        {product && Object.keys(product).length && (
          <Container container>
            <Grid item lg={4} md={4} sm={8} xs={12}>
              <ActionItem product={product} />
            </Grid>
            <RightContainer item lg={8} md={8} sm={8} xs={12}>
              <Typography>{product.title.longTitle}</Typography>
              <Typography
                style={{ marginTop: 5, color: "#878787", fontSize: 14 }}
              >
                8 Ratings & 1 Reviews
                <span>
                  <img src={fassured} style={{ width: 77, marginLeft: 20 }} />
                </span>
              </Typography>
              <Typography>
                <span style={{ fontSize: 28 }}>₹{product.price.cost}</span>
                &nbsp;&nbsp;&nbsp;
                <span style={{ color: "#878787" }}>
                  <strike>₹{product.price.mrp}</strike>
                </span>
                &nbsp;&nbsp;&nbsp;
                <span style={{ color: "#388E3C" }}>
                  {product.price.discount} off
                </span>
              </Typography>
              <ProductDetails product={product} />
            </RightContainer>
          </Container>
        )}
      </Component>
    </>
  );
};

export default DetailView;
