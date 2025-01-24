import React, { useState, useEffect } from 'react';

function WindowResize() {
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    useEffect(() => {
        const handleResize = () => {
            setWindowWidth(window.innerWidth);
        };
        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <div>
            <p>Window Width: {windowWidth}px</p>
        </div>
    );
}

export default WindowResize;
