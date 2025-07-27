// import { Canvas } from "@react-three/fiber"
// import { Suspense, useEffect } from "react"
// import CanvasLoader from "./CanvasLoader"
// import { Center, Environment, OrbitControls, useGLTF } from "@react-three/drei"
// import { Bloom, EffectComposer } from "@react-three/postprocessing"
// import * as THREE from 'three'

// const Model = () => {
//   const glb = useGLTF('/models/robot.glb');

//   useEffect(() => {
//     glb.scene.traverse((child) => {
//       if (child.isMesh && child.material) {
//         child.material.emissiveIntensity = 1.5;
//         child.material.toneMapped = false;
//         child.material.needsUpdate = true;
//       }
//     });
//   }, [glb]);

//   return (
//     <Center>
//       <primitive
//         object={glb.scene}
//         position={[1.4, -4.45, -1.6]}
//         rotation={[-0.55, 0.15, -0.1]}
//         scale={0.4}
//       />
//     </Center>
//   );
// };

// useGLTF.preload('/models/robot.glb');

// export const Robot = () => {
//   return (
//     <Canvas
//       camera={{ position: [0, 1.5, 5], fov: 45 }}
//       gl={(gl) => {
//         gl.toneMapping = THREE.ACESFilmicToneMapping;
//         gl.outputEncoding = THREE.sRGBEncoding;
//       }}
//     >
//       <ambientLight intensity={1} />
//       <directionalLight intensity={2} position={[5, 5, 5]} />

//       <Suspense fallback={<CanvasLoader />}>
//         <Environment preset="sunset" background={false} />
//         <Model />
//       </Suspense>

//       <EffectComposer>
//         <Bloom intensity={1.5} luminanceThreshold={0.1} luminanceSmoothing={0.9} />
//       </EffectComposer>

//       <OrbitControls enableZoom />
//     </Canvas>
//   );
// };
 

import React, { useState, useEffect } from 'react';

function SplineRobotViewer() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    // Wait for spline-viewer to fire the 'load' event
    const handleLoad = () => {
      setLoaded(true);
    };

    const viewer = document.querySelector('spline-viewer');
    if (viewer) {
      viewer.addEventListener('load', handleLoad);
    }

    return () => {
      if (viewer) viewer.removeEventListener('load', handleLoad);
    };
  }, []);

  return (
    <div className='relative w-full h-full'>
      {!loaded && (
        <div className='absolute inset-0 flex items-center justify-center bg-black z-10'>
          <p className='text-white text-lg animate-pulse'>Loading Robot...</p>
        </div>
      )}

      <script
        type="module"
        src="https://unpkg.com/@splinetool/viewer@1.10.37/build/spline-viewer.js"
      ></script>

      <spline-viewer
        url="https://prod.spline.design/tav5qDYihO4JLrrR/scene.splinecode"
        style={{
          width: '100%',
          height: '100%',
          border: 'none',
          visibility: loaded ? 'visible' : 'hidden',
        }}
      ></spline-viewer>
    </div>
  );
}


export default SplineRobotViewer