'use client'
import React from 'react'
import { useState, useEffect } from 'react'

const DynamicBackground = () => {

    const [currentBackground, setCurrentBackground] = useState(0);

    // Define a list of Tailwind classes for backgrounds
    const backgrounds = [
        "bg-[url('/1.jpg')]",
        "bg-[url('/2.jpg')]",
        "bg-[url('/3.jpg')]",
        "bg-[url('/4.jpg')]",
        "bg-[url('/5.jpg')]",

    ];

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentBackground((prev) => (prev + 1) % backgrounds.length);
        }, 3000); // Change every 3 seconds

        return () => clearInterval(interval); // Cleanup interval on unmount
    }, [backgrounds.length]);


    return (
        <>
            <div className={`absolute inset-0 -z-10 w-full  ${backgrounds[currentBackground]} bg-cover transition-all duration-[1500ms] ease-in-out`}>

            </div>
        </>
    )
}

export default DynamicBackground