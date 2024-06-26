'use client'
import { useRef, useState, useCallback, useEffect } from 'react'
import { Canvas, useFrame, useLoader, useThree } from '@react-three/fiber';
import { TextureLoader } from 'three/src/loaders/TextureLoader'
import * as THREE from 'three';

const Cloud = () => {
    
    // Load vertex and fragment shaders as text
    const vertexShader = 
    `
    varying vec2 vUv;
    
    void main() {
        
        vUv = uv;
        gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
        
    }
    `
    const fragmentShader = 
    `
    uniform sampler2D map;
    uniform vec3 fogColor;
    uniform float fogNear;
    uniform float fogFar;
    uniform float time;
    uniform float variability;

    varying vec2 vUv;
    
    void main() {
        vec2 uv = vUv;
        uv.y += time * 0.08 * variability; // texture scrolls horizontally over time
        
        float depth = gl_FragCoord.z / gl_FragCoord.w;
        float fogFactor = smoothstep( fogNear, fogFar, depth );
        
        gl_FragColor = texture2D( map, vUv );
        gl_FragColor.w *= pow( gl_FragCoord.z, 50.0 );
        gl_FragColor = mix( gl_FragColor, vec4( fogColor, gl_FragColor.w ), fogFactor );
        
    }
    `

      // Initialize mouse position with refs
    const mouseX = useRef(0);
    const mouseY = useRef(0);
    
    const meshRef = useRef();
    const texture = useLoader(TextureLoader, 'cloud.png')

    
    //texture filters
    // texture.magFilter = THREE.LinearMipMapLinearFilter;
    // texture.minFilter = THREE.LinearMipMapLinearFilter;
    
    const fogTex = new THREE.Fog(0x4584b4, -500, 2000);

    const variability = Math.random(); 
    
    const uniforms = {
        map: { type: "t", value: texture },
        fogColor: { type: "c", value: new THREE.Color(fogTex.color)},
        fogNear: { type: "f", value: fogTex.near },
        fogFar: { type: "f", value: fogTex.far },
        time: { type: "f", value: 0.0 }, 
        variability: { type: "f", value: variability },
    }

    // Adjustments to position, rotation, and scale
    const position = [Math.random() * 100 - 50, -10 - Math.random() * 500 + 25, 0];
    const rotation = [0, 0, Math.random() * Math.PI];
    const scale = [Math.random() * Math.random() * 1.5 + 0.5, Math.random() * Math.random() * 1.5 + 0.5, 1];

    const updateMousePosition = useCallback((e) => {
        const windowHalfX = window.innerWidth / 2;
        const windowHalfY = window.innerHeight / 2;
        mouseX.current = (e.clientX - windowHalfX) * 0.015;;
        mouseY.current = (e.clientY - windowHalfY) * 0.03;
      }, []);


    useEffect(() => {
        window.addEventListener("mousemove", updateMousePosition, false);

        return () => {
        window.removeEventListener("mousemove", updateMousePosition, false);
        };
    }, [updateMousePosition]);


    useFrame((state) => {
        const { clock } = state;
       // Update position, rotation, and scale
        meshRef.current.position.set(...position);
        meshRef.current.rotation.set(...rotation);
        meshRef.current.scale.set(...scale);

        uniforms.time.value = clock.getElapsedTime();

        
        //update the camera position with its ref
        const start_time = clock.getElapsedTime()
        const timePos = ((clock.getElapsedTime() - (start_time / 2)) * 0.01) % 8000
        // const timePos = start_time
        const deltaZ = Math.sin(timePos) * 0.00005;

        // //update the camera position ? 
        // state.camera.position.z += Math.sin(timePos) * 0.05
        state.camera.position.x -= Math.min(Math.max(deltaZ, -0.0005), 0.0005);
        state.camera.position.y += (-mouseY.current - state.camera.position.y) * 0.001;

        
    });

    return (
        <mesh ref={meshRef}>
            <planeGeometry args={[100, 100]}/>
            <shaderMaterial 
                uniforms={uniforms}
                fragmentShader={fragmentShader}
                vertexShader={vertexShader}
                depthWrite={false}
                depthTest={false}
                transparent={true}
            />
        </mesh>
        
    )
}

export default function Background() {  
    const [camPosition, setCamPosition] = useState([0, 0, 50])  

    return (
        <div className="w-screen h-screen fixed top-0 left-0 -z-10">
            <Canvas 
                camera={{fov:50, near:1, far:1000, position:camPosition}}
                onCreated={({ gl }) => {
                    // Set pixel ratio for better quality on high-DPI screens
                    gl.setPixelRatio(window.devicePixelRatio);
                    // Handle resizing
                    window.addEventListener('resize', () => {
                      gl.setSize(window.innerWidth, window.innerHeight);
                    });
                  }}
            >
               
                 {/* Create multiple Cloud instances */}
                {Array.from({ length: 50 }).map((_, index) => (
                    <Cloud key={index}/>
                ))}
            </Canvas>

        </div>
    )
}


//camera={{fov:50, near:1, far:3000, position: [0, 0, 50]}}