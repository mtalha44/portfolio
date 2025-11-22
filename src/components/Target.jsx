import { useGLTF } from '@react-three/drei';
import { useRef, useEffect, Suspense, use } from 'react';
import gsap from 'gsap';
import { Canvas } from '@react-three/fiber';
useGLTF.preload('/models/target_final.glb');

function Target({ position }) {
  const targetRef = useRef();
  const { scene , error } = useGLTF('/models/target_final.glb');

  useEffect(() => {
    if (targetRef.current) {
      gsap.to(targetRef.current.position, {
        y: "+=0.2",
        duration: 1.5,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });
    }
  }, []);

  if(error){
    console.log("Target model Error", error);
    return null;
  }

  return (
    <primitive
      ref={targetRef}
      object={scene}
      position={position}
      // rotation={[2, Math.PI / 5, 0]}
      rotation={[1.6,2, -5]}
      scale={0.5}
    />
  );
}


// TargetModel.jsx
const TargetModel = () => {
  return (
    <Canvas
      style={{ width: '100%', height: '100%' }}
      camera={{ position: [0, 1, 3], fov: 45 }}
    >
      <ambientLight intensity={0.6} />
      <Suspense fallback={null}>
        {/* <Target position={[0, 0, 1.1]} /> */}
        <Target position={[1, -1, 0]} />
      </Suspense>
    </Canvas>
  );
};

export default TargetModel;
