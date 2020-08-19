import React from 'react';
import {Typography,Avatar,Grid,Box} from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles"
import Typed from "react-typed";
import avatar from "../santosh 01.png";

// CSS Style

const useStyles= makeStyles(theme=>({
    avatar: {
        width:theme.spacing(25),
        height:theme.spacing(25),
        margin:theme.spacing(1),
    },
    title:{
        color:"tomato",
        fontWeight:"700"
    },
    subTitle:{
        color:"#f4e04d",
        marginBottom:"3rem",
    },
    typedContainer:{
        position:"absolute",
        top:"50%",
        left:"50%",
        transform:"translate(-50%, -50%)",
        width:"100vw",
        textAlign:"center",
        zIndex:"1"
    }
}));

const Header = () => {
    const styles = useStyles();
    return (
        <Box className={styles.typedContainer} >
                <Grid container justify = "center">
                    <Avatar className={styles.avatar} src={avatar} alt="Santosh-yadav" />
                </Grid>
                <Typography className={styles.title} variant="h4">
                <Typed
                        strings={["Santosh Yadav"]}
                        typeSpeed={40}
                    />
                </Typography>
                <Typography className={styles.subTitle} variant="h4">
                    <Typed
                        strings={["Web Developer", "App Developer","Server Administration","Freelancer", ]}
                        typeSpeed={40}
                        backSpeed={60}
                        loop
                    />
                </Typography>
        </Box>
    )
};

export default Header;

