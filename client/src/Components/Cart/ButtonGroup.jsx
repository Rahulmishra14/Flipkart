import { Box, Button,styled,ButtonGroup } from '@mui/material'
import React, { useState } from 'react'

const Component = styled(ButtonGroup)`
    margin-top: 30px;
`;

const StyledButton = styled(Button)`
    border-radius: 50%;
`;

const ButtonGroupComponent = () => {
    const [currentValue,updateValue]=useState(1);
    const incrementItem=()=>{
        updateValue(currentValue=>currentValue+1)
    }
    const decrementItem=()=>{
        updateValue(currentValue=>currentValue-1)
    }
  return (
    <>
     <Component>
        <StyledButton onClick={()=>decrementItem()}>
            -
        </StyledButton>
        <StyledButton>{currentValue}</StyledButton>
        <StyledButton onClick={()=>incrementItem()}>+</StyledButton>
     </Component> 
    </>
  )
}

export default ButtonGroupComponent
