import React, {useLayoutEffect, useState} from "react";

const useJSS = ({isMobile, stylesDesktop, stylesMobile}) => {
    const [styles, setStyles] = useState(stylesDesktop);
    const mobile = isMobile ? {...stylesMobile} : {};
    const refreshStyles = () =>{
        let stylesAux = stylesDesktop;
        Object.keys(stylesMobile).forEach(key=>{
            stylesAux = {...stylesAux,[key]:{...stylesDesktop[key], ...mobile[key]}}
        })
        setStyles(stylesAux)
    }
    
    useLayoutEffect(()=>{
        refreshStyles();
    },[isMobile])
    // const styles = {...stylesDesktop, ...mobile}
    // const styles = Object.assign({},stylesDesktop,mobile)
    return styles
}
export default useJSS