// use hook to get scroll position as percentage in document
// Usage: const scroll = useScroll();

import { useState, useEffect } from 'react';

function useScroll() {
    if (typeof document === 'undefined') {
        return 0;
    }
    const [scroll, setScroll] = useState(0);

    useEffect(() => {
        console.log('useScroll: useEffect: addEventListener: scroll');
        let timeoutId: NodeJS.Timeout;

        function handleScroll() {
            clearTimeout(timeoutId);
            timeoutId = setTimeout(() => {
                const scrollPercent = Math.round(
                    (document.documentElement.scrollTop /
                        (document.documentElement.scrollHeight -
                            document.documentElement.clientHeight)) *
                        100
                );
                setScroll(scrollPercent);
            }, 100);
        }

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return scroll;
}
export default useScroll