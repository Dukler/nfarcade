
import * as React from "react"
import { StaticImage } from 'gatsby-plugin-image';
import LandscapeBackground from "../components/LandscapeBackground";
import useJSS from "../components/useJSS";

const stylesDesktop = {
    background:{
        height: "750px"
    },
    content:{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        // justifyContent:"center",
        padding: "0px",
        position: "absolute",
        width: "100vw",
        height: "150px",
        // left: "220px",
        top: "83px"
    },
    title:{
        // position: "relative",
        // width: "760px",
        height: "48px",
        // left: "0px",
        top: "0px",
        fontFamily: "'Teko'",
        fontStyle: "normal",
        fontWeight: 600,
        fontSize: "56px",
        lineHeight: "86%",
        display: "flex",
        alignItems: "center",
        textAlign: "center",
        textTransform: "uppercase",
        color: "#FFFFFF",
        flex: "none",
        order: 0,
        flexGrow: 0,
        margin: "16px 0px"
    },
    subtitle:{
        // position: "static",
        // width: "633px",
        height: "20px",
        // left: "63.5px",
        top: "64px",
        fontFamily: "'Teko'",
        fontStyle: "normal",
        fontWeight: 500,
        fontSize: "20px",
        lineHeight: "100%",
        display: "flex",
        alignItems: "center",
        textAlign: "center",
        letterSpacing: "0.05em",
        textTransform: "uppercase",
        color: "#50C5FB",
        flex: "none",
        order: 1,
        flexGrow: 0,
        margin: "16px 0px"
    },
    contentText:{
        // position: "static",
        // width: "329px",
        height: "32px",
        // left: "215.5px",
        top: "118px",
        fontFamily: "'Roboto'",
        fontStyle: "normal",
        fontWeight: 400,
        fontSize: "16px",
        lineHeight: "32px",
        display: "flex",
        alignItems: "center",
        textAlign: "center",
        color: "#DCF2FC",
        flex: "none",
        order: 3,
        flexGrow: 0,
        margin: "16px 0px"
    },
    prize:{
        position:"absolute",
        top:"240px",
        // bottom:"10px",
        height:"429px",
        width:"941px"
    }
}
const stylesMobile = {
    prize:{
        width:"345px",
        top:"264px"
    },
    title:{
        fontSize:"30px",
        width:"150px"
    },
    subtitle:{
        fontSize:"20px",
        width:"174px"
    },
    contentText:{
        fontSize:"12px"
    },
    content:{
        top:"50px"
    }
}

const ComeToPlayView = ({isMobile, style}) => {

    const styles = useJSS({stylesDesktop,stylesMobile,isMobile});

    return (
        <div style={style}>
            
            <LandscapeBackground/>
            <div style={styles.content}>
                <div style={styles.title}>Where players come to play</div>
                <div style={styles.subtitle}>Have fun, win tickets, & cash them in for NFTs</div>
                <div style={styles.contentText}>Have fun, win tickets, & cash them in for NFTs!</div>
                <div style={styles.prize}>
                    <StaticImage src="../images/Prize Wall 1.png" layout="fullWidth" />
                </div>
            </div>
            
        </div>
    )
}
export default ComeToPlayView