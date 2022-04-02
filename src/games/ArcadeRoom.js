import Unity, { UnityContext } from "react-unity-webgl";
import React, { useState, useEffect } from "react"
import { BsFullscreen } from "react-icons/bs";
import ReactLoading from 'react-loading';

const unityContext = new UnityContext({
  loaderUrl: "Build/ArcadeRoom_WebGL.loader.js",
  dataUrl: "Build/ArcadeRoom_WebGL.data",
  frameworkUrl: "Build/ArcadeRoom_WebGL.framework.js",
  codeUrl: "Build/ArcadeRoom_WebGL.wasm",
  streamingAssetsUrl: "StreamingAssets",
  companyName: "CoreDLL",
  productName: "Non Fungible Arcade",
  productVersion: "0.8.3a",
});

const loaderStyle = {
  width: "30%",
  // height:"",
  // textAlign: "center",
  position: "absolute",
  // justifySelf:"center",
  right:"33%",
  top: "30%",
  color: "#FFFFFF",
}

const styles = {
  fullScreen: {
    color: "white",
    position:"absolute",
    bottom:15,
    right:10
  },
  fullScreenExit:{
    color: "white",
    position:"absolute",
    bottom:0,
    right:0
  }
}


const ArcadeRoomGame = ({ style }) => {
  const [progression, setProgression] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);
  const [showFullscreen, setShowFullscreen] = useState(false);

  const handleClick = (e) =>{
    fullscreen()
  }

  const fullscreen = () => {
    unityContext.setFullscreen(true)
  }

  useEffect(function () {
    unityContext.on("progress", function (progression) {
      setProgression(progression);
    });
    unityContext.on("loaded", function () {
      setIsLoaded(true);
      setShowFullscreen(true);
      setTimeout(()=>{setShowFullscreen(false)},15000)
    });
  }, []);

  // return progression < 100 ? <p>Loading {progression * 100} percent...</p> : <Unity style={style} unityContext={unityContext} />
  return <div onMouseEnter={(e)=>{setShowFullscreen(true)}} onMouseLeave={(e)=>{setShowFullscreen(false)}} onDoubleClick={(e)=>{handleClick(e)}}>
    {/* <p style={{ ...loaderStyle, visibility: !isLoaded ? "visible" : "hidden" }}>Loading {progression * 100} percent...</p> */}
    <ReactLoading style={{ ...loaderStyle, visibility: !isLoaded ? "visible" : "hidden" }} type={"spin"} color="#FFFFFF" height={"20%"} width={"20%"} />
    <Unity style={style} unityContext={unityContext} tabIndex={1}/>
    {showFullscreen ? <BsFullscreen style={styles.fullScreen} onClick={() => { fullscreen() }} />: null}
    {/* {!isFullscreen ?
      <BsFullscreen style={styles.fullScreen} onClick={(e) => { toggleFullscreen(e) }} /> :
      <BsFullscreenExit style={styles.fullScreen} onClick={(e) => { toggleFullscreen(e) }} />} */}
  </div>
}

export default ArcadeRoomGame