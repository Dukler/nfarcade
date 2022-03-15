import React, {useEffect, useState} from "react";

const useIsMobile = () => {
    const isBrowser = () => typeof window !== "undefined"
    const [width, setWidth] = useState(isBrowser() && window.innerWidth);
    
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