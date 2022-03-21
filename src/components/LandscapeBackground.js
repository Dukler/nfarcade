import * as React from "react"
import { StaticImage } from 'gatsby-plugin-image';

const LandscapeBackground = () => {
    
    // return (
    //     isMobile ?
    //     <StaticImage src="../images/landscape-bg.jpg" layout="fullWidth"  
    //     objectFit="cover"
    //     style={{
    //         width: '100vw',
    //         height:"474px",
    //      }} 
    //     imgStyle={{
    //         width: '100vw',
    //         height:"474px",
    //      }} /> :
    //     <StaticImage src="../images/landscape-bg.jpg" layout="fullWidth"   
    //     imgStyle={{
    //         width: '100vw',
    //         height:"750px",
    //      }} 
    //     style={{
    //         width: '100vw',
    //         height:"750px",
    //      }}/>
    // )
    return (
        <StaticImage src="../images/landscape-bg.jpg" layout="constrained" 
            style={{height:"100%"}}
            objectFit="fill"
            loading="eager"
        />
    )
  }
  
  export default LandscapeBackground
  