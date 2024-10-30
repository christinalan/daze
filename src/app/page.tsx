"use client";
import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import caption from "../images/caption.webp";
import daze from "../images/daze.webp";
import button1 from "../images/button1.webp";
import button2 from "../images/button2.webp";
import button3 from "../images/button3.webp";
import apple from "../images/apple.svg";
import android from "../images/android.svg";
import ig from "../images/instagram.svg";
import discord from "../images/discord.svg";
import tiktok from "../images/tiktok.svg";
import { Audio } from "./sound";
import { Video } from "./video";
import { Menu } from "./menu"
import "./style/style.scss";

export default function Home() {
    // const [isLoading, setIsLoading] = useState(true);
    // const [loaded, setLoaded] = useState(false);
    // const [clicked, setClicked] = useState(false);
    // const containerId = "container";
    const [menuOpen, setMenuOpen] = useState(false); 

    // useEffect(() => {
    //     //to check if all assets on the page are loaded
    //     const handleLoading = () => {
    //         if (document.readyState === "complete") {
    //             console.log("completely loaded assets");
    //             setIsLoading(false);
    //             setLoaded(true);
    //         }
    //     };
    //     window.addEventListener("load", handleLoading);

    //     const timer = setTimeout(() => {
    //         setIsLoading(false);
    //     }, 2000);

    //     return () => {
    //         window.removeEventListener("load", handleLoading);
    //         clearTimeout(timer);
    //     };
    // }, [isLoading, loaded]);

    // const onTransitionEnd = () => {
    //     console.log("Transition ended");
    //     const loadingScreen = document.getElementById("loading-screen") as HTMLElement;
    //     if (!isLoading) {
    //         loadingScreen.classList.add("fade-out");
    //         loadingScreen.style.display = "none";
    //     }
    // };

    // const handleMainClick = () => {
    //     // console.log("Main container was clicked");
    //     setClicked(true);
    // };

    return (
            <div className="flex min-h-screen flex-col">
                {/* For the sound toggle */}
                <nav className="fixed w-full pt-8 px-4 ml-2 lg:px-8 flex justify-between items-center">
                    <Audio />
                    <Menu isOpen={menuOpen} setIsOpen={setMenuOpen}/>
                </nav>

                {/* main page content .. hidden when the menu is open*/}
                {!menuOpen && ( 
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
                        <div className="z-10 flex flex-col gap-3 justify-between mt-8">
                            <Link href="./waitlist">
                                <div className="relative flex items-center justify-center">
                                    <div className="flex flex-row gap-3 items-center -mt-1 absolute mx-auto ">
                                        <p className="text-white text-lg">Get on the waitlist</p>
                                    </div>

                                    <Image
                                        src={button1}
                                        width={315}
                                        style={{ mixBlendMode: "soft-light" }}
                                        alt="button 1"
                                        priority={true}
                                        className="my-0 py-0 mix-blend-overlay opacity-65"
                                    />
                                </div>
                            </Link>

                            <Link href="https://discord.com/invite/Z4dWvVARxh">
                                <div className="relative flex items-center justify-center">
                                    <div className="flex flex-row gap-3 items-center -mt-1 absolute mx-auto ">
                                        <p className="text-white text-lg">Join our Discord</p>
                                    </div>
                                    <Image
                                        src={button2}
                                        width={315}
                                        style={{ mixBlendMode: "soft-light" }}
                                        alt="button 1"
                                        priority={true}
                                        className="my-0 py-0 mix-blend-overlay opacity-65"
                                    />
                                </div>
                            </Link>
                        </div>
                    </div>
                )}
    
    
            </div>

    );
}

{
    /* <video 
            autoPlay
            playsInline
            controls={false}
            muted={true}
            loop
            placeholder="blur"
            poster="poster-min.png"
            className="fixed object-cover w-full h-full">
            <source src="video.mp4" type="video/mp4"/>

      Your browser does not support the video tag.
        </video> */
}
