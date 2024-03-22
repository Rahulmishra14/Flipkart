import React,{useContext, useState} from "react";
import { Badge, Box, Button, Typography, styled } from "@mui/material";
import { ShoppingCart } from "@mui/icons-material";
import LoginDialog from "../Login/LoginDialog";
import { DataContext } from "../../Context/DataProvider";
import Profile from "./Profile";
import {Link} from 'react-router-dom';
import { UseSelector, useSelector } from "react-redux";

const Container = styled(Link)(({ theme }) => ({
  display: 'flex',
  [theme.breakpoints.down('sm')]: {
      display: 'block'
  }
}));

const Wrapper = styled(Box)(({ theme }) => ({
  margin: '0 3% 0 auto',
  display: 'flex',
  '& > *': {
      marginRight: '40px !important',
      textDecoration: 'none',
      color: '#FFFFFF',
      fontSize: 12,
      alignItems: 'center',
      [theme.breakpoints.down('sm')]: {
          color: '#2874f0',
          alignItems: 'center',
          display: 'flex',
          flexDirection: 'column',
          marginTop: 10
      }
  },
  [theme.breakpoints.down('sm')]: {
      display: 'block'
  }
}));

const LoginButton = styled(Button)(({ theme }) => ({
  color: '#2874f0',
  background: '#FFFFFF',
  textTransform: 'none',
  fontWeight: 600,
  borderRadius: 2,
  padding: '5px 40px',
  height: 32,
  boxShadow: 'none',
  [theme.breakpoints.down('sm')]: {
      background: '#2874f0',
      color: '#FFFFFF'
  }
}));

const CustomButton = () => {
  const [isLoginOpen,isLoginClosed]=useState(false)
  const {setAccount,account}=useContext(DataContext)
  const {cartItems}=useSelector(state=>state.cart)
  const loginToggler=()=>{
    isLoginClosed(true)
  }
  return (
    <Wrapper>
      {
        account?<Profile account={account} setAccount={setAccount}/>:<LoginButton variant="contained" onClick={loginToggler}>Login</LoginButton>
      }
      
      <Typography style={{marginTop:3,width:135}}>Become a Seller</Typography>
      <Typography style={{marginTop:3}}>More</Typography>
      <Container to="/cart">
        <Badge badgeContent={cartItems?.length} color="secondary">
        <ShoppingCart/>
        </Badge>
        <Typography style={{paddingLeft:8}}>Cart</Typography>
      </Container>
      <LoginDialog loginState={isLoginOpen} loginClosed={isLoginClosed}/>
    </Wrapper>
  );
};

export default CustomButton;
