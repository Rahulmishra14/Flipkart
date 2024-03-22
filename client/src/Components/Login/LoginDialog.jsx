import React, { useContext, useState } from "react";
import {
  Box,
  Button,
  Dialog,
  TextField,
  Typography,
  styled
} from "@mui/material";
import { apiRequest,loginAuthentication } from "../../Services/api";
import { DataContext } from "../../Context/DataProvider";

const Component = styled(Box)`
  height: 70vh;
  width: 90vh;
  display: flex;
`;

const Image = styled(Box)`
  background: #2874f0
    url(https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/login_img_c4a81e.png)
    center 85% no-repeat;
  height: 86%;
  width: 28%;
  padding: 45px 35px;
  & > p,
  & > h5 {
    font-weight: 600;
    color: #ffffff;
  }
`;

const Wrapper = styled(Box)`
  display: flex;
  flex-direction: column;
  padding: 25px 45px;
  flex: 1;
  & > div,
  & > button,
  & > p {
    margin-top: 20px;
  }
`;

const LoginButton = styled(Button)`
  text-transform: none;
  background: #fb641b;
  color: #fff;
  height: 48px;
  border-radius: 2px;
`;

const OtpButton = styled(Button)`
  text-transform: none;
  background: #fff;
  color: #2874f0;
  height: 48px;
  border-radius: 2px;
  box-shadow: 0 2px 4px 0 rgb(0 0 0/ 20%);
`;

const Text = styled(Typography)`
  color: #878787;
  font-size: 12px;
`;

const New = styled(Typography)`
  font-size: 14px;
  text-align: center;
  color: #2874f0;
  font-weight: 600;
  cursor: pointer;
`;

const accountInitialValues = {
  login: {
    view: "login",
    heading: "Login",
    subHeading: "Get Acccess to your orders.",
  },
  signUp: {
    view: "signup",
    heading: "Looks like you're new here!",
    subHeading: "Sign UP !",
  },
};

const signUpInitialValues = {
  firstname: "",
  lastname: "",
  username: "",
  email: "",
  password: "",
  phone: "",
};

const loginInitialValues={
  username:"",
  password:""
}

const LoginDialog = ({ loginState, loginClosed }) => {
  const [isRegisterOpen, handleRegistration] = useState(
    accountInitialValues.login
  );
  const [signUpValues, handleSignUpValue] = useState(signUpInitialValues);
  const [loginValues,setLoginValues]=useState(loginInitialValues);
  const [error,setError]=useState("");

  const handleClose = () => {
    loginClosed(false);
    handleLogin(accountInitialValues.login);
  };
  const handleUserRegistration = () => {
    handleRegistration(accountInitialValues.signUp);
  };
  const handleLogin = () => {
    handleRegistration(accountInitialValues.login);
  };
  const {setAccount}=useContext(DataContext);

  const onInputChange = (event) => {
    handleSignUpValue({
      ...signUpValues,
      [event.target.name]: event.target.value,
    });
    // console.log(signUpValues);
  };

  const onValueChange = (event) => {
    setLoginValues({
      ...loginValues,
      [event.target.name]: event.target.value,
    });
    // console.log(signUpValues);
  };

  const signUpUser = async () => {
    let serverResponse = await apiRequest(signUpValues);
    if (!serverResponse) return;
    handleClose();
    setAccount(signUpValues.firstname)
  };

  const loginUser=async()=>{
    let userResponse=await loginAuthentication(loginValues);
    if(userResponse.status===200){
      handleClose();
      setAccount(loginValues.username)
      setError("");
    }else{
      setError("Invalid Username or Password!!")
    }

  }

  const clearError=()=>{
    setError("");
  }

  return (
    <>
      <Dialog
        open={loginState}
        onClose={handleClose}
        PaperProps={{ sx: { maxWidth: "unset" } }}
      >
        <Component>
          <Image>
            <Typography variant="h5">{isRegisterOpen.heading}</Typography>
            <Typography style={{ marginTop: 20 }}>
              {isRegisterOpen.subHeading}
            </Typography>
          </Image>
          {isRegisterOpen.view === "login" ? (
            <Wrapper>
              <TextField
                variant="standard"
                label="Enter Email/Mobile Number" name="username"
                onChange={(e) => onValueChange(e)} onKeyUp={clearError}
              ></TextField>
              <TextField variant="standard" name="password"
                onChange={(e) => onValueChange(e)} label="Enter Password"></TextField>
              <Typography style={{color:"red"}}>{error}</Typography>
              <Text>
                By continuing you agree to flipkart's terms and conditions.
              </Text>
              <LoginButton onClick={loginUser}>Login</LoginButton>
              <Typography style={{ textAlign: "center" }}>OR</Typography>
              <OtpButton>Request OTP</OtpButton>
              <New onClick={handleUserRegistration}>
                New to flipkart? Create an Account.
              </New>
            </Wrapper>
          ) : (
            <Wrapper>
              <TextField
                variant="standard"
                label="Enter Frist Name"
                name="firstname"
                onChange={(e) => onInputChange(e)}
              ></TextField>
              <TextField
                variant="standard"
                label="Enter Last Name"
                name="lastname"
                onChange={(e) => onInputChange(e)}
              ></TextField>
              <TextField
                variant="standard"
                label="Enter Username"
                name="username"
                onChange={(e) => onInputChange(e)}
              ></TextField>
              <TextField
                variant="standard"
                label="Enter Email"
                name="email"
                onChange={(e) => onInputChange(e)}
              ></TextField>
              <TextField
                variant="standard"
                label="Enter Password"
                name="password"
                onChange={(e) => onInputChange(e)}
              ></TextField>
              <TextField
                variant="standard"
                label="Enter Phone"
                name="phone"
                onChange={(e) => onInputChange(e)}
              ></TextField>
              <New onClick={handleLogin}>
                Existing User? Click Here to Log In.
              </New>
              <LoginButton onClick={signUpUser}>Continue</LoginButton>
            </Wrapper>
          )}
        </Component>
      </Dialog>
    </>
  );
};

export default LoginDialog;
