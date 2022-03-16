import React, { useLayoutEffect, useState } from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import useJSS from './useJSS';

const stylesDesktop = {
    border: {
        // position: "absolute",
        width: "940px",
        // height: "179px",
        left: "0px",
        top: "0px",
        border: "2px solid #DB38B9",
        // boxSizing: "border-box",
        borderRadius: "8px",
        paddingLeft: "20px",
        margin: "15px",
    },
    arrowhead: {
        position: "relative",
        right: "0px",
        top: "0px"
    },
    header: {
        display: "flex",
        flexDirection: "row",
        width: "95%",
        top: "30px",
        height: "50px",
        userSelect: "none",
        justifyContent: "space-between",
        alignItems: "center",
    },
    title: {
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
    arrowhead: {
        color: "#FFFFFF",
        // transform: "rotate(180deg)"
    },
    arrowheadDown: {
        color: "#FFFFFF",
        transform: "rotate(180deg)"
    },
    content: {
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
const stylesMobile = {
    border: {
        width: "290px"
    },
    content: {
        width: "250px",
        fontSize: "12px"
    },
    title: {
        fontSize: "18px"
    }
}

const Accordion = ({ isMobile, data }) => {
    const [isActive, setIsActive] = useState([]);
    const styles = useJSS({ stylesDesktop, stylesMobile, isMobile });

    const toggleActive = (index) => {
        let auxActive = [...isActive];
        auxActive[index] = !auxActive[index];
        data.forEach((element, i) => {
            if (index !== i) auxActive[i] = false
        });
        setIsActive(auxActive)
    }
    
    useLayoutEffect(()=>{
        let auxActive = []
        data.forEach((element, index) => {
            auxActive[index] = false;
        });
        setIsActive(auxActive)
    },[])

    return (data.map(({ title, content }, index) => (
        <div style={styles.border}>
        <div style={styles.header} onClick={() => toggleActive(index)}>
            <div style={styles.title}>{title}</div>
            <div style={isActive[index] ? styles.arrowhead : styles.arrowheadDown}>
                <StaticImage src="../images/arrowhead.png" layout="fixed" />
                {/* {isActive ? '⌄' : '⌃'} */}
            </div>
        </div>
        {isActive[index] && <div style={styles.content}>{content}</div>}
    </div>)))
};

export default Accordion;