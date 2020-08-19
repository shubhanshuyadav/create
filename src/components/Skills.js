import React from 'react';
import SkillsImg from "./SkillsImg";
import {Grid} from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";
import Css from "../images/css.png";
import php from "../images/php.png";
import ajax from "../images/ajax.png";
import git from "../images/git.png";
import github from "../images/github.png";
import javascript from "../images/javascript.png";
import linux from "../images/linux.png";
import python from "../images/python.png";
import mysql from "../images/mysql.png";
import code from "../images/code.png";
import vuetify from "../images/vuetify.png";
import Vue from "../images/Vue.png";
import laravel from "../images/laravel.png";
import jqury from "../images/jqury.png";
import bootstrap from "../images/bootstrap.png";
import fairbase from "../images/fairbase.png";
import html5 from "../images/html5.png";
import Navbar from "./Navbar";


function Skills() {
    return(
          <div>
      <Navbar />
         <Grid container
        direction="row"
        justify="center"
        alignItems="center">

              <Grid>
                    <SkillsImg  src={Css} alt="s1" />
              </Grid>

              <Grid>
                    <SkillsImg  src={php} alt="s1" />
              </Grid>

              <Grid>
                    <SkillsImg src={python} alt="s1" />
              </Grid>

              <Grid>
                    <SkillsImg  src={code} alt="s1" />
              </Grid>

              <Grid>
                    <SkillsImg  src={javascript} alt="s1" />
              </Grid>

              <Grid>
                    <SkillsImg  src={git} alt="s1" />
              </Grid>

              <Grid>
                    <SkillsImg  src={github} alt="s1" />
              </Grid>

              <Grid>
                    <SkillsImg  src={linux} alt="s1" />
              </Grid>

              <Grid>
                    <SkillsImg  src={ajax} alt="s1" />
              </Grid>

              <Grid>
                    <SkillsImg  src={mysql} alt="s1" />
              </Grid>

              <Grid>
                    <SkillsImg  src={vuetify} alt="s1" />
              </Grid>

              <Grid>
                    <SkillsImg  src={fairbase} alt="s1" />
              </Grid>

              <Grid>
                    <SkillsImg  src={bootstrap} alt="s1" />
              </Grid>

              <Grid>
                    <SkillsImg  src={jqury} alt="s1" />
              </Grid>

              <Grid>
                    <SkillsImg  src={Vue} alt="s1" />
              </Grid>

              <Grid>
                    <SkillsImg  src={laravel} alt="s1" />
              </Grid>

              <Grid>
                    <SkillsImg  src={html5} alt="s1" />
              </Grid>


              </Grid>
              </div>
              );


};

export default Skills;
