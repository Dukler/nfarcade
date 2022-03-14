import React, { useEffect, useState } from "react"
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
  // const [isSSDisabled, setIsSSDisabled] = useState(true);
  const [noBlock, setNoBlock] = useState(false);

  useEffect(()=>{
    setNoBlock(true)
  },[])

  return (
    <>
      {noBlock ? <Helmet>
        <link href="https://fonts.googleapis.com/css?family=Teko" rel="stylesheet" media="screen"/>
        <link href="https://fonts.googleapis.com/css?family=Roboto" rel="stylesheet" media="screen"/>
      </Helmet> : null}
      {/* <div style={styles.footer} onClick={onMouseDown} */}
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