import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import InstagramIcon from '@material-ui/icons/Instagram';
import FacebookIcon from '@material-ui/icons/Facebook';
import MailIcon from '@material-ui/icons/Mail';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import {Box} from "@material-ui/core";
import Avatar from '@material-ui/core/Avatar';
import avatar from "../santosh.png";
import Navbar from "./Navbar";


const useStyles = makeStyles((theme) => ({
  root: {
    width: '90%',
    maxWidth: 360,
    backgroundColor:"#e0ece4" ,
    position:"relative",
    top:"10rem",
    margin:"auto",
    fontWeight:"700",
    marginBottom:"10rem"
  },
  avatar:{
    display:"block",
    margin:"0.5rem auto",
    top:"8rem",
    width:theme.spacing(13),
    height:theme.spacing(13)
  },
  typography:{
   backgroundColor:"black",
   textAlign:"center",
   color:"tomato",
   paddingTop:"0"
  }
}));

function ListItemLink(props) {
  return <ListItem button component="a" {...props} />;
}

export default function SimpleList() {
  const classes = useStyles();

  return (
    <div>
    <Navbar />
    <Avatar alt="Travis Howard" src={avatar} className={classes.avatar} />

<Box className={classes.root} container="div">

      <List  component="nav" aria-label="main mailbox folders">

      <ListItem  className={classes.typography}>
            <ListItemText primary="Contact me" />
        </ListItem>

        <ListItem button>
          <ListItemIcon>
             <InstagramIcon />
          </ListItemIcon>
                <ListItemLink href="https://www.instagram.com/i_m_santoshyadav/">
                    <ListItemText primary="@i_m_santoshyadav" />
                </ListItemLink>
        </ListItem>
        <Divider light />

        <ListItem button>
          <ListItemIcon>
             <FacebookIcon />
          </ListItemIcon>
                <ListItemLink href="https://www.facebook.com/sky.santosh.7">
                    <ListItemText primary="Facebook" />
                </ListItemLink>
        </ListItem>
        <Divider light />

        <ListItem button>
          <ListItemIcon>
             <MailIcon />
          </ListItemIcon>
                <ListItemLink href="#https://mail.google.com/mail/u/0/#inbox">
                    <ListItemText primary="yadav7866@gmail.com" />
                </ListItemLink>
        </ListItem>
        <Divider light />

        <ListItem button>
          <ListItemIcon>
             <LinkedInIcon />
          </ListItemIcon>
                <ListItemLink href="https://www.linkedin.com/in/iamsantoshyadav/">
                    <ListItemText primary="Linkedin" />
                </ListItemLink>
        </ListItem>
      </List>
      <Divider />
    </Box>
    </div>
  );
}
