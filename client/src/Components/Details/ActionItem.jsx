import { Box, Button, styled } from "@mui/material";
import React, { useState } from "react";
import {
  ShoppingCart as Cart,
  FlashOn as FlashIcon,
} from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToCart } from "../../Redux/Actions/cart-action.js";
import { payUsingPaytm } from "../../Services/api.js";
import { post } from "../../Utils/paytm.js";
import useRazorpay from "react-razorpay";
// import Razorpay from "razorpay";

const LeftContainer = styled(Box)(({ theme }) => ({
  minWidth: "40%",
  padding: "40px 0 0 80px",
  [theme.breakpoints.down("md")]: {
    padding: "20px 40px",
  },
}));

const Image = styled("img")({
  padding: "15px 20px",
  border: "1px solid #f0f0f0",
  width: "95%",
});

const StyledButton = styled(Button)`
  width: 46%;
  border-radius: 2px;
  height: 50px;
  color: #fff;
`;

const ActionItem = ({ product }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [Razorpay] = useRazorpay();
  const [quantity, setQuantity] = useState(1);
  const { id } = product;
  const addCart = () => {
    dispatch(addToCart(id, quantity));
    navigate("/cart");
  };
  const handlePaymentFailure = () => {
    alert("Payment Failed");
  };
  const makePayment = async () => {
    let response = await payUsingPaytm({
      amount: 500,
      email: "rahulmishra02022001@gmail.com",
    });
    let { data } = response;
    let res = data;
    console.log("response", res);
    var options = {
      key: "" + res.key_id + "",
      amount: "" + res.amount + "",
      currency: "INR",
      name: ""+product.title.longTitle+"",
      description: ""+product.description+"",
      image: ""+product.url+"",
      order_id: "" + res.order_id + "",
      handler: function (response) {
        navigate("/payment-success")
      },
      prefill: {
        contact: "" + res.contact + "",
        name: "" + res.name + "",
        email: "" + res.email + "",
      },
      notes: {
        description: "Payment",
      },
      theme: {
        color: "#2300a3",
      },
    };
    const rzp1 = new Razorpay(options);

    rzp1.on("payment.failed", function (response) {
      navigate("/payment-failure")
    });

    rzp1.open();
  };
  return (
    <>
      <LeftContainer>
        <Image src={product.detailUrl} alt="product-img" />
        <StyledButton
          style={{ background: "#ff9f00" }}
          variant="contained"
          onClick={() => addCart()}
        >
          <Cart />
          Add to Cart
        </StyledButton>
        <StyledButton
          style={{ background: "#fb541b", marginLeft: 10 }}
          variant="contained"
          onClick={() => makePayment()}
        >
          <FlashIcon />
          Buy Now
        </StyledButton>
      </LeftContainer>
    </>
  );
};

export default ActionItem;
