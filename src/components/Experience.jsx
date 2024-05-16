
import { Office } from "./Office";
import { motion } from "framer-motion-3d";
import { animate,useMotionValue } from "framer-motion";
import { useEffect } from "react";
import { useFrame } from "@react-three/fiber";

export const Experience = (props) => {
  const {section,menuOpened} = props;

  const cameraPositionX=useMotionValue();
  const cameraLookAtx =useMotionValue();

  useEffect (()=>{
    animate(cameraPositionX,menuOpened ? -5:0);
    animate(cameraLookAtx,menuOpened ? 5:0);
  },[menuOpened]);

  useFrame((state)=>{
state.camera.position.x=cameraPositionX.get();
state.camera.lookAt(cameraLookAtx.get(),0,0)
  });

  return (
    <>
    <ambientLight intensity={1}/>
    <motion.group 
  position={[1.5, 2, 3]} 
  scale={[0.9, 0.9, 0.9]} 
  rotation-y={-Math.PI / 4}
  animate={{ y: section === 0 ? 0 : -1 }}
>
  <Office section={section}/>
</motion.group>
    
    </>
  );
};
