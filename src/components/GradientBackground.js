import * as React from "react"
import { StaticImage } from 'gatsby-plugin-image';

const GradientBackground = ({isMobile, styles}) => {
    
    
    return (
        isMobile ?
        <StaticImage src="../images/gradient-bg-mobile.jpg" layout="constrained" objectFit="fill" style={styles.background} imgStyle={styles.backgroundImg} /> :
        <StaticImage src="../images/gradient-bg.jpg" layout="fixed" style={styles.background} imgStyle={styles.backgroundContainer} />
    )
  }
  
  export default GradientBackground
  