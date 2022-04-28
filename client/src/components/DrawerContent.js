import React from "react";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import CardComponent from "./CardComponent";
import Grid from "@mui/material/Grid";

export default function DrawerContent(props) {

  const [selectedTab, setSelectedTab] = React.useState(props.selectedTab);
  const [disableAllPlugins, setDisableAllPlugins] = React.useState(props.disableAllPlugins);
  const [disableAllPluginNames, setDisableAllPluginsNames] = React.useState(props.disableAllPluginNames);


  const updatePlugin = (pluginName, isActive) => {
    props.updatePlugin(pluginName, isActive)
  }

  return (
    <Box
      component="main"
      sx={{
        flexGrow: 1,
        bgcolor: "background.default",
        p: 3,
        display: "flex",
        mt: 10,
        justifyContent: "space-between",
      }}
    >
      <Toolbar />
      <Grid container spacing={4}>
        {props.tabData &&
          props.tabData[props.selectedTab]?.active.map((pluginName, index) => (
            <Grid item xs={12} sm={6} md={4} lg={3} key={index}>
              <CardComponent
                plugin={props.plugins[pluginName]}
                pluginName={pluginName}
                checked={true}
                key={index}
                selectedTab={selectedTab}
                disabled={disableAllPlugins}
                disableAllPluginNames={disableAllPluginNames}
                updatePlugin={updatePlugin}
              />
            </Grid>
          ))}

        {props.tabData &&
          props.tabData[props.selectedTab]?.inactive.map(
            (pluginName, index) => (
              <Grid item xs={12} sm={6} md={4} lg={3} key={index}>
                <CardComponent
                  plugin={props.plugins[pluginName]}
                  pluginName={pluginName}
                  checked={false}
                  key={index}
                  selectedTab={props.selectedTab}
                  disabled={props.disableAllPlugins}
                  disableAllPluginNames={props.disableAllPluginNames}
                  updatePlugin={updatePlugin}
                />
              </Grid>
            )
          )}

        {props.tabData &&
          props.tabData[props.selectedTab]?.disabled.map(
            (pluginName, index) => (
              <Grid item xs={12} sm={6} md={4} lg={3} key={index}>
                <CardComponent
                  plugin={props.plugins[pluginName]}
                  pluginName={pluginName}
                  checked={false}
                  key={index}
                  selectedTab={props.selectedTab}
                  disabled={true}
                  disableAllPluginNames={props.disableAllPluginNames}
                  updatePlugin={updatePlugin}
                />
              </Grid>
            )
          )}
      </Grid>
    </Box>
  );
}
