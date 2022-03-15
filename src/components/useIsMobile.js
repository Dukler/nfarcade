import React, {useEffect, useLayoutEffect, useState} from "react";

const useIsMobile = () => {
    const [width, setWidth] = useState(0);
    
    const handleWindowSizeChange = () => {
        setWidth(window.innerWidth);
    }
    useLayoutEffect(() => {
        handleWindowSizeChange();
    }, []);
    
    useEffect(() => {
        window.addEventListener('resize', handleWindowSizeChange);
        return () => {
            window.removeEventListener('resize', handleWindowSizeChange);
        }
    }, []);

    return (width <= 768);
}
export default useIsMobile