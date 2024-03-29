import { useState, useEffect } from 'react';

function useWindowSize() {

    const [windowSize, setWindowSize] = useState({
        width: window?.innerWidth,
        height: window?.innerHeight,
    });

    useEffect(() => {
        console.log('useWindowSize: useEffect: addEventListener: resize');
        let timeoutId: NodeJS.Timeout;

        function handleResize() {
            clearTimeout(timeoutId);
            timeoutId = setTimeout(() => {
                setWindowSize({
                    width: window.innerWidth,
                    height: window.innerHeight,
                });
            }, 100);
        }

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);
    if (typeof window === 'undefined') {
        return {
            width: 0,
            height: 0,
        };
    }

    return windowSize;
}

export default useWindowSize