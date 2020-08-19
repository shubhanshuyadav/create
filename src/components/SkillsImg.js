import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {Avatar,Grid,Box} from "@material-ui/core";

const useStyles = makeStyles(theme=>({
  avatar: {
    width:theme.spacing(15),
    height:theme.spacing(15),
    margin:theme.spacing(1),
    "&:hover":{
      width:theme.spacing(18),
      height:theme.spacing(18),
      transition: "width 2s, height 2s"
    }
},

    imgStyle: {
       marginTop:"5rem",
       marginLeft:"5rem",
       marginRight:"5rem",
       marginBottom:"3rem",
      display:"inline-block"
  },
  }));

  function SkillsImg(props) {
    const classes = useStyles();

    return(
            <Box component="div" className={classes.imgStyle}>
                   <Avatar className={classes.avatar} src={props.src} alt="s1" />
            </Box>
            );
};

export default SkillsImg;


