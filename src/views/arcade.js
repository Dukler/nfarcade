import * as React from "react"
import { StaticImage } from 'gatsby-plugin-image';

const styles={
    background:{},
    content:{
        position:"absolute",
        display:"flex",
        alignItems:"center",
        justifyContent:"center",
        flexDirection:"column",
        flexWrap:"wrap",
        width: "100vw",
        height: "487px",
        // left: "10%",
        top: "97px"
    },
    header:{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        padding: "0px",
        position: "absolute",
        width: "100%",
        height: "84px",
        left: "0px",
        top: "0px"
    },
    title:{
        position: "static",
        // width: "780px",
        height: "48px",
        left: "0px",
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
    subTitle:{
        position: "static",
        // width: "780px", 
        height: "20px",
        left: "0px",
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
    icons:{
        // width:"659px",
        // position:"absolute",
        display:"flex",
        flexDirection:"row",
        justifyContent:"space-around",
        height:"180px",
        width:"70%",
        paddingTop:"100px",
    },
    iconText:{
        // position: "absolute",
        width: "140px",
        height: "20px",
        top: "155px",
        fontFamily: "'Teko'",
        fontStyle: "normal",
        fontWeight: 600,
        fontSize: "20px",
        lineHeight: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent:"center",
        textAlign: "center",
        letterSpacing: "0.05em",
        textTransform: "uppercase",
        color: "#FFFFFF"
    },
    footerText:{
        // position: "relative",
        width: "720px",
        height: "56px",
        // left: "0px",
        // top: "431px",
        paddingTop:"70px",
        fontFamily: "'Roboto'",
        fontStyle: "normal",
        fontWeight: 500,
        fontSize: "16px",
        lineHeight: "32px",
        display: "flex",
        alignItems: "center",
        textAlign: "center",
        color: "#DCF2FC"
    }

}

const ArcadeView = ({style}) =>{

    return(
        <div style={style}>
            <StaticImage src="../images/gradient.svg" layout="fixed" width="1200" height="750" />
            {/* <StaticImage src="../images/gradient.svg" layout="fixed" width="1200" height="750" /> */}
            <div style={styles.content}>
                <div style={styles.header}>
                    <div style={styles.title}>The Web3 Arcade is here</div>
                    <div style={styles.subTitle}>Play fun arcade games & earn tickets</div>
                </div>
                <div style={styles.icons}>
                    <div style={styles.arcade}>
                        <StaticImage src="../images/arcade.svg" layout="fixed" width={140} height={155} />
                        <div style={styles.iconText}>Play games</div>
                    </div>
                    <div style={styles.ticket}>
                        <StaticImage src="../images/ticket.svg" layout="fixed" width={140} height={155} />
                        <div style={styles.iconText}>Earn tickets</div>
                    </div>
                    <div style={styles.prize}>
                        <StaticImage src="../images/prize.svg" layout="fixed" width={140} height={155} />
                        <div style={styles.iconText}>Redeem for nfts</div>
                    </div>
                </div>
                <div style={styles.footerText}>
                    Non Fungible Arcade is a play & earn economy focused on FUN FIRST, supported by a powerful system that rewards talented players & snazzy developers.
                </div>
            </div>
        </div>
    )

}

export default ArcadeView