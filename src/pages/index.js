import React, { useState, useEffect } from "react"
import { Helmet } from 'react-helmet'
import '../styles/global.css'
import ArcadeView from "../views/arcade";
import ComeToPlayView from "../views/comeToPlay";
import FAQView from "../views/faq";
import FooterView from "../views/footer";
import HomeView from "../views/home";
import PlayEarnView from "../views/playEarn";

const styles = {
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
  playEarn:{height:"1103px",position:"relative", background: "#1E012B"},
  footer:{height:"400px",position:"relative", background: "#150021", display:"flex", justifyContent:"center", alignItems:"center" },
}

// markup
const IndexPage = () => {

  const [isSSDisabled, setIsSSDisabled] = useState(true);

  useEffect(()=>{
    setIsSSDisabled(false);
  },[])
  

  return (
    <>
      <Helmet>
        <link href="https://fonts.googleapis.com/css?family=Teko" rel="stylesheet" disabled={isSSDisabled}/>
        <link href="https://fonts.googleapis.com/css?family=Roboto" rel="stylesheet" disabled={isSSDisabled}/>
      </Helmet>
      <div style={styles.main}>
        <HomeView style={styles.home}/>
        <ArcadeView style={styles.home}/>
        <ComeToPlayView style={styles.home}/>
        <PlayEarnView style={styles.playEarn}/>
        <FAQView style={styles.home}/>
        <FooterView style={styles.footer}/>
      </div>
    </>
  )
}

export default IndexPage