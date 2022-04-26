import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import CustomSwitch from './CustomSwitch'

export default function CardComponent() {

  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardHeader
        action={
          <CustomSwitch />
        }
        title="Plugin 1"
        sx={{ textAlign: 'start'}}
      />

      <CardContent>
        <Typography variant="body2" color="text.secondary" sx={{ textAlign: 'start'}}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.  
        </Typography>
      </CardContent>

    </Card>
  );
}