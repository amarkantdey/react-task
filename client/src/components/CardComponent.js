import * as React from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import CustomSwitch from './CustomSwitch'

export default function CardComponent(props) {
  console.log(props)
  const [background, setBackground] = React.useState(props.disabled ? "#f4f4f4" : "")
  React.useEffect(() => { setBackground(props.disabled ? "#f4f4f4" : "") }, [props.disabled]);
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