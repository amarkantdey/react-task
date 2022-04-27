import * as React from 'react';
import { alpha, styled } from '@mui/material/styles';
import { pink, green } from '@mui/material/colors';
import Switch from '@mui/material/Switch';
import FormControlLabel from '@mui/material/FormControlLabel';

const IOSSwitch = styled((props) => (
  <Switch focusVisibleClassName=".Mui-focusVisible" disableRipple {...props} />
))(({ theme }) => ({
  width: 42,
  height: 26,
  padding: 0,
  '& .MuiSwitch-switchBase': {
    padding: 0,
    margin: 2,
    transitionDuration: '300ms',
    '&.Mui-checked': {
      transform: 'translateX(16px)',
      color: '#fff',
      '& + .MuiSwitch-track': {
        backgroundColor: theme.palette.mode === 'dark' ? '#2ECA45' : '#65C466',
        opacity: 1,
        border: 0,
      },
      '&.Mui-disabled + .MuiSwitch-track': {
        opacity: 0.5,
      },
    },
    '&.Mui-focusVisible .MuiSwitch-thumb': {
      color: '#33cf4d',
      border: '6px solid #fff',
    },
    '&.Mui-disabled .MuiSwitch-thumb': {
      color:
        theme.palette.mode === 'light'
          ? theme.palette.grey[100]
          : theme.palette.grey[600],
    },
    '&.Mui-disabled + .MuiSwitch-track': {
      opacity: theme.palette.mode === 'light' ? 0.7 : 0.3,
    },
  },
  '& .MuiSwitch-thumb': {
    boxSizing: 'border-box',
    width: 22,
    height: 22,
  },
  '& .MuiSwitch-track': {
    borderRadius: 26 / 2,
    backgroundColor: theme.palette.mode === 'light' ? 'red' : '#39393D',
    opacity: 1,
    transition: theme.transitions.create(['background-color'], {
      duration: 500,
    }),
  },
}));


const label = { inputProps: { 'aria-label': 'Switch demo' } };

export default function CustomSwitch(props) {
  
  const [label, setLabel] = React.useState(props.checked ? "Allowed" : 'Blocked' )
  const [labelColor, setLabelColor] = React.useState(props.checked ? "#2ECA45" : "red" );
  const [disableSwitch, setDisableSwitch] = React.useState(props.disabled ? true : false );

  const updateLabel = (event) => {
    if(event.target.checked) {
      setLabel("Allowed")
      setLabelColor("#2ECA45")
    }
    else {
      setLabel("Blocked")
      setLabelColor("red")
    }
  }

  return (
    <div>
      {/* <GreenSwitch {...label} defaultChecked /> */}
      <FormControlLabel
          value="bottom"
          control={<IOSSwitch sx={{ m: 1 }} onChange={updateLabel} defaultChecked={props.checked}   />}
          label={label}
          sx={{color: labelColor}}
          labelPlacement="bottom"
          disabled={disableSwitch}
        />
    </div>
  );
}