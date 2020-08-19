import React from 'react';
import NavBar from "./Navbar"
import Header from "./Header"
import Particles from "react-particles-js"
import {makeStyles} from "@material-ui/styles"


const useStyle = makeStyles({
    particlesCanva: {

        position: "absolute",
        opacity:"0.3"
    },

})

const Home = () => {
    const styles = useStyle()
    return (
        <div >
            <NavBar />
            <Header />
            <Particles
            canvasClassName={styles.particlesCanva}
                params={{
                    particles:{
                        number:{
                            value:65,
                            density: {
                                enable: true,
                                value_area: 900
                            }
                        },
                        shape: {
                            type: "circle",
                            stroke: {
                                width:1,
                                color:"tomato"
                            }
                        },
                        size: {
                            value: 5,
                            random: true,
                            anim:{
                                enable: true,
                                speed:1,
                                size_min: 0.1,
                                sync:true
                            }
                        },
                        opacity: {
                            value: 0.5,
                            random: true,
                            anim: {
                                enable: true,
                                speed:1,
                                opacity_min:0.1,
                                sync:true
                            }
                        }
                    }
                }}
            />
        </div>
    )
}

export default Home;
