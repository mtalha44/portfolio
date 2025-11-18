import {OrbitControls, useGLTF } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import CanvasLoader from "./CanvasLoader";

const LaptopModel = () => {
const glb = useGLTF('/models/laptop_final.glb');

  return (
    <primitive object={glb.scene} scale={0.10} position={[0, -1.5, 0]} rotation={[ 0.2, 0, 0]}/>
  );
};

const Laptop = () => {
  return (
    <Canvas
      camera={{ position: [0, 5, 35], fov: 45 }}
      style={{ width: "100%", height: "100%" }}
    >
      <ambientLight intensity={0.8} />
      <directionalLight position={[5, 5, 5]} intensity={1} />
      
      <Suspense fallback={<CanvasLoader />}>
        <LaptopModel />
      </Suspense>
      <OrbitControls enableZoom={true} />
    </Canvas>
  );
};

export default Laptop;
