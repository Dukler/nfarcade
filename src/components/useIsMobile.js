import React, {useEffect, useState} from "react";

const useIsMobile = () => {
    const [width, setWidth] = useState(typeof window !== undefined ? window.innerWidth : 0);
    
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