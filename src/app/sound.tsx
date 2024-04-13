'use client' 
import {Howl} from 'howler'
import Image from "next/image";
import {useState, useEffect, useRef} from "react"
import toggleOff from "../images/music_off.png"
import toggleOn from "../images/music_on.png"

interface Track {
    file: string;
    name: string;
  }

export const Audio = () => {
    const [isPlaying, setIsPlaying] = useState(false);
    const soundRef = useRef<Howl | any>();

    useEffect(() => {
        soundRef.current = new Howl({
            src: ['daze_ambient_score.mp3']
        });
    }, []); 

    // const sound = new Howl({
    //     src: ['daze_ambient_score.mp3']
    // });

    const toggleAndHandlePlayback = () => {
        const newIsPlaying = !isPlaying;
        setIsPlaying(newIsPlaying);

        if (newIsPlaying) {
            soundRef.current.fade(0, 1, 1000)
            soundRef.current.play();
        } else {
            soundRef.current.fade(1, 0, 2000);
            // soundRef.current.pause();
        }
    }

    return (
    <div>
        <span id="playbutton" onClick={toggleAndHandlePlayback} className="cursor-pointer">
        {!isPlaying ?  
        <Image
            src={toggleOff}
            alt="toggle off icon"
            /> : 
        <Image
            src={toggleOn}
            alt="toggle on icon"
            />
        }
    </span>
        </div>

    )
}