import { Box, Typography,Menu,MenuItem } from "@mui/material";
import React, { useState } from "react";

const Profile = ({ account,setAccount }) => {
    const [isMenuOpen,handleMenu]=useState(false)
    const handleOpen=(event)=>{
        handleMenu(event.currentTarget)
    }
    const handleClose=()=>{
        handleMenu(false)
    }

    const logOut=()=>{
        setAccount("");
    }
  return (
    <>
      <Box onClick={handleOpen}>
        <Typography style={{ marginTop: 2,cursor:"pointer" }}>{account}</Typography>
      </Box>
      <Menu
        anchorEl={isMenuOpen}
        open={Boolean(isMenuOpen)}
        onClose={handleClose}

      >
        <MenuItem onClick={()=>{handleClose(); logOut();}}>Logout</MenuItem>
      </Menu>
    </>
  );
};

export default Profile;
