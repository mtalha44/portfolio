import { OrbitControls, useGLTF } from '@react-three/drei';
import { useRef, useEffect, Suspense } from 'react';
import gsap from 'gsap';
import { Canvas } from '@react-three/fiber';

// function Target({ position }) {
//   const targetRef = useRef();
//   const { scene , error } = useGLTF('https://vazxmixjsiawhamofees.supabase.co/storage/v1/object/public/models/target-stand/model.gltf');

//   useEffect(() => {
//     if (targetRef.current) {
//       gsap.to(targetRef.current.position, {
//         y: "+=0.2",
//         duration: 1.5,
//         repeat: -1,
//         yoyo: true,
//         ease: "sine.inOut",
//       });
//     }
//   }, []);

//   if(error){
//     console.log("Target model Error", error);
//     return null;
//   }

//   return (
//     <primitive
//       ref={targetRef}
//       object={scene}
//       position={position}
//       rotation={[0, Math.PI / 5, 0]}
//       scale={0.5}
//     />
//   );
// }


// // TargetModel.jsx
// const TargetModel = () => {
//   return (
//     <Canvas
//       style={{ width: '100%', height: '100%' }}
//       camera={{ position: [0, 1, 3], fov: 45 }}
//     >
//       <ambientLight intensity={0.6} />
//       <Suspense fallback={null}>
//         <Target position={[0, 0, 1.1]} />
//       </Suspense>
//     </Canvas>
//   );
// };

// export default TargetModel;


function Target({ position }) {
  const targetRef = useRef();
  // Using DamagedHelmet model from three.js examples
  const { scene } = useGLTF('https://threejs.org/examples/models/gltf/DamagedHelmet/glTF/DamagedHelmet.gltf');

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

  return (
    <primitive
      ref={targetRef}
      object={scene}
      position={position}
      rotation={[0, Math.PI / 5, 0]}
      scale={1} // Adjust scale as needed
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
        <Target position={[0, 0, 1.1]} />
      </Suspense>
    </Canvas>
  );
};

export default TargetModel;
