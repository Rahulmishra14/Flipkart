import { Box, styled } from "@mui/material";
import Header from "./Components/Header/Header";
import Home from "./Components/Home/Home";
import DataProvider from "./Context/DataProvider";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import DetailView from "./Components/Details/DetailView";
import Cart from "./Components/Cart/Cart";
import PaymentSuccess from "./Components/Payment/PaymentSuccess";
import PaymentFailure from "./Components/Payment/PaymentFailure";

const CustomWrapper = styled(Box)`
  margin-top: 54px;
`;

function App() {
  return (
    <DataProvider>
      <BrowserRouter>
        <Header />
        <CustomWrapper>
          <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/product/:id" element={<DetailView/>} />
            <Route path="/cart" element={<Cart/>} />
            <Route path="/payment-success" element={<PaymentSuccess/>} />
            <Route path="/payment-failure" element={<PaymentFailure/>} />
            {/* <DetailView></DetailView> */}
          </Routes>
        </CustomWrapper>
      </BrowserRouter>
    </DataProvider>
  );
}

export default App;
