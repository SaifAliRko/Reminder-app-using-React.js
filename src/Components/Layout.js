import React from "react";

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import { useLocation, useHistory } from "react-router-dom";
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import NotesIcon from '@material-ui/icons/Notes';
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
import { Avatar } from "@material-ui/core";
import {format} from 'date-fns';


const drawerWidth = 240;

const useStyles = makeStyles(() => ({

  page:{
      width: '100%',
      padding: 20,
      background:'#f9f9f9',

  },
  root: {
    display: 'flex',
  },
  appBar: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
  },
  drawer: {
    
    width: drawerWidth,
    
  },
  drawerPaper: {
    width: drawerWidth,
  },
  active:{
    background: '#f4f4f4'
  }
  // necessary for content to be below app bar

 
}));

export default function Layout({ children }) {
    const classes = useStyles();
    let location = useLocation();
    let history = useHistory()
    
    const MyNotesHandler=()=>{
        // if (location.pathname=='/create'){
        //     return history.push('/')
        // }
        // return history.push('/create')
        history.push('/')

    }

    const CreateNotesHandler = ()=>{
        history.push('/create')
    }
  return (
    <div>

{/* App Bar */}


      <AppBar className={classes.appBar} color= "transparent" position="static" elevation={0}>
        <Toolbar>
          <Typography variant="h6" align="left" style={{flexGrow:1}}>
            Today is the {format(new Date(), 'do MMMM Y')}
          </Typography>
          <Typography variant="h6" style={{margin:20}}>Saif Ali</Typography>
          <Avatar src="/mario-av.png" />
        </Toolbar>
      </AppBar>

{/* {SIDE DRAWER} */}
      <Drawer
        className={classes.drawer}
        variant="permanent"
        classes={{
          paper: classes.drawerPaper,
        }}
        anchor="left"
      >
      <Typography align="left" variant ="h4" style={{margin:20}}>My Notes</Typography>
        <List >

          {/* {sidebarNames.map((text, index) => (
            <ListItem button key={text}>
              <ListItemIcon>{index % 2 === 0 ? <NotesIcon color='primary' /> : <AddCircleOutlineIcon color="primary" />}</ListItemIcon>
              <ListItemText primary={text} />
            </ListItem> */}
          
            <ListItem button  onClick={MyNotesHandler} className={location.pathname=='/' ? classes.active:null}>
              <ListItemIcon> <NotesIcon color='primary' />
              </ListItemIcon>
              <ListItemText primary='My Notes' />
            </ListItem>
            <ListItem button onClick={CreateNotesHandler}className={location.pathname=='/create' ? classes.active:null}>
              <ListItemIcon> <AddCircleOutlineIcon color="primary" />
              </ListItemIcon>
              <ListItemText primary='Create Notes' />
            </ListItem>
            
        </List>   
      </Drawer>


{/* Children */}
            <div className={classes.page}>
      {children}
      </div>
    </div>
  );
}
