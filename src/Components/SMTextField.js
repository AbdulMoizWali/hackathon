import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

export default function SMTextField({id, label, value, variant, onChange, InputProps, sx, name, type, required, fullWidth, margin}) {
  return (
      <TextField 
      id={id?id:"outlined-basic"} 
      label={label?label:"Input Field"} 
      name={name}
      type={type}
      value={value}
      {
        ...variant?variant=variant:""
      }   
      required={required}
      fullWidth={fullWidth}
      margin={margin}
      InputProps={InputProps?InputProps:null}
      
      onChange={onChange?(e)=> {
        onChange(e)
      }:null
      }
      sx={sx}
      />
      //<TextField id="outlined-basic" label="Outlined" variant="outlined" InputProps={InputProps}/>
    //   <TextField id="filled-basic" label="Filled" variant="filled" />
    //   <TextField id="standard-basic" label="Standard" variant="standard" />
  );
}