'use client'
import { useState, useEffect, useRef } from 'react';
import Image from "next/image";
import Link from 'next/link'
import caption from "../images/caption.webp"
import daze from "../images/daze.webp";
import button1 from '../images/button1.webp'
import button2 from '../images/button2.webp'
import button3 from '../images/button3.webp'
import apple from '../images/apple_new.svg'
import android from '../images/android_new.svg'
import ig from '../images/instagram_new.svg'
import discord from '../images/discord_new.svg'
import tiktok from '../images/tiktok_new.svg'
import { Audio } from './sound'
import { Video } from './video'
import './style/style.scss'


export default function Home() {
  const [isLoading, setIsLoading] = useState(true);
  const [loaded, setLoaded] = useState(false);
  const [clicked, setClicked] = useState(false);
  const containerId = "container"

  useEffect(() => {
    //to check if all assets on the page are loaded
    const handleLoading = () => {
      if (document.readyState === "complete") {
          console.log('completely loaded assets')
        setIsLoading(false);
        setLoaded(true);
      }
    }
    window.addEventListener("load", handleLoading);

    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => {
      window.removeEventListener('load', handleLoading);
      clearTimeout(timer);
    }
  }, [isLoading, loaded])

  const onTransitionEnd = () => {
    console.log("Transition ended");
    const loadingScreen = document.getElementById("loading-screen") as HTMLElement;
    if (!isLoading) {
      loadingScreen.classList.add("fade-out");
      loadingScreen.style.display = 'none';
    }
  }

  const handleMainClick = () => {
    // console.log("Main container was clicked");
    setClicked(true);
};
  return (
    <main id={containerId} onClick={handleMainClick} className="flex min-h-screen flex-col">
      <div >
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
      <div className="z-10 flex flex-col gap-3 justify-between mt-8" >

        <Link href="https://apps.apple.com/us/app/daze-freeform-chat/id6497405419"> 
        
        <div className="relative flex items-center justify-center">

          <div className="flex flex-row gap-3 items-center -mt-1 absolute mx-auto ">
          <Image
                    src={apple}
                    width={20}
                    alt="button 1"
                    priority={true}
                    className="drop-shadow-md"
                  />
          <p className="text-white text-lg">Apple waitlist</p>
        </div>
    
           <Image
                src={button1}
                width={315}
                style={{mixBlendMode: 'soft-light'}}
                alt="button 1"
                priority={true}
                className="my-0 py-0 mix-blend-overlay opacity-65"
              />
        </div>
        </Link>

        <Link href="https://st4slyblfx3.typeform.com/to/DK30NHwZ?typeform-source=daze.chat">
          
        <div className="relative flex items-center justify-center">

        <div className="flex flex-row gap-3 items-center -mt-1 absolute mx-auto ">
        <Image
                    src={android}
                    width={20}
                    alt="button 1"
                    priority={true}
                    className="drop-shadow-lg"
                  />
        <p className="text-white text-lg">Android waitlist</p>
        </div>
        <Image
              src={button2}
              width={315}
              style={{mixBlendMode: 'soft-light'}}
              alt="button 1"
              priority={true}
              className="my-0 py-0 opacity-65 drop-shadow-lg"
            />
        </div>
        </Link> 

        {/* 3 buttons for socials */}
    <div className="flex flex-row">
        
        <div className="relative flex items-center justify-center">

        <div className="flex z-10 flex-row justify-center items-center gap-16 absolute mx-auto ">
        <Link href="https://www.instagram.com/daze.chat/">

               <Image
                    src={ig}
                    width={25}
                    alt="ig button"
                    priority={true}
                    className="drop-shadow-lg"
                  />

               
            </Link>
          <Link href="https://discord.com/invite/Z4dWvVARxh">
                <Image
                    src={discord}
                    width={25}
                    alt="discord button"
                    priority={true}
                    className="mx-2 drop-shadow-lg"
                  />
            </Link>
            <Link href="https://www.tiktok.com/@daze.chat">
                <Image
                    src={tiktok}
                    width={25}
                    alt="tiktok button"
                    priority={true}
                    className="drop-shadow-lg"
                  />
            </Link> 
          </div>

          <Image
                src={button3}
                width={315}
                style={{mixBlendMode: 'soft-light'}}
                alt="button 1"
                priority={true}
                className="my-0 py-0 mix-blend-soft-light opacity-70"
              />

          </div>
            {/* <div className="bg-[#4E7BC9] text-slate-100 bg-opacity-60 px-12 py-3 rounded-3xl shadow-lg flex justify-center cursor-pointer">
            </div> */}
      </div>

      </div>
        
    </div>
   <div className="fixed top-0 left-0 w-full h-full -z-10 overflow-hidden">
    {isLoading && (
      <section id="loading-screen" className="visible" onTransitionEnd={onTransitionEnd}>
      <div id="loader"></div>
      </section>
    )}
      {/* <Load /> */}
    
        <Video containerId={containerId} homeClicked={clicked}/>
       </div>

      </div>
  </main>
  );
}



{/* <video 
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
        </video> */}