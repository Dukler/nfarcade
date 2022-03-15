import * as React from "react"
import { StaticImage } from 'gatsby-plugin-image';

const ResponsiveImage = ({isMobile, attributes, src, styles = {}}) => {
    
    
    // return (
    //     isMobile ?
    //     <StaticImage src={src} {...attributes[1]} styles={styles} /> :
    //     <StaticImage src={src} {...attributes[0]} styles={styles} />
    // )
    return (
        <StaticImage src={src} styles={styles} layout={"fixed"}/>
    )
  }
  
  export default ResponsiveImage
  