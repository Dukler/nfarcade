import * as React from "react"
import { StaticImage } from 'gatsby-plugin-image';

const styles = {
    backgroundContainer:{
        width:"100vw",
        display:"flex",
        alignItems:"center",
        justifyContent:"center"
    },
    background: {
        top: "124px",
        // width:"100vw"
        // height:"862px",
        // position:"relative"
    },
    devEarn: {
        left: "0px",
        top: "5px",
        height:"422px"
    },
    container: {
        position: "absolute",
        top: "120px",
        height:"1103px", 
        // background: "#1E012B"
    },
    listText: {
        whiteSpace: "pre-wrap",
        position: "static",
        width: "440px",
        // height: "160px",
        left: "0px",
        // top: "166px",
        fontFamily: "'Roboto'",
        fontStyle: "normal",
        fontWeight: 400,
        fontSize: "16px",
        lineHeight: "32px",
        display: "flex",
        alignItems: "center",
        color: "#DCF2FC",
        flex: "none",
        order: 3,
        flexGrow: 0,
        // margin: "16px 0px"
    },
    content: {
        display: "flex",
        flexDirection: "row",
        width: "100vw",
        justifyContent: "space-around",
        height: "500px"
    },
    title: {
        position: "static",
        width: "440px",
        height: "96px",
        left: "0px",
        top: "0px",
        fontFamily: "'Teko'",
        fontStyle: "normal",
        fontWeight: 600,
        fontSize: "56px",
        lineHeight: "86%",
        display: "flex",
        alignItems: "center",
        textTransform: "uppercase",
        color: "#FFFFFF",
        flex: "none",
        order: 0,
        flexGrow: 0,
        margin: "16px 0px"
    },
    subtitle: {
        // position: "static",
        width: "440px",
        height: "20px",
        left: "0px",
        top: "112px",
        fontFamily: "'Teko'",
        fontStyle: "normal",
        fontWeight: 500,
        fontSize: "20px",
        lineHeight: "100%",
        display: "flex",
        alignItems: "center",
        letterSpacing: "0.05em",
        textTransform: "uppercase",
        color: "#50C5FB",
        flex: "none",
        order: 1,
        flexGrow: 0,
        margin: "16px 0px"
    },
    footer: {
        // position:"absolute",
        userSelect: "none",
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
        // justifyContent:"center",
        // paddingTop:"50px",
        width: "100vw",
        // height:"100px"
    },
    footerTitle: {
        // position: "absolute",
        // width: "760px",
        height: "48px",
        left: "220px",
        top: "0px",
        fontFamily: "'Teko'",
        fontStyle: "normal",
        fontWeight: 600,
        fontSize: "56px",
        lineHeight: "86%",
        // display: "inline-block",
        // alignItems: "center",
        // textAlign: "center",
        textTransform: "uppercase",
        color: "#FFFFFF"
    },
    footerSubtitle: {
        position: "relative",
        // width: "734px",
        height: "20px",
        // left: "233px",
        top: "40px",
        fontFamily: "'Teko'",
        fontStyle: "normal",
        fontWeight: 500,
        fontSize: "20px",
        lineHeight: "100%",
        display: "inline-block",
        // alignItems: "center",
        // textAlign: "center",
        letterSpacing: "0.05em",
        textTransform: "uppercase",
        color: "#50C5FB"
    },
    roadmap: {
        // position: "absolute",
        // display:"flex",
        width: "1200px",
        height: "210px",
        left: "0px",
        paddingTop: "166px",
        overflowX: "scroll",
        overflowY:"hidden"
    },
    roadmapLine: {
        // position: "absolute",
        width: "1489px",
        height: "0px",
        left: "85px",
        top: "45px",
        border: "2px solid #DB38B9"
    },
    circle: { 
        position: "relative", 
        width: "20px", 
        height: "20px", 
        left: "170px", 
        // top: "32px",
        borderRadius: "50%"
    },
    elipseCurrent: {
        // position: "absolute",
        width: "20px",
        height: "20px",
        // left: "0px",
        // top: "0px",
        background: "#FFFFFF",
        borderRadius: "50%"
    },
    elipseWhite: {
        // position: "absolute",
        width: "20px",
        height: "20px",
        // left: "0px",
        // top: "0px",
        background: "#FFFFFF",
        borderRadius: "50%"
    },
    elipseCurrent: {
        position: "relative",
        width: "16px",
        height: "16px",
        left: "2px",
        top: "18px",
        background: "#DB38B9",
        borderRadius: "50%"
    },
    elipseInner: {
        position: "relative",
        width: "16px",
        height: "16px",
        left: "2px",
        top: "18px",
        background: "#23032E",
        borderRadius: "50%"
    },
    quarter: {
        position: "relative",
        width: "640px",
        height: "241px",
        // display:"flex",
        // alignItems:"center",
        // justifyContent:"center",
        // left: "34px",
        top: "-47px"
    },
    currentStage:{
        position: "relative",
        // width: "249px",
        height: "16px",
        left: "140px",
        // left: "46px",
        // top: "0px",
        fontFamily: "'Teko'",
        fontStyle: "normal",
        fontWeight: 500,
        fontSize: "16px",
        lineHeight: "100%",
        display:"inline-block",
        // display: "flex",
        // alignItems: "center",
        // textAlign: "center",
        letterSpacing: "0.05em",
        textTransform: "uppercase",
        color: "#50C5FB"
    },
    q1Title:{
        position: "relative",
        // width: "249px",
        height: "20px",
        left: "155px",
        top: "37px",
        fontFamily: "'Teko'",
        fontStyle: "normal",
        fontWeight: 600,
        fontSize: "20px",
        lineHeight: "100%",
        display:"inline-block",
        // display: "flex",
        // alignItems: "center",
        // textAlign: "center",
        letterSpacing: "0.05em",
        textTransform: "uppercase",
        color: "#FFFFFF"
    },
    q1Description:{
        position: "relative",
        display:"inline-block",
        // width: "340px",
        height: "32px",
        left: "55px",
        top: "80px",
        fontFamily: "'Roboto'",
        fontStyle: "normal",
        fontWeight: 700,
        fontSize: "16px",
        lineHeight: "32px",
        textAlign: "center",
        color: "#DCF2FC"
    },
    quarters:{
        display:"flex",
        width:"1489px"
    },
    quarterText:{
        position:"relative",
        left:"40px"
    }
}

const PlayEarnView = ({ style }) => {
    return (
        <div style={style}>
            {/* <StaticImage src="../images/grid-bg.png" layout="fixed" style={styles.backgroundContainer} imgStyle={styles.background} width={1378} height={862}/> */}
            <StaticImage src="../images/grid-bg.png" layout="fixed" style={styles.backgroundContainer} imgStyle={styles.background}/>
            {/* <StaticImage src="../images/grid-bg.png" layout="fixed" style={styles.backgroundContainer} imgStyle={styles.background} /> */}
            <div style={styles.container}>
                <div style={styles.content}>
                    <div>
                        <div style={styles.title}>Play & earn meets dev & earn</div>
                        <div style={styles.subtitle}>The better you play, the better your earnings</div>
                        <div style={styles.listText}>1. Submit your game.</div>
                        <div style={styles.listText}>2. We host it.</div>
                        <div style={styles.listText}>3. You get paid.</div>
                    </div>
                    <StaticImage src="../images/dev-2-earn.png" layout="fixed" style={styles.devEarn} width={498} height={422} />
                    {/* <StaticImage src="../images/dev-2-earn.png" layout="fixed" height={422} /> */}
                </div>
                <div style={styles.footer}>
                    <div style={styles.footerTitle}>ROADMAP</div>
                    <div style={styles.footerSubtitle}>HOW WE ARE BRINGING THE ARCADE TO THE METAVERSE</div>
                    <div style={styles.roadmap}>
                        <div style={styles.roadmapLine}></div>
                        <div style={styles.quarters}>
                            <div style={styles.quarter}>
                                <div style={styles.currentStage}>
                                    CURRENT STAGE
                                </div>
                                <div style={styles.circle}>
                                    <div style={styles.elipseCurrent}></div>
                                    <div style={styles.elipseWhite}></div>
                                </div>
                                <div style={styles.q1Title}>
                                    Q1 2022
                                </div>
                                <div style={styles.quarterText}>
                                    <div style={styles.q1Description}>
                                        Beta testing launched.
                                    </div>
                                </div>
                            </div>
                            <div style={styles.quarter}>
                                <div style={styles.currentStage}></div>
                                <div style={styles.circle}>
                                    <div style={styles.elipseInner}></div>
                                    <div style={styles.elipseWhite}></div>
                                </div>
                                <div style={styles.q1Title}>
                                    Q2 2022
                                </div>
                                <div style={styles.quarterText}>
                                    <div style={styles.q1Description}>
                                        First NFA game title launch.
                                    </div>
                                </div>
                            </div>
                            <div style={styles.quarter}>
                                <div style={styles.currentStage}></div>
                                <div style={styles.circle}>
                                    <div style={styles.elipseInner}></div>
                                    <div style={styles.elipseWhite}></div>
                                </div>
                                <div style={styles.q1Title}>
                                    Q3 2022
                                </div>
                                <div style={styles.quarterText}>
                                    <div style={styles.q1Description}>
                                        Second NFA game title launch.
                                    </div>
                                    <div style={styles.q1Description}>
                                        Developer applications open.
                                    </div>
                                </div>
                            </div>
                            <div style={styles.quarter}>
                                <div style={styles.currentStage}></div>
                                <div style={styles.circle}>
                                    <div style={styles.elipseInner}></div>
                                    <div style={styles.elipseWhite}></div>
                                </div>
                                <div style={styles.q1Title}>
                                    Q4 2022
                                </div>
                                <div style={styles.quarterText}>
                                    <div style={styles.q1Description}>
                                        Third NFA game title launch.
                                    </div>
                                    <div style={styles.q1Description}>
                                        NFA First Annual Tournament.
                                    </div>
                                </div>
                            </div>

                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default PlayEarnView