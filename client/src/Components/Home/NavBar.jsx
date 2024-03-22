import React from 'react'
import { navData } from '../../Constants/data'
import { Box, Typography, styled } from '@mui/material'

const CustomWrapper=styled(Box)(({theme})=>({
    display:'flex',
    justifyContent:'space-between',
    overflow:'hidden',
    margin:'55px 130px 0 130px',
    [theme.breakpoints.down('lg')]:{
      margin:0
    }

}));

const Text=styled(Typography)`
    font-size:14px;
    font-weight:600;
    font-family: inter_semi_bold,fallback-inter_semi_bold,Arial,sans-serif;
`

const Container =styled(Box)`
    padding:12px 8px;
    text-align:center;
`

const NavBar = () => {
  return (
    <CustomWrapper>
      {
        navData.map(data=>(
            <Container>
            <img src={data.url} alt='Nav' style={{width:64}}/>
            <Text>{data.text}</Text>
            </Container>
        ))
      }
    </CustomWrapper>
  )
}

export default NavBar
