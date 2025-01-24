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
        <div className="flex justify-center items-center p-6 bg-gray-100 rounded-lg shadow-md max-w-md mx-auto mt-8">
            <p className="text-xl font-semibold text-gray-700">
                Current Window Width: <span className="text-blue-500">{windowWidth}px</span>
            </p>
        </div>
    );
}

export default WindowResize;
