import Image from "next/image";
import Link from 'next/link'
import caption from "../images/caption.png"
import daze from "../images/daze.png";
import button1 from '../images/button1.png'
import button2 from '../images/button2.png'
import button3 from '../images/button3.png'
// import gif from "../images/video_1.gif"
import { Audio } from './sound'

export default function Home() {
  // const cloudImages = [camel, flamingo, person, starfish]

  // const getRandomImage = () => {
  //   const randomIndex = Math.floor(Math.random() * cloudImages.length)
  //   return cloudImages[randomIndex]
  // }

  // const randomImageSrc = getRandomImage();
  // const randomImageSrc2 = getRandomImage();

  return (
    <main className="flex min-h-screen flex-col">
      <nav className="fixed pt-8 px-4 ml-2 lg:px-8">
        <Audio />
       </nav>
    <div className="flex flex-col items-center self-center my-auto mx-auto justify-center">
    <div className="z-10 flex flex-col items-center -space-y-3 w-full max-w-md sm:w-9/12 lg:w-9/12 sm:max-w-xl">
      <Image
                src={caption}
                width={115}
                alt="caption cloud"
                className="my-0 py-0"
              />
      <Image
                src={daze}
                width={150}
                alt="Picture of Daze logo"
                className="my-0 py-0"
              />
      </div>


      {/* <div className="w-80 h-86 absolute blur-lg"></div> */}
      <div className="z-10 flex flex-col gap-5 justify-between mt-5" >
        <Link href="https://st4slyblfx3.typeform.com/to/DK30NHwZ"> 
        <div className="relative flex items-center justify-center">

          <p className="absolute mx-auto -mt-1 text-slate-100">Get on the waitlist</p>
           <Image
                src={button1}
                width={300}
                style={{mixBlendMode: 'soft-light'}}
                alt="button 1"
                className="my-0 py-0 mix-blend-overlay opacity-70"
              />
        </div>
            {/* <div className="bg-[#4E7BC9] text-slate-100 bg-opacity-60 px-12 py-3 rounded-3xl shadow-lg shadow-inner flex justify-center cursor-pointer">
            </div> */}
        </Link>
        <Link href="https://www.instagram.com/daze.nyc/">
        <div className="relative flex items-center justify-center">

        <p className="absolute mx-auto -mt-1 text-slate-100">Follow us on Instagram</p>
        <Image
              src={button2}
              width={300}
              style={{mixBlendMode: 'soft-light'}}
              alt="button 1"
              className="my-0 py-0 opacity-70"
            />
        </div>
            {/* <div className="bg-[#4E7BC9] text-slate-100 bg-opacity-60 px-12 py-3 rounded-3xl shadow-lg flex justify-center cursor-pointer">
            </div> */}
        </Link> 
        <Link href="https://discord.gg/s4Bb2dDr">
        <div className="relative flex items-center justify-center">

          <p className="absolute mx-auto -mt-1 text-slate-100">Join our Discord</p>
          <Image
                src={button3}
                width={300}
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

   <div className="fixed top-0 left-0 w-full h-full -z-10 overflow-hidden">
      {/* <Image 
                unoptimized
                src={gif}
                alt="cloud background"
                sizes="100vw"
                style={{
                  width: '100%',
                  height: '100%',
                }}
          /> */}
      
      <video 
            autoPlay
            playsInline
            muted
            preload="auto"
            loop
            placeholder="blur"
            className="fixed object-cover w-full h-full">
            <source src="video.mp4" type="video/mp4"/>

      Your browser does not support the video tag.
      </video>
   </div>
  </main>
  );
}


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
