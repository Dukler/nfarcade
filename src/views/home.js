import * as React from "react"
import { StaticImage } from 'gatsby-plugin-image';

// styles
const styles = {
  background: {
     width: '100vw',
  },
  logo: { width: '279', height: '109', minWidth:'279' },
  header: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-end",
    alignItems: "center",
    padding: "0px",
    position: "absolute",
    // marginTop:"-730px",
    width: "90vw",
    height: "109px",
    left: "76px",
    top: "30px"
  },
  links: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-end",
    alignItems: "center",
    padding: "0px",
    position: "static",
    width: "70%",
    height: "38px",
    left: "279px",
    top: "35.5px",
    flex: "none",
    order: 1,
    flexGrow: 1,
    margin: "0px 0px"
  },
  playButton: {
    position: "static",
    width: "90px",
    height: "38px",
    left: "679px",
    top: "0px",
    background: "#50C5FB",
    border: "2px solid #50C5FB",
    boxSizing: "border-box",
    borderRadius: "50px",
    flex: "none",
    order: 3,
    flexGrow: 0,
    margin: "0px 20px",
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end"
  },
  playText: {
    width: "90px",
    height: "24px",
    left: "100px",
    top: "9.5px",
    fontFamily: "Teko",
    fontStyle: "normal",
    fontWeight: 600,
    fontSize: "19px",
    lineHeight: "28px",
    letterSpacing: "0.02em",
    textTransform: "uppercase",
    color: "#150021"
  },
  discord: {
    position: "static",
    left: "76.85%",
    right: "20.03%",
    top: "18.5%",
    bottom: "18.5%",
    flex: "none",
    order: 1,
    flexGrow: 0,
    margin: "0px 20px"
  },
  twitter: {
    position: "static",
    left: "82.57%",
    right: "14.3%",
    top: "18.5%",
    bottom: "18.5%",
    flex: "none",
    order: 2,
    flexGrow: 0,
    margin: "0px 20px"
  },
  contentContainer: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    top: "100px",
    position: "absolute",
    width: "100%",
    height: "611px",
  },
  contentTitle: {
    width: "500px",
    height: "144px",
    left: "17px",
    top: "0px",
    fontFamily: "'Teko'",
    fontStyle: "normal",
    fontWeight: 600,
    fontSize: "80px",
    lineHeight: "90%",
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
  contentText: {
    position: "static",
    width: "300px",
    height: "48px",
    left: "140px",
    top: "160px",
    fontFamily: "'Teko'",
    fontStyle: "normal",
    fontWeight: 500,
    fontSize: "48px",
    lineHeight: "100%",
    display: "flex",
    alignItems: "center",
    textAlign: "center",
    letterSpacing: "0.02em",
    textTransform: "uppercase",
    color: "#50C5FB",
    flex: "none",
    order: 1,
    flexGrow: 0,
    margin: "16px 0px"
  },
  startPlayingButton: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    padding: "10px 32px",
    position: "static",
    width: "200px",
    height: "48px",
    left: "260px",
    top: "248px",
    background: "#DB38B9",
    borderRadius: "50px",
    border: "0px solid #50C5FB",
    flex: "none",
    order: 3,
    flexGrow: 0,
    margin: "16px 0px"
  },
  startPlayingText: {
    position: "static",
    width: "89px",
    height: "23px",
    left: "55.5px",
    top: "12.5px",
    fontFamily: "'Teko'",
    fontStyle: "normal",
    fontWeight: 600,
    fontSize: "19px",
    lineHeight: "23px",
    display: "flex",
    alignItems: "center",
    textAlign: "center",
    letterSpacing: "0.02em",
    textTransform: "uppercase",
    color: "#FFFFFF",
    flex: "none",
    order: 0,
    flexGrow: 0,
    margin: "0px 16px"
  }
}

// markup
const HomeView = ({style}) => {
  
  return (

    <div style={style}>
      {/* <div style={styles.background}>
        <StaticImage src="../images/landscape-bg.png" layout="fixed" width="1200" height="750" />
      </div> */}
      {/* <StaticImage src="../images/landscape-bg.png" layout="fixed" height="750" width="1250" /> */}
      <StaticImage src="../images/landscape-bg.png" layout="fixed" style={styles.background} />
      <div style={styles.header}>
        <div style={styles.logo}>
          <StaticImage src="../images/nfa-logo 5.png" width={279} height={109} layout="fixed"/>
        </div>
        <div style={styles.links}>
          <button style={styles.playButton}><div style={styles.playText}>Play</div></button>
          <div style={styles.discord}>
            <StaticImage src="../images/discord.svg" width="24" height="24" />
          </div>
          <div style={styles.twitter}>
            <StaticImage src="../images/twitter.svg" width="24" height="24" />
          </div>
        </div>
      </div>
      <div style={styles.contentContainer}>
          <div style={styles.contentTitle}>Reinventing the arcade experience</div>
          <div style={styles.contentText}>For the metaverse</div>
          <button style={styles.startPlayingButton}><div style={styles.startPlayingText}>Start playing</div></button>
      </div>
    </div>
  )
}

export default HomeView
