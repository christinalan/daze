"use client";
import React, { useEffect, useState } from "react";
import {Video} from "./video"; // Ensure this points to your Video component

const VideoLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [isLoading, setIsLoading] = useState(true);
    const [loaded, setLoaded] = useState(false);
    const [clicked, setClicked] = useState(false);
    const containerId = "container";

    useEffect(() => {
        // Check if all assets on the page are loaded
        const handleLoading = () => {
            if (document.readyState === "complete") {
                console.log("completely loaded assets");
                setIsLoading(false);
                setLoaded(true);
            }
        };
        window.addEventListener("load", handleLoading);

        // Fallback timeout to hide the loading screen after a delay
        const timer = setTimeout(() => {
            setIsLoading(false);
        }, 2000);

        // Cleanup event listener and timer
        return () => {
            window.removeEventListener("load", handleLoading);
            clearTimeout(timer);
        };
    }, [isLoading, loaded]);

    const onTransitionEnd = () => {
        console.log("Transition ended");
        const loadingScreen = document.getElementById("loading-screen") as HTMLElement;
        if (!isLoading) {
            loadingScreen.classList.add("fade-out");
            loadingScreen.style.display = "none";
        }
    };

    const handleMainClick = () => {
        // console.log("Main container was clicked");
        setClicked(true);
    };

    return (
        <main id={containerId} onClick={handleMainClick} className="relative min-h-screen">
            {/* Loading screen */}
            {isLoading && (
                <section
                    id="loading-screen"
                    className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-80"
                    onTransitionEnd={onTransitionEnd}
                >
                    <div id="loader"></div>
                </section>
            )}

            {/* Video background */}
            <div className="fixed inset-0 -z-10 overflow-hidden">
                <Video containerId={containerId} homeClicked={clicked} />
            </div>

            {/* Page content */}
            <div>
                {children}
            </div>
        </main>
    );
};

export default VideoLayout;