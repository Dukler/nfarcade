import React, {useEffect, useState} from "react";

const useJSS = ({isMobile, stylesDesktop, stylesMobile}) => {
    const mobile = isMobile ? {...stylesMobile} : {}
    let styles = stylesDesktop;
    Object.keys(stylesMobile).forEach(key=>{
        styles = {...styles,[key]:{...stylesDesktop[key], ...mobile[key]}}
    })
    // const styles = {...stylesDesktop, ...mobile}
    // const styles = Object.assign({},stylesDesktop,mobile)
    return styles
}
export default useJSS