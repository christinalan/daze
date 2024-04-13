import Image from "next/image";
import Link from 'next/link'
import caption from "../images/caption.png"
import daze from "../images/daze.png";
import camel from "../images/clouds/camel.png"
import flamingo from "../images/clouds/flamingo.png"
import person from "../images/clouds/person.png"
import starfish from "../images/clouds/starfish.png"
import { Audio } from './sound'

export default function Home() {
  const cloudImages = [camel, flamingo, person, starfish]

  const getRandomImage = () => {
    const randomIndex = Math.floor(Math.random() * cloudImages.length)
    return cloudImages[randomIndex]
  }

  const randomImageSrc = getRandomImage();
  const randomImageSrc2 = getRandomImage();

  return (
    <main className="flex min-h-screen flex-col">
      <nav className="fixed pt-8 px-4 lg:px-8">
        <Audio />
          {/* <Image
                    src={toggle}
                    alt="toggle icon"
                  /> */}
       </nav>
    <div className="flex flex-col items-center self-center justify-start">
    <div className="z-10 w-9/12 sm:w-9/12 lg:w-9/12 px-28 lg:py-8 md:py-14 py-16 max-w-xl">
      <Image
                src={caption}
                alt="caption cloud"
              />
      <Image
                src={daze}
                alt="Picture of Daze logo"
              />
      </div>


      <div className="z-10 flex flex-col gap-5 justify-between" >
        <Link href="https://st4slyblfx3.typeform.com/to/DK30NHwZ"> 
            <div className="bg-[#4E7BC9] text-slate-100 bg-opacity-30 px-12 py-3 rounded-3xl shadow-xl flex justify-center cursor-pointer">
                <p className="text-slate-100">Get on the waitlist</p>
            </div>
        </Link>
        <Link href="https://www.instagram.com/daze.nyc/">
            <div className="bg-[#4E7BC9] text-slate-100 bg-opacity-30 px-12 py-3 rounded-3xl shadow-xl flex justify-center cursor-pointer">
                <p className="text-slate-100">Follow us on Instagram</p>
            </div>
        </Link> 
        <Link href="https://discord.gg/s4Bb2dDr">
            <div className="bg-[#4E7BC9] text-slate-100 bg-opacity-30 px-12 py-3 rounded-3xl shadow-xl flex justify-center cursor-pointer">
                <p className="text-slate-100">Join our Discord</p>
            </div>
      </Link>
      </div>

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
        
    </div>

   <div className="fixed top-0 left-0 w-full h-full -z-10 overflow-hidden">
      <video 
            autoPlay
            muted
            preload="auto"
            loop
            className="object-cover w-full h-full">
        <source src="video.mp4" type="video/mp4"/>

      Your browser does not support the video tag.
      </video>
   </div>
  </main>
  );
}
