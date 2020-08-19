import React from "react";
import MediaCard from "./MediaCard";
import Grid from '@material-ui/core/Grid';
import p1 from "../images/p1.png";
import p2 from "../images/p2.png";
import p3 from "../images/p3.png";
import p4 from "../images/p4.png";
import p5 from "../images/p5.png";
import Navbar from "./Navbar"


export default function Projects()
{
    return(
    <div style={{background: "url(galaxy.png) no-repeat center center fixed"}}>
    <Navbar />
    <Grid container
  direction="row"
  justify="center"
  alignItems="center">
        <Grid>
            <MediaCard
                img={p1}
                title="Project 1"
                description="IFA (Israel Film Academy ) oscar competition is a video website for IFA members. In this website, members of the Israel Film Academy for Film and TV will watch films competing in their annual competition. The winning films will represent Israel in the American US Oscar competition."
                href="https://ophir.vodifa.co.il/login"

            />
        </Grid>


        <Grid>
            <MediaCard
                img={p2}
                title="Project 2"
                description="Movies Everywhere is a new 2020 initiative for showing films online. Movies Everywhere is a part of the Movie Discovery Group, which includes the QuickRights software and management system and the Movie Discovery video platform.Movies Everywhere is also consulting, on an ongoing basis, to the digitization project in the Israel film archive, whose mission is to restore, digitize and allow access to more than 100 of years of cinema in the Middle East."
                href="https://www.movieseverywhere.net/"
            />
        </Grid>

        <Grid>
            <MediaCard
                img={p3}
                title="Project 3"
                description="QuickRights is a powerful assistant and management tool for film distributors, producers, and right-holders. A discreet, efficient application (PWA) for managing film avails, agreements, and deliveries. Quickly present the film availabilities, get a reminder for expiring deals, contradicting territories and so on, in a friendly and accessible manner."
                href="https://quickrights.com/"
            />
        </Grid>

        <Grid>
            <MediaCard
                img={p4}
                title="Project 4"
                description="ePotli is an All in One safe and secure online shopping application for all the online shoppers of India. This app has been designed focusing on giving you one place for all your online shopping and giving you a better user experience."
                href="https://play.google.com/store/apps/details?id=net.readybytes.onlineshopping.epotli&hl=en"

            />
        </Grid>

        <Grid>
            <MediaCard
                img={p5}
                title="Project 5"
                description="A new kind of banking is emerging from all parts of India. It’s Kind of a co-operative bank, but on a very small scale, and without being a certified bank. This is known as SHG (Self help groups), BC, BeeCee, Committee, Friends-Club, Kitty Club, Money-Club etc."
                href="https://play.google.com/store/apps/details?id=com.sahabhagi&hl=en"

            />
        </Grid>

    </Grid>


    </div>
);
}
