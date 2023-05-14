import * as React from 'react';
import Switch from '@mui/material/Switch';

export default function SMSwitch({color, onChange}) {
  return (
    <Switch
      checked={false}
      onChange={(e)=>onChange(e.target.checked)}
      inputProps={{ 'aria-label': 'controlled' }}
      color={color?color:null}
    />
  );
}