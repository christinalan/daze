'use client'
import { useState, useEffect, useRef } from 'react';

interface VideoProps {
    containerId: string;  // ID of the container where listeners should be attached
}

const useVideoPlayer = (videoRef: any) => {
  const isPlaying = () => {
    const video = videoRef.current;
    return !!(video && video.currentTime > 0 && !video.paused && !video.ended && video.readyState > 2);
};

return { isPlaying };
}

export const Video: React.FC<VideoProps> = ({containerId}) => {
    const videoRef = useRef<HTMLInputElement | any>();
    const { isPlaying } = useVideoPlayer(videoRef);
    const [playing, setPlaying] = useState(false);

    useEffect(() => {
        const video = videoRef.current;
        const checkPlayback = () => {
            if (videoRef.current) {
                console.log("Is the video playing?", isPlaying());
            }
            const isPlayingNow = !!(video && video.currentTime > 0 && !video.paused && !video.ended && video.readyState > 2)
            setPlaying(isPlayingNow);
        
        };
        // const container = document.getElementById(containerId);
        // document.addEventListener('click touchstart', playVideo)
        // document.addEventListener('suspend', playVideo);


        checkPlayback();

        // const interval = setInterval(checkPlayback, 2000);
        // return () => clearInterval(interval);
    }, []);


    const playVideo = () => {
        const video = videoRef.current;
        if (playing) {
            console.log("video is playing");

        } else {
            video.play();
            console.log("video will play with interaction")
        }
    }


    return (
        <>            
            <video 
            id={containerId}
            onClick={playVideo}
            onTouchStart={playVideo}
            ref={videoRef} 
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

        </>
    );
}