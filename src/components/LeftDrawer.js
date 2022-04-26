import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import AddBusiness from '@mui/icons-material/AddBusiness';
import AddCard from '@mui/icons-material/AddCard';
import AssignmentTurnedInIcon from '@mui/icons-material/AssignmentTurnedIn';
import CardComponent from './CardComponent';
import Grid from '@mui/material/Grid';

const drawerWidth = 240;

export default function LeftDrawer() {
  return (
    <Box sx={{ display: 'flex' }}>
      <AppBar
        position="fixed"
        sx={{ width: `calc(100% - ${drawerWidth}px)`, ml: `${drawerWidth}px`, backgroundColor: 'white', color: 'black' }}
      >
        <Toolbar>
          <Typography variant="h6" noWrap component="div">
            Marketing Plugins
          </Typography>
        </Toolbar>
      </AppBar>
        <Drawer
          sx={{
            width: drawerWidth,
            flexShrink: 0,
            '& .MuiDrawer-paper': {
              width: drawerWidth,
              boxSizing: 'border-box',
            },
          }}
          variant="permanent"
          anchor="left"
        >
          <Box
            component="img"
            sx={{
            height: 64,
            marginTop: 4
            }}
            alt="Your logo."
            src="dummy-logo.png"
        />
        
        <List>
          {['Marketing', 'Finance', 'Personnel'].map((text, index) => (
            <ListItem button key={text}>
              <ListItemIcon>
                {text === 'Marketing'? <AddBusiness /> : text === 'Finance' ? <AddCard /> : text === 'Personnel' ? <AssignmentTurnedInIcon /> : ""}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List>
      </Drawer>
      <Box
        component="main"
        sx={{ flexGrow: 1, bgcolor: 'background.default', p: 3, display:'flex', mt: 10, justifyContent: 'space-between' }}
      >
        <Toolbar />
        <Grid container spacing={4}>
          <Grid item xs={12} sm={6} md={4} lg={3} >
            <CardComponent />
          </Grid>
          <Grid item xs={12} sm={6} md={4} lg={3}>
            <CardComponent />
          </Grid>
          <Grid item xs={12} sm={6} md={4} lg={3}>
          <CardComponent />
          </Grid>
          <Grid item xs={12} sm={6} md={4} lg={3}>
            <CardComponent />
          </Grid>
        </Grid>             
      </Box>
    </Box>
  );
}