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

export default function CardComponent(props) {
  const [background, setBackground] = React.useState(props.disabled ? "#f4f4f4" : "")
  return (
    <Card sx={{ maxWidth: 345, background: background }}>
      <CardHeader
        action={
          <CustomSwitch key={props.plugin?.description} checked={props.checked} disabled={props.disabled} />
        }
        title={props.plugin?.title}
        sx={{ textAlign: 'start'}}
      />

      <CardContent sx={{height: 100}}>
        <Typography variant="body2" color="text.secondary" sx={{ textAlign: 'start'}}>
            {props.plugin?.description}  
        </Typography>
      </CardContent>

    </Card>
  );
}