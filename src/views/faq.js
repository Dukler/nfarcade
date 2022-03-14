
import * as React from "react"
import { StaticImage } from 'gatsby-plugin-image';
import Accordion from "../components/Accordion";

const styles = {
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
        top:"238px"
    },
    faq:{
        position: "relative",
        width: "940px",
        // height: "80px",
        left: "0px",
        bottom: "20px",
        fontFamily: "'Teko'",
        fontStyle: "normal",
        fontWeight: 600,
        fontSize: "56px",
        lineHeight: "86%",
        display: "flex",
        alignItems: "center",
        letterSpacing: "0.02em",
        textTransform: "uppercase",
        color: "#FFFFFF"
    },
    backContainer:{
        height: "750px"
    }
}

const FAQView = ({style}) => {
    const accordionData = [
        {
          title: 'How does Non Fungible Arcade work?',
          content: `The easiest way to explain the Non Fungible Arcade is that it operates the same way a 
          traditional arcade works, but in the metaverse! Arcade machines take tokens, then you earn tickets, 
          and you use tickets to claim limited NFTs from the prize counter!`
        },
        {
          title: 'What’s play & earn?',
          content: `Play & earn is an ecosystem that focuses on having fun playing & earning while doing so. 
          Players inside of Non Fungible Arcade will earn tickets that they can use to claim limited NFTs from 
          the prize counter that have…utility.`
        },
        {
          title: 'What’s dev & earn?',
          content: `Dev & earn is a new concept that allows game developers to submit a game to us, we host it in the arcade, 
          and pay the developer 100% of their earnings from their game.`
        },
        {
          title: 'How do I submit my game?',
          content: `If you are a game developer who would like to submit a project to be placed in the arcade, please follow these steps! :)

          Fill out this form
           2. Wait for the green light
           3. We launch your game
           4. You sit back & get paid`
        },
        
      ];

    return (
        <div style={style}>
            {/* <StaticImage src="../images/gradient-bg.png" layout="fixed" height="750" width="1200" /> */}
            <StaticImage src="../images/gradient-bg.jpg" layout="fixed" style={styles.background} imgStyle={styles.backContainer}/>
            <div id="content" style={styles.content}>
                <div style={styles.faq}>FAQ</div>
                {accordionData.map(({ title, content }) => (
                    <Accordion title={title} content={content} />
                ))}
            </div>
            
        </div>
    )
}
export default FAQView