import React, { useEffect, useState, useRef } from "react"
import { Helmet } from 'react-helmet'
import useIsMobile from "../components/useIsMobile";
import useJSS from "../components/useJSS";
import '../styles/global.css'
import ArcadeView from "../views/arcade";
import ComeToPlayView from "../views/comeToPlay";
import FAQView from "../views/faq";
import FooterView from "../views/footer";
import HomeView from "../views/home";
import PlayEarnView from "../views/playEarn";

const stylesDesktop = {
  main:{
    // display:"flex",
    // flexDirection:"column",
    // flexWrap:"wrap",
    // height:"950px",
    position:"relative",
    // overflowY:"scroll"
    // height:"3500px"
  },
  home:{height:"750px",position:"relative"},
  faq:{height:"750px",position:"relative"},
  arcade:{height:"750px",position:"relative"},
  playEarn:{height:"1103px",position:"relative", background: "#1E012B"},
  footer:{height:"400px",position:"relative", background: "#150021", display:"flex", justifyContent:"center", alignItems:"center" },
}
const stylesMobile={
  home:{height:"473px"},
  arcade:{height: "1041px"},
  playEarn:{height:"1044px"}
}

// markup
const IndexPage = () => {
  // const [isSSDisabled, setIsSSDisabled] = useState(true);
  const isMobile = useIsMobile();
  const styles = useJSS({stylesDesktop,stylesMobile,isMobile});


  useEffect(()=>{
    
  },[isMobile])

  return (
    <>
      {/* {noBlock ? <Helmet>
        <link href="https://fonts.googleapis.com/css?family=Teko" rel="stylesheet" media="screen"/>
        <link href="https://fonts.googleapis.com/css?family=Roboto" rel="stylesheet" media="screen"/>
      </Helmet> : null} */}
      {/* <div style={styles.footer} onClick={onMouseDown} */}
      <div style={styles.main}>
        <HomeView style={styles.home} isMobile={isMobile}/>
        <ArcadeView style={styles.arcade} isMobile={isMobile}/>
        <ComeToPlayView style={styles.home} isMobile={isMobile}/>
        <PlayEarnView style={styles.playEarn} isMobile={isMobile}/>
        <FAQView style={styles.faq} isMobile={isMobile}/>
        <FooterView style={styles.footer} isMobile={isMobile}/>
      </div>
    </>
  )
}

export default IndexPage