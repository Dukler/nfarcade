import React, { useState } from 'react';
import { StaticImage } from 'gatsby-plugin-image';

const styles = {
    border:{
        // position: "absolute",
        width: "940px",
        // height: "179px",
        left: "0px",
        top: "0px",
        border: "2px solid #DB38B9",
        // boxSizing: "border-box",
        borderRadius: "8px",
        paddingLeft:"20px",
        margin:"15px",
    },
    arrowhead:{
        position: "relative",
        right:"0px",
        top:"0px"
    },
    header:{
        display:"flex",
        flexDirection:"row",
        width:"95%",
        top: "30px",
        height:"50px",
        userSelect: "none",
        justifyContent:"space-between",
        alignItems: "center",
    },
    title:{
        left: "30px",
        
        fontFamily: "'Teko'",
        fontStyle: "normal",
        fontWeight: 500,
        fontSize: "20px",
        lineHeight: "100%",
        display: "flex",
        // alignItems: "center",
        letterSpacing: "0.05em",
        textTransform: "uppercase",
        color: "#50C5FB"
    },
    arrowhead:{
        color: "#FFFFFF",
        // transform: "rotate(180deg)"
    },
    arrowheadDown:{
        color: "#FFFFFF",
        transform: "rotate(180deg)"
    },
    content:{
        // position: "absolute",
        width: "874px",
        // height: "66px",
        whiteSpace: "pre-wrap",
        left: "30px",
        top: "68px",
        fontFamily: "'Roboto'",
        fontStyle: "normal",
        fontWeight: 400,
        fontSize: "16px",
        lineHeight: "32px",
        color: "#DCF2FC"
    }
}

const Accordion = ({ title, content }) => {
  const [isActive, setIsActive] = useState(false);

  return (
    <div style={styles.border}>
      <div style={styles.header} onClick={() => setIsActive(!isActive)}>
            <div style={styles.title}>{title}</div>
            <div style={isActive ? styles.arrowhead : styles.arrowheadDown}>
                <StaticImage src="../images/arrowhead.png" layout="fixed"  />
                {/* {isActive ? '⌄' : '⌃'} */}
            </div>
      </div>
      {isActive && <div style={styles.content}>{content}</div>}
    </div>
  );
};

export default Accordion;