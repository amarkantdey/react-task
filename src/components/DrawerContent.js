import React from "react";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import CardComponent from "./CardComponent";
import Grid from "@mui/material/Grid";

export default function DrawerContent(props) {
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
                checked={true}
                key={index}
              />
            </Grid>
          ))}

        {props.tabData &&
          props.tabData[props.selectedTab]?.inactive.map(
            (pluginName, index) => (
              <Grid item xs={12} sm={6} md={4} lg={3} key={index}>
                <CardComponent
                  plugin={props.plugins[pluginName]}
                  checked={false}
                  key={index}
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
                  checked={false}
                  key={index}
                  disabled={true}
                />
              </Grid>
            )
          )}
      </Grid>
    </Box>
  );
}
