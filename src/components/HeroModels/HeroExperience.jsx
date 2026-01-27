import React from 'react'
import {Canvas} from "@react-three/fiber";
import {OrbitControls} from "@react-three/drei";
import {useMediaQuery} from "react-responsive";
import {Room} from "./Room.jsx";
import HeroLights from "./HeroLights.jsx";
import Particles from "./Particles.jsx";

const HeroExperience = () => {
    const isTablet = useMediaQuery({query:'(max-width: 1024px)'});
    const isMobile = useMediaQuery({query:'(max-width: 768px)'});
    return (
       <Canvas camera={{position:[0,0,15], fov: 45 }}>
           <OrbitControls
               enableDamping={true}
               dampingFactor={0.05}
               enablePan={false}
               enableZoom={false}
               maxDistance={220}
               minDistance={5}
               minPolarAngle={Math.PI / 5}
               maxPolarAngle={Math.PI / 2}
               makeDefault // Helpful if you have other cameras or controls
           />
           <HeroLights/>
           <Particles/>
           <group
               scale={isMobile ? 0.7 : 1}
               position={[0,-4,0]}
               rotation={[0,-Math.PI/4,0]}
           >

               <Room/>
           </group>


       </Canvas>
    )
}
export default HeroExperience
