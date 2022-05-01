import * as React from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import CustomSwitch from './CustomSwitch'

export default function CardComponent(props) {

  const [background, setBackground] = React.useState((props.disabled && !props.disableAllPluginNames?.includes(props.pluginName)) || (props.disableAllPlugins && props.disableAllPluginNames?.includes(props.pluginName)) ? "#f4f4f4" : "")
  const [checked, setChecked] = React.useState(props.checked)
  const [disabled, setDisabled] = React.useState(props.disabled)
  const [disableAllPlugins, setDisableAllPlugins] = React.useState(props.disableAllPlugins)
  React.useEffect(() => { setBackground((props.disabled && !props.disableAllPluginNames?.includes(props.pluginName)) || (props.disableAllPlugins && props.disableAllPluginNames?.includes(props.pluginName)) ? "#f4f4f4" : "") }, [props.disabled, props.disableAllPlugins]);
  React.useEffect(() => { setDisabled(props.disabled) }, [props.disabled ]);
  React.useEffect(() => { setChecked(props.checked) }, [props.checked ]);
  React.useEffect(() => { setDisableAllPlugins(props.disableAllPlugins) }, [props.disableAllPlugins ]);


  const updatePlugin = (isActive) => {
    props.updatePlugin(props.pluginName,isActive)
  }

  return (
    <Card sx={{ maxWidth: 345, background: background }}>
      <CardHeader
        action={
          <CustomSwitch key={props.plugin?.title} checked={checked} disabled={disabled} updatePlugin={updatePlugin} />
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