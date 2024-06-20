"use client"

import {useState, useEffect} from "react"

const CustomCursor = () => {
    const [position, setPosition] = useState({x: 0, y: 0})

    useEffect(() => {
        const handleMouseMove = (e) => {
            setPosition({x: e.clientX, y: e.clientY})
        }


        window.addEventListener("mousemove", handleMouseMove)

        return () => {
            window.removeEventListener("mousemove", handleMouseMove)

        }
    }, [])

    const isNearElement = (x, y, rect) => {
        const padding = 10
        return (
            x >= rect.left - padding &&
            x <= rect.right + padding &&
            y >= rect.top - padding &&
            y <= rect.bottom + padding
        )
    }

    // useEffect(() => {
    //     const elements = document.querySelectorAll("*");
    //
    //     const handleOnHoverMove = (e) => {
    //         const shadowX = position.x;
    //         const shadowY = position.y;
    //
    //         if (elements) {
    //             elements.forEach((element) => {
    //                 const rect = element.getBoundingClientRect();
    //                 if (isNearElement(shadowX, shadowY, rect)) {
    //                     element.style.filter = "brightness(1)";
    //                 } else {
    //                     element.style.filter = "none";
    //                 }
    //             });
    //         }
    //     };
    //
    //     window.addEventListener("mousemove", handleOnHoverMove);
    //
    //     return () => {
    //         window.removeEventListener("mousemove", handleOnHoverMove);
    //
    //     };
    // }, [position]);

    return (
        <div
            className="custom-cursor"
            style={{
                position: "fixed",
                top: 0,
                left: 0,

                borderRadius: "50%",
                backgroundColor: "transparent",
                pointerEvents: "none",
                zIndex: 1,
                boxShadow: "0 0 160px 160px rgba(65, 49, 255, 0.2)",
                transform: `translate(${position.x - 30}px, ${position.y - 10}px)`,
            }}
        ></div>
    )
}

export default CustomCursor
