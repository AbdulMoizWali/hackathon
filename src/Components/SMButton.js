import * as React from 'react';
import Button from '@mui/material/Button';

export default function SMButton({label, variant, onClick, color, startIcon, endIcon, type, sx, fullWidth}) {
  return (
    <Button 
    variant={variant?variant:"contained"}
    color={color}
    startIcon={startIcon}
    endIcon={endIcon}
    onClick={onClick?()=> {
        onClick()
      }:null
    }
    type={type}
    fullWidth={fullWidth}
    sx={sx}
    >
        {label}
    </Button>
    //   <Button variant="text">Text</Button>
    //   <Button variant="contained">Contained</Button>
    //   <Button variant="outlined">Outlined</Button>
  );
}