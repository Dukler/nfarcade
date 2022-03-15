import React, {useEffect, useState} from "react";

const useIsMobile = () => {
    const isBrowser = () => typeof window !== "undefined" && window.innerWidth
    const [width, setWidth] = useState(isBrowser() ? window.innerWidth : 0);
    
    const handleWindowSizeChange = () => {
            setWidth(window.innerWidth);
    }

    useEffect(() => {
        window.addEventListener('resize', handleWindowSizeChange);
        return () => {
            window.removeEventListener('resize', handleWindowSizeChange);
        }
    }, []);

    return (width <= 768);
}
export default useIsMobile