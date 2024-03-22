import React, { useState } from "react";
import { AppBar, Toolbar, styled, Box, Typography,IconButton,Drawer,List,ListItem } from "@mui/material";
import Search from "./Search";
import { Menu } from "@mui/icons-material";
import CustomButton from "./CustomButton";
import { Link } from "react-router-dom";

const StyledHeader = styled(AppBar)`
    background: #2874f0;
    height: 55px;
`;

const Component = styled(Link)`
    margin-left: 12%;
    line-height: 0;
    color: #FFFFFF;
    text-decoration: none;
`;

const SubHeading = styled(Typography)`
    font-size: 10px;
    font-style: italic;
`

const PlusImage = styled('img')({
    width: 10,
    height: 10,
    marginLeft: 4
})

const MenuButton = styled(IconButton)(({ theme }) => ({
    display: 'none',
    [theme.breakpoints.down('sm')]: {
        display: 'block'
    }
}));

const CustomButtonWrapper = styled('span')(({ theme }) => ({ 
    margin: '0 5% 0 auto', 
    [theme.breakpoints.down('sm')]: {
        display: 'none'
    }
}));

const Header = () => {
  const logoURL =
    "https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/flipkart-plus_8d85f4.png";
  const subURL =
    "https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/plus_aef861.png";

  const [drawerStatus,handleDrawerStatus]=useState(false);
  const list = () => (
    <Box style={{ width: 250 }} onClick={()=>handleDrawerStatus(false)}>
        <List>
            <listItem button>
                <CustomButton/>
            </listItem>
        </List>
    </Box>
);
  return (
    <StyledHeader>
      <Toolbar>
        <MenuButton color="inherit" onClick={()=>handleDrawerStatus(true)}> 
          <Menu/>
        </MenuButton>
        <Drawer open={drawerStatus} onClose={()=>handleDrawerStatus(false)}>
          {list()}
        </Drawer>
        <Component to="/">
          <img src={logoURL} alt="logo" style={{ width: 75 }} />
          <Box style={{display:"flex"}}>
            <SubHeading>
              Explore &nbsp;
              <Box component="span" style={{ color: "#FFE500" }}>
                Plus
              </Box>
            </SubHeading>
            <PlusImage src={subURL} alt="sub-url"/>
          </Box>
        </Component>
        <Search></Search>
        <CustomButtonWrapper>
        <CustomButton></CustomButton>
        </CustomButtonWrapper>
        
      </Toolbar>
    </StyledHeader>
  );
};

export default Header;
