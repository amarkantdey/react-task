import React from "react";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import CardComponent from "./CardComponent";
import Grid from "@mui/material/Grid";

export default function DrawerContent(props) {
  const [selectedTab, setSelectedTab] = React.useState(props.selectedTab);
  const [disableAllPlugins, setDisableAllPlugins] = React.useState(props.disableAllPlugins);
  React.useEffect(() => { setDisableAllPlugins(props.disableAllPlugins) }, [props.disableAllPlugins]);
  const [disableAllPluginNames, setDisableAllPluginsNames] = React.useState(props.disableAllPluginNames);
  React.useEffect(() => { setDisableAllPluginsNames(props.disableAllPluginNames) }, [props.disableAllPluginNames]);
  const [tabData, setTabData] = React.useState(props.tabData);
  React.useEffect(() => { 
    setTabData(props.tabData) 
    setDisableAllPlugins(props.disableAllPlugins);
    setDisableAllPluginsNames(props.disableAllPluginNames)
  }, [props.tabData, props.disableAllPlugins, props.disableAllPluginNames]);




  const updatePlugin = (pluginName, isActive) => {
    props.updatePlugin(pluginName, isActive);
  };

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
      <Grid container spacing={4} key={tabData}>
        {tabData &&
          tabData[props.selectedTab]?.active.map((pluginName, index) => {
            if(tabData[props.selectedTab]?.disabled?.includes(pluginName)){
              return (
                <Grid item xs={12} sm={6} md={4} lg={3} key={index}>
                  <CardComponent
                    plugin={props.plugins[pluginName]}
                    pluginName={pluginName}
                    checked={true}
                    key={index}
                    selectedTab={selectedTab}
                    disabled={true}
                    disableAllPlugins={true}
                    disableAllPluginNames={disableAllPluginNames}
                    updatePlugin={updatePlugin}
                  />
                </Grid>
              )
            }
            else {
              return (
                <Grid item xs={12} sm={6} md={4} lg={3} key={index}>
                  <CardComponent
                    plugin={props.plugins[pluginName]}
                    pluginName={pluginName}
                    checked={true}
                    key={index}
                    selectedTab={selectedTab}
                    disabled={false}
                    disableAllPlugins={false}
                    disableAllPluginNames={disableAllPluginNames}
                    updatePlugin={updatePlugin}
                  />
                </Grid>
              )
            }
          })}

        {tabData &&
          tabData[props.selectedTab]?.inactive.map(
            (pluginName, index) => {
              if(tabData[props.selectedTab]?.disabled?.includes(pluginName)){
                return (
                  <Grid item xs={12} sm={6} md={4} lg={3} key={index}>
                    <CardComponent
                      plugin={props.plugins[pluginName]}
                      pluginName={pluginName}
                      checked={false}
                      key={index}
                      selectedTab={props.selectedTab}
                      disabled={true}
                      disableAllPlugins={true}
                      disableAllPluginNames={disableAllPluginNames}
                      updatePlugin={updatePlugin}
                    />
                  </Grid>
                )
              }
              else {
                return (
                  <Grid item xs={12} sm={6} md={4} lg={3} key={index}>
                    <CardComponent
                      plugin={props.plugins[pluginName]}
                      pluginName={pluginName}
                      checked={false}
                      key={index}
                      selectedTab={props.selectedTab}
                      disabled={false}
                      disableAllPlugins={false}
                      disableAllPluginNames={disableAllPluginNames}
                      updatePlugin={updatePlugin}
                    />
                  </Grid>
                )
              }
            }
          )}

        {tabData &&
          tabData[props.selectedTab]?.disabled.map(
            (pluginName, index) => {
              if(!(tabData[props.selectedTab]?.active?.includes(pluginName) || tabData[props.selectedTab]?.inactive?.includes(pluginName))){
                return (
                  <Grid item xs={12} sm={6} md={4} lg={3} key={index}>
                    <CardComponent
                      plugin={props.plugins[pluginName]}
                      pluginName={pluginName}
                      checked={false}
                      key={index}
                      selectedTab={props.selectedTab}
                      disabled={true}
                      disableAllPlugins={disableAllPlugins || true}
                      disableAllPluginNames={disableAllPluginNames}
                      updatePlugin={updatePlugin}
                    />
                  </Grid>
                )
              }
            }
          )}
      </Grid>
    </Box>
  );
}
