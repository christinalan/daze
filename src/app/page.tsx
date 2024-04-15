'use client'
import { useState, useEffect } from 'react';
import Image from "next/image";
import Link from 'next/link'
import caption from "../images/caption.webp"
import daze from "../images/daze.webp";
import button1 from '../images/button1.webp'
import button2 from '../images/button2.webp'
import button3 from '../images/button3.webp'
import { Audio } from './sound'
// import {Load } from './load'
import './style/style.scss'


export default function Home() {
  const [isLoading, setIsLoading] = useState(true);
  const [loaded, setLoaded] = useState(false);

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
    return () => window.removeEventListener('load', handleLoading);
  }, [isLoading, loaded])

  const onTransitionEnd = () => {
    console.log("Transition ended");
    const loadingScreen = document.getElementById("loading-screen") as HTMLElement;
    if (!isLoading) {
      loadingScreen.classList.add("fade-out");
      loadingScreen.style.display = 'none';
    }
    // loadingScreen.addEventListener("transitionend", onTransitionEnd);

  }

  return (
    <main className="flex min-h-screen flex-col">

      {/* <Load /> */}
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
                alt="caption cloud"
                className="my-0 py-0"
              />
      <Image
                src={daze}
                width={155}
                height={155}
                alt="Picture of Daze logo"
                className="my-0 py-0"
              />
      </div>

          {/* buttons  */}
      <div className="z-10 flex flex-col gap-3 justify-between mt-8" >

        <Link href="https://st4slyblfx3.typeform.com/to/DK30NHwZ"> 
        <div className="relative flex items-center justify-center">

          <p className="absolute mx-auto -mt-1 text-slate-100 text-lg">Get on the waitlist</p>
           <Image
                src={button1}
                width={315}
                style={{mixBlendMode: 'soft-light'}}
                alt="button 1"
                className="my-0 py-0 mix-blend-overlay opacity-65"
              />
        </div>
            {/* <div className="bg-[#4E7BC9] text-slate-100 bg-opacity-60 px-12 py-3 rounded-3xl shadow-lg shadow-inner flex justify-center cursor-pointer">
            </div> */}
        </Link>
        <Link href="https://www.instagram.com/daze.chat/">
          
        <div className="relative flex items-center justify-center">

        <p className="absolute mx-auto -mt-1 text-slate-100 text-lg">Follow us on Instagram</p>
        <Image
              src={button2}
              width={315}
              style={{mixBlendMode: 'soft-light'}}
              alt="button 1"
              className="my-0 py-0 opacity-65"
            />
            {/* <div className="bg-[#4E7BC9] text-slate-100 bg-opacity-60 px-12 py-3 rounded-3xl shadow-lg flex justify-center cursor-pointer">
            </div> */}
        </div>
        </Link> 
        <Link href="https://discord.gg/s4Bb2dDr">
        <div className="relative flex items-center justify-center">

          <p className="absolute mx-auto -mt-1 text-slate-100 text-lg">Join our Discord</p>
          <Image
                src={button3}
                width={310}
                style={{mixBlendMode: 'soft-light'}}
                alt="button 1"
                className="my-0 py-0 mix-blend-soft-light opacity-70"
              />
          </div>
            {/* <div className="bg-[#4E7BC9] text-slate-100 bg-opacity-60 px-12 py-3 rounded-3xl shadow-lg flex justify-center cursor-pointer">
            </div> */}
      </Link>
      </div>
        
    </div>

    {isLoading && (
            <section id="loading-screen" className="visible" onTransitionEnd={onTransitionEnd}>
                <div id="loader"></div>
            </section>
        )}
   <div className="fixed top-0 left-0 w-full h-full -z-10 overflow-hidden">
      <video 
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
        </video>
       </div>

      </div>
  </main>
  );
}


  // const cloudImages = [camel, flamingo, person, starfish]

  // const getRandomImage = () => {
  //   const randomIndex = Math.floor(Math.random() * cloudImages.length)
  //   return cloudImages[randomIndex]
  // }

  // const randomImageSrc = getRandomImage();
  // const randomImageSrc2 = getRandomImage();

  {/* <div className="fixed inset-y-3/4 lg:px-12 lg:mb-24 inset-x-1/4 w-48 lg:w-96">
    <Image
        src={randomImageSrc}
        alt="Random Image"
  />
    </div>

  <div className="fixed inset-y-1/2 inset-x-1/2 lg:ml-12 w-24 lg:w-80">
    <Image
        src={randomImageSrc2}
        alt="Random Image"
  />
    </div> */}
