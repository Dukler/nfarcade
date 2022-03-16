
import * as React from "react"
import { StaticImage } from 'gatsby-plugin-image';

const styles = {
    content:{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        // padding: "0px 16px",
        // position: "absolute",
        width: "322px",
        height: "280px",
        // left: "439px",
        // top: "55px",
        // background:"blue"
    },
    links:{
        display:"flex",
        flexDirection:"row",
        justifyContent:"space-around",
        width:"100%",
        position:"relative",
        top:"20px"

    },
    linkText:{
        fontFamily: "'Teko'",
        fontStyle: "normal",
        fontWeight: 500,
        fontSize: "16px",
        lineHeight: "28px",
        letterSpacing: "0.02em",
        color: "#FFFFFF",
        margin: "0px 32px"
    },
    copyright:{
        position:"relative",
        top:"70px",
        fontFamily: "'Roboto'",
        fontStyle: "italic",
        fontWeight: 400,
        fontSize: "10px",
        lineHeight: "28px",
        color: "#E5E5E5",
        order: 3,
        flexGrow: 0,
        margin: "32px 0px"
    },
    socials:{
        display:"flex",
        flexDirection:"row",
        justifyContent:"space-between",
        width:"40%",
        position:"relative",
        top:"50px"

    }
}

const FooterView = ({style}) => {
    const faq = document.getElementById("faqView");
    const playEarn= document.getElementById("playEarnView");
    const home = document.getElementById("home");


    return (
        <div style={style}>
            {/* <StaticImage src="../images/gradient-bg.png" layout="fixed" height="750" width="1250" /> */}
            <div  style={styles.content}>
                <StaticImage src="../images/nfa-logo 5.png" width={279} height={109} layout="fixed"/>
                <div style={styles.links}>
                    <div style={styles.linkText} onClick={()=>faq.scrollIntoView()}>FAQ</div>
                    <div style={styles.linkText} onClick={()=>playEarn.scrollIntoView()}>ROADMAP</div>
                    <div style={styles.linkText} onClick={()=>home.scrollIntoView()}>PLAY</div>
                </div>
                <div style={styles.socials}>
                    
                    <StaticImage src="../images/discord-purple.png" layout="fixed"/>
                    <a href="https://twitter.com/NFArcade" target="_blank">
                        <StaticImage src="../images/twitter-purple.png" layout="fixed"/>
                    </a>
                </div>
                <div style={styles.copyright}>Copyright © 2022 NonFungible Arcade. All Rights Reserved.</div>
            </div>
            
        </div>
    )
}
export default FooterView