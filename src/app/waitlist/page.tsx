"use client";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import caption from "../../images/caption.webp";
import daze from "../../images/daze.webp";
import { Audio } from "../sound";
import "../style/style.scss";
import { Video } from "../video";

export default function WaitList() {
    const [isLoading, setIsLoading] = useState(true);
    const [loaded, setLoaded] = useState(false);
    const [clicked, setClicked] = useState(false);
    const containerId = "container";

    useEffect(() => {
        //to check if all assets on the page are loaded
        const handleLoading = () => {
            if (document.readyState === "complete") {
                console.log("completely loaded assets");
                setIsLoading(false);
                setLoaded(true);
            }
        };
        window.addEventListener("load", handleLoading);

        const timer = setTimeout(() => {
            setIsLoading(false);
        }, 2000);

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

    const widgetRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const container = widgetRef.current!;
        const link = document.createElement("link");
        link.rel = "stylesheet";
        link.type = "text/css";
        link.href = "https://prod-waitlist-widget.s3.us-east-2.amazonaws.com/getwaitlist.min.css";
        container.appendChild(link);

        const script = document.createElement("script");
        script.setAttribute("async", "async");
        script.src = "https://prod-waitlist-widget.s3.us-east-2.amazonaws.com/getwaitlist.min.js";
        container.appendChild(script);
    }, []);

    return (
        <main id={containerId} onClick={handleMainClick} className="flex min-h-screen flex-col">
            <div>
                {/* For the sound toggle */}
                <nav className="fixed pt-8 px-4 ml-2 lg:px-8">
                    <Audio />
                </nav>
                {/* main page content */}
                <div className="flex flex-col items-center self-center mt-24 mx-auto justify-center">
                    {/* logo & cloud */}
                    <div className="z-10 flex flex-col items-center -space-y-4 w-full max-w-md sm:w-9/12 lg:w-9/12 sm:max-w-xl">
                        <Image
                            src={caption}
                            width={120}
                            height={120}
                            priority={true}
                            alt="caption cloud"
                            className="my-0 py-0"
                        />
                        <Image
                            src={daze}
                            width={155}
                            height={155}
                            priority={true}
                            alt="Picture of Daze logo"
                            className="my-0 py-0"
                        />
                    </div>

                    {/* buttons  */}
                    <div
                        id="waitlist-form"
                        className="z-10 flex flex-col gap-3 justify-between mt-8"
                        style={{
                            display: "flex",
                            minWidth: "320px",
                            maxWidth: "95vw",
                            justifyContent: "center",
                        }}
                    >
                        <div
                            id="getWaitlistContainer"
                            data-waitlist_id="18298"
                            data-widget_type="WIDGET_1"
                        ></div>
                        <div ref={widgetRef} />
                    </div>
                </div>
                <div className="fixed top-0 left-0 w-full h-full -z-10 overflow-hidden">
                    {isLoading && (
                        <section
                            id="loading-screen"
                            className="visible"
                            onTransitionEnd={onTransitionEnd}
                        >
                            <div id="loader"></div>
                        </section>
                    )}
                    {/* <Load /> */}

                    <Video containerId={containerId} homeClicked={clicked} />
                </div>
            </div>
        </main>
    );
}
