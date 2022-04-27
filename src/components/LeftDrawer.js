import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import CssBaseline from "@mui/material/CssBaseline";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import AddBusiness from "@mui/icons-material/AddBusiness";
import AddCard from "@mui/icons-material/AddCard";
import AssignmentTurnedInIcon from "@mui/icons-material/AssignmentTurnedIn";
import CardComponent from "./CardComponent";
import Grid from "@mui/material/Grid";
import {BrowserRouter as Router, Routes, Route, Link} from "react-router-dom";
import DrawerContent from "./DrawerContent";
import { Button } from "@mui/material";

const drawerWidth = 240;

export default function LeftDrawer(props) {

  const [header, setHeader] = React.useState("Marketing Plugins");
  const [selectedTab, setSelectedTab] = React.useState(null);

  const setPageDetail = (tabName, tabNameInternal) => {
    setHeader(tabName + " Plugins");
    setSelectedTab(tabNameInternal);
  };

  React.useEffect(() => {
    setSelectedTab("tab1");
  }, []);

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
      <Router>
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
            {props.tabs?.map((tabName, index) => (
              <Link to="/" style={{textDecoration: "none", color: "#060314bf"}} key={tabName}>
                <ListItem
                  button
                  key={tabName}
                  onClick={() =>
                    setPageDetail(props.tabData[tabName]?.title, tabName)
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
          <Button sx={{marginTop: 'auto', marginBottom:'3rem'}}>Click me</Button>
        </Drawer>
        <Routes>
          <Route exact path="/" element={<DrawerContent tabData={props.tabData} tabs={props.tabs} plugins={props.plugins} selectedTab={selectedTab}/>}>
            {/* <Box
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
                  props.tabData["tab1"]?.active.map((pluginName, index) => (
                    <Grid item xs={12} sm={6} md={4} lg={3}>
                      <CardComponent plugin={props.plugins[pluginName]} />
                    </Grid>
                  ))}
              </Grid>
            </Box> */}
          </Route>
        </Routes>
      </Router>
    </Box>
  );
}
