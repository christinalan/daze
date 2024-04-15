'use client' 
import {Howl} from 'howler'
import Image from "next/image";
import {useState, useEffect, useRef, Suspense} from "react"
import toggleOff from "../images/music_off.svg"
import toggleOn from "../images/music_on.svg"

export const Audio = () => {
    const [isPlaying, setIsPlaying] = useState(false);
    const [loaded, setLoaded] = useState(false);
    const soundRef = useRef<Howl | any>();

    useEffect(() => {
        soundRef.current = new Howl({
            preload: true,
            src: ['daze_ambient_score.mp3'],
            html5: true,
            onload: () => setLoaded(true),
            onloaderror: (id, err) => console.error('Load Error:', err),
            onplayerror: (id, err) => {
                console.error('Play Error:', err);
                soundRef.current.once('unlock', () => {
                soundRef.current.play();
            });
    },
            loop: true
        });

        return () => {
            console.log("Unloading Howl");
            soundRef.current.unload();
        };
    }, []); 


    const toggleAndHandlePlayback = () => {
        const newIsPlaying = !isPlaying;
        setIsPlaying(newIsPlaying);

        if (newIsPlaying) {
            soundRef.current.fade(0, 1, 1000)
            soundRef.current.play();
        } else {
            soundRef.current.fade(1, 0, 2000);
            setTimeout(() => {
                soundRef.current.pause();
            }, 2000)
        }
    }

    return (
    <div>
        <Suspense fallback={<h1>...</h1>}>
        {loaded && (
            <span id="playbutton" onClick={toggleAndHandlePlayback} className="cursor-pointer">
            {!isPlaying ?  
            <Image
                src={toggleOff}
                alt="toggle off icon"
                // style={{
                //     objectFit: 'contain',
                // }}
                width={40}
                height={40}
                /> : 
            <Image
                src={toggleOn}
                alt="toggle on icon"
                width={40}
                height={40}
                />
            }
        </span>
        )}
        </Suspense>
        </div>

    )
}