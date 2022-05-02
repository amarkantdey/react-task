import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Typography from "@mui/material/Typography";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import AddBusiness from "@mui/icons-material/AddBusiness";
import AddCard from "@mui/icons-material/AddCard";
import AssignmentTurnedInIcon from "@mui/icons-material/AssignmentTurnedIn";
import {BrowserRouter as Router, Routes, Route, Link, Navigate, useNavigate  } from "react-router-dom";
import DrawerContent from "./DrawerContent";
import { styled } from '@mui/material/styles';
import Switch from '@mui/material/Switch';
import FormControlLabel from '@mui/material/FormControlLabel';

const IOSSwitch = styled((props) => (
  <Switch focusVisibleClassName=".Mui-focusVisible" disableRipple {...props} />
))(({theme}) => ({
  "width": 42,
  "height": 26,
  "padding": 0,
  "& .MuiSwitch-switchBase": {
    "padding": 0,
    "margin": 2,
    "transitionDuration": "300ms",
    "&.Mui-checked": {
      "transform": "translateX(16px)",
      "color": "#fff",
      "& + .MuiSwitch-track": {
        backgroundColor: theme.palette.mode === "dark" ? "#2ECA45" : "#65C466",
        opacity: 1,
        border: 0,
      },
      "&.Mui-disabled + .MuiSwitch-track": {
        opacity: 0.5,
      },
    },
    "&.Mui-focusVisible .MuiSwitch-thumb": {
      color: "#33cf4d",
      border: "6px solid #fff",
    },
    "&.Mui-disabled .MuiSwitch-thumb": {
      color:
        theme.palette.mode === "light"
          ? theme.palette.grey[100]
          : theme.palette.grey[600],
    },
    "&.Mui-disabled + .MuiSwitch-track": {
      opacity: theme.palette.mode === "light" ? 0.7 : 0.3,
    },
  },
  "& .MuiSwitch-thumb": {
    boxSizing: "border-box",
    width: 22,
    height: 22,
  },
  "& .MuiSwitch-track": {
    borderRadius: 26 / 2,
    backgroundColor: theme.palette.mode === "light" ? "red" : "#39393D",
    opacity: 1,
    transition: theme.transitions.create(["background-color"], {
      duration: 500,
    }),
  },
}));

const drawerWidth = 240;

export default function LeftDrawer(props) {

  let navigate = useNavigate();
  const [header, setHeader] = React.useState("Marketing Plugins");
  const [selectedTab, setSelectedTab] = React.useState(null);
  const [disableAllPlugins, setDisableAllPlugins] = React.useState(false);
  const [disableAllPluginNames, setDisableAllPluginsNames] = React.useState("");
  const [selected, setSelected] = React.useState(0);
  const [tabData, setTabData] = React.useState(props.tabData);
  const [tabs, setTabs] = React.useState(props.tabs);
  const [disableAllPluginChecked, setDisableAllPluginChecked] = React.useState(false);
  React.useEffect(() => { 
    setTabData(props.tabData) 
    setDisableAllPlugins(false);
    setDisableAllPluginsNames("")
    navigate("/marketing");
  }, [props.tabData]);

  React.useEffect(() => { 
    setTabs(props.tabs)
  }, [props.tabs]);


  const setPageDetail = (tabName, tabNameInternal, index) => {
    setHeader(tabName + " Plugins");
    setSelectedTab(tabNameInternal);
    setSelected(index)
    setDisableAllPlugins(false);
    setDisableAllPluginsNames("")
  };

  const setPluginDisabled = (tabName) => {
    tabData[tabName]?.active?.forEach(activePlugin => {
      if(tabData[tabName]?.disabled?.includes(activePlugin)){
        setDisableAllPluginChecked(true);
      }
      else{
        setDisableAllPluginChecked(false);
      }
    })
    tabData[tabName]?.inactive?.forEach(inactivePlugin => {
      if(tabData[tabName]?.disabled?.includes(inactivePlugin)){
        setDisableAllPluginChecked(true);
      }
      else{
        setDisableAllPluginChecked(false);
      }
    })
  }

  const updatePlugins = (event) => {
    if(event.target.checked) {
      setDisableAllPlugins(true);
      let pluginNames = [...props.tabData[selectedTab].active,...props.tabData[selectedTab].inactive, ...props.tabData[selectedTab].disabled]
      setDisableAllPluginsNames(pluginNames)
      setDisableAllPluginChecked(true);
      props.enableDisableAllPlugin(true, selectedTab)
    }
    else {
      setDisableAllPlugins(false);
      setDisableAllPluginChecked(false);
      props.enableDisableAllPlugin(false, selectedTab)
    }
  }

  React.useEffect(() => {
    setSelectedTab("tab1");
  }, []);

  const updatePlugin = (pluginName, isActive) => {
    props.updatePlugin(pluginName, isActive, selectedTab)
  }

  return (
    <Box sx={{display: "flex"}}>
      <AppBar
        position="fixed"
        sx={{
          width: `calc(100% - ${drawerWidth}px)`,
          ml: `${drawerWidth}px`,
          backgroundColor: "white",
          color: "black",
        }}
      >
        <Toolbar>
          <Typography variant="h6" noWrap component="div">
            {header}
          </Typography>
        </Toolbar>
      </AppBar>
        <Drawer
          sx={{
            "width": drawerWidth,
            "flexShrink": 0,
            "& .MuiDrawer-paper": {
              width: drawerWidth,
              boxSizing: "border-box",
            },
          }}
          variant="permanent"
          anchor="left"
        >
          <Box
            component="img"
            sx={{
              height: 64,
              marginTop: 4,
            }}
            alt="Your logo."
            src="dummy-logo.png"
          />

          <List>
            {tabs?.map((tabName, index) => (
              <Link
                to={`/${props.tabData[tabName]?.title.toLowerCase()}`}
                style={{textDecoration: "none", color: "#060314bf"}}
                key={tabName}
              >
                <ListItem
                  button
                  key={tabName}
                  selected={selected == index }
                  onClick={() =>
                    {
                      setPageDetail(props.tabData[tabName]?.title, tabName, index)
                      setPluginDisabled(tabName)
                    }
                  }
                >
                  <ListItemIcon>
                    {props.tabData[tabName].title === "Marketing" ? (
                      <AddBusiness />
                    ) : props.tabData[tabName].title === "Finance" ? (
                      <AddCard />
                    ) : props.tabData[tabName].title === "Personnel" ? (
                      <AssignmentTurnedInIcon />
                    ) : (
                      ""
                    )}
                  </ListItemIcon>
                  <ListItemText primary={props.tabData[tabName].title} />
                </ListItem>
              </Link>
            ))}
          </List>
          <Box sx={{marginTop: 'auto', marginBottom: '3rem'}}>
            <FormControlLabel
              value="bottom"
              control={
                <IOSSwitch
                  sx={{m: 1}}
                  onChange={updatePlugins}
                  checked={disableAllPluginChecked}
                />
              }
              label="All plugins disabled"
              sx={{color: 'black'}}
              labelPlacement="start"
            />
          </Box>
        </Drawer>
        <Routes>
          <Route
            exact
            path="/marketing"
            index 
            element={
              <DrawerContent
                tabData={tabData}
                tabs={tabs}
                plugins={props.plugins}
                selectedTab={selectedTab}
                disableAllPlugins={disableAllPlugins}
                disableAllPluginNames={disableAllPluginNames}
                updatePlugin={updatePlugin}
              />
            }
          ></Route>
           <Route
            exact
            path="/finance"
            element={
              <DrawerContent
                tabData={tabData}
                tabs={tabs}
                plugins={props.plugins}
                selectedTab={selectedTab}
                disableAllPlugins={disableAllPlugins}
                disableAllPluginNames={disableAllPluginNames}
                updatePlugin={updatePlugin}
              />
            }
          ></Route>
           <Route
            exact
            path="/personnel"
            element={
              <DrawerContent
                tabData={tabData}
                tabs={tabs}
                plugins={props.plugins}
                selectedTab={selectedTab}
                disableAllPlugins={disableAllPlugins}
                disableAllPluginNames={disableAllPluginNames}
                updatePlugin={updatePlugin}
              />
            }
          ></Route>
          <Route path="*" element={<Navigate  to="/marketing" replace />} />
        </Routes>
    </Box>
  );
}
