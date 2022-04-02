import * as React from "react"
import LandscapeBackground from "../components/LandscapeBackground"
import useJSS from "../components/useJSS";
import ArcadeRoomGame from "../games/ArcadeRoom"
import useIsMobile from "../components/useIsMobile";

const stylesDesktop = {
    container:{
        position:"relative",
        width:"100vw",
        height:"100vh",
        display:"flex",
        justifyContent:"center",
        alignItems:"center",
        overflow:"hidden"
    },
    game:{
        width:"960px",
        height:"600px",
        maxWidth:"100vw",
        maxHeight:"100vh"
    },
    gameContainer:{
        position:"absolute",
    }
}
const stylesMobile = {
    game:{
        width:"350px",
        height:"200px",
    },
}


export default function ArcadeRoom() {
    const isMobile = useIsMobile();

    const styles = useJSS({ stylesDesktop, stylesMobile, isMobile });

    return <div style={styles.container}>
        <LandscapeBackground />
        <div style={styles.gameContainer}>
            <ArcadeRoomGame style={styles.game} />
        </div>
    </div>
}