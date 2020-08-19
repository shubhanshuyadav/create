import React,{useState} from "react";
import {Link} from "react-router-dom"
import avatar from "../santosh 01.png";
import { makeStyles } from '@material-ui/core/styles';
import MobilRightMenuSlider from "@material-ui/core/Drawer"
import {
    AppBar,
    Toolbar,
    ListItem,
    IconButton,
    ListItemIcon,
    ListItemText,
    Avatar,
    Divider,
    List,
    Typography,
    Box
} from "@material-ui/core";
import MenuIcon from '@material-ui/icons/Menu';

import {
    AssignmentInd,
    Home,
    Apps,
    ContactMail
} from "@material-ui/icons"

const useStyles=makeStyles(theme=> ({
    menuSliderContainer:{
        width:250,
        background:"#511",
        height:"100%"
    },

    avatar:{
        display:"block",
        margin:"0.5rem auto",
        width:theme.spacing(13),
        height:theme.spacing(13)
    },

    listItem:{
        color:"tan"
    }
}));

const menuItems= [
    {
        listIcon:<Home/>,
        listText:"Home",
        listPath:"/"
    },


    {
        listIcon:<Apps/>,
        listText:"Projects",
        listPath:"/projects"
    },

    {
        listIcon:<AssignmentInd/>,
        listText:"Tools & Technology",
        listPath:"/skills"
    },

    {
        listIcon:<ContactMail/>,
        listText:"Contacts",
        listPath:"/contacts"
    },


]

function Navbar(){
    const [state, setState]= useState({
        right:false
    });

    const toggleSlider = (slider, open) => () => {
        setState({ ...state, [slider]:open});
    };


    const styles = useStyles()
    const sideList=slider => (
        <Box className={styles.menuSliderContainer} component="div" onClick={toggleSlider(slider,false)}>
        <Avatar className={styles.avatar}  src={avatar} alt="Sontosh-Avatar" />
        <Divider/>
        <List>
                {menuItems.map((IsItem, key) => (
                    <ListItem button key={key} component={Link} to={IsItem.listPath}>
                        <ListItemIcon className={styles.listItem}>{IsItem.listIcon}</ListItemIcon>
                        <ListItemText className={styles.listItem} primary={IsItem.listText} />
                    </ListItem>
                ))}
        </List>
        </Box>
        );

    return(
    <div>



        <Box component="nav">
            <AppBar position="static" style={{background:"#222"}}>
                <Toolbar>
                    <IconButton onClick={toggleSlider("right",true)}>
                        <MenuIcon style={{color:"tomato"}}/>
                    </IconButton>
                    <Typography variant="h5" style={{color:"tan"}}>Portfolio</Typography>
                    <MobilRightMenuSlider
                        open={state.right}
                        onClose={toggleSlider("right", false)}
                        anchor="right"
                    >
                    {sideList("right")}
                    </MobilRightMenuSlider>
                </Toolbar>
            </AppBar>
        </Box>
    </div>
    );
}
 export default Navbar;
