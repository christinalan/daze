'use client'
import {useState, useEffect} from 'react'
import './style/style.scss'

export const Load = () => {
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
      const loadingScreen = document.getElementById("loading-screen") as HTMLElement;
      if (!isLoading) {
        loadingScreen.classList.add("fade-out");
        loadingScreen.style.display = 'none';
      }
    }

    return (
        <>
        {isLoading && (
            <section id="loading-screen" className="visible" onTransitionEnd={onTransitionEnd}>
                <div id="loader"></div>
            </section>
        )}
    </>
    )
}