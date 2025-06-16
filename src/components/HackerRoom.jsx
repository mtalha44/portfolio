import { Suspense } from 'react';
import { Center, OrbitControls, useGLTF } from '@react-three/drei';
import CanvasLoader from './CanvasLoader';
import { useMediaQuery } from 'react-responsive';
import { Canvas, useFrame } from '@react-three/fiber';
import { useRef } from 'react';

const Model = () => {
const isSmallLaptop = useMediaQuery({ maxWidth:1095 })
const isMobile = useMediaQuery({ maxWidth:495 })
const isTablet = useMediaQuery({ maxWidth:975 })

  const scaleValue = isMobile 
  ? 1.3 
  : isTablet 
    ? 1.4 
    : isSmallLaptop 
      ? 2 
      : 2.5;

      const gltf = useGLTF('/models/stylized_pc1.glb');
  return (
    <Center>
      <primitive
        object={gltf.scene}
        rotation={[-0.2,0,0]}
        scale={scaleValue}
        />
    </Center>
  );
};




const HackerRoom = () => {
  const isSmallLaptop = useMediaQuery({ maxWidth:1095 })
const isMobile = useMediaQuery({ maxWidth:475 })
const isTablet = useMediaQuery({ maxWidth:875 })


  let cameraPosition = [-0.1, 2.5, 5.8];
let fov = 50;

if (isMobile) {
  cameraPosition = [ 0, 1.4, 3];
  fov = 55;
} else if (isTablet) {
  cameraPosition = [ 0, 1.8, 3];
  fov = 52;
} else if (isSmallLaptop) {
  cameraPosition = [-0.1, 2.4, 4];
  fov = 50;
}

  return (
    <div className="min-w-full m-auto h-full inset-0 ">
      <Canvas camera={{ position: cameraPosition, fov: fov }} className='' >
        <ambientLight intensity={1} />
        <directionalLight position={[5, 5, 5]} />
        <Suspense fallback={<CanvasLoader />}>
          <Model />
        </Suspense>
        <OrbitControls />
      </Canvas>
    </div>
  );
};





  const RotatingCube = () => {
  const ref = useRef();
  const gltf = useGLTF('/models/cube.glb');

  useFrame(() => {
    if (ref.current) {
      ref.current.rotation.y += 0.01;
    }
  });
  
  return (
    <Center>
      <primitive ref={ref} object={gltf.scene} position={[6, 1.2, -3]} scale={0.70} />
    </Center>
  );
};

export const CubeCanvas = () => {
  return (
    <Canvas camera={{ position: [0, 1.5, 5], fov: 45 }}>
      <ambientLight intensity={1} />
      <directionalLight position={[ 5 , 5, 5 ]} />
      <Suspense fallback={<CanvasLoader />}>
        <RotatingCube />
      </Suspense>
      <OrbitControls />
    </Canvas>
  );
};




export default HackerRoom;

// export const ReactRoom = () => {
//   const isSmallLaptop = useMediaQuery({ maxWidth:1095 })
// const isMobile = useMediaQuery({ maxWidth:475 })
// const isTablet = useMediaQuery({ maxWidth:875 })


//   let cameraPosition = [-0.1, 2.5, 5.8];
// let fov = 50;

// if (isMobile) {
//   cameraPosition = [ 0, 1.4, 3];
//   fov = 55;
// } else if (isTablet) {
//   cameraPosition = [ 0, 1.8, 3];
//   fov = 52;
// } else if (isSmallLaptop) {
//   cameraPosition = [-0.1, 2.4, 4];
//   fov = 50;
// }

//   return (
//     <div className="w-fit m-auto h-22 inset-0 ">
//       <Canvas camera={{ position: [-0.1, 2.5, 5.8 ], fov: 50 }} className='' >
//         <ambientLight intensity={1} />
//         <directionalLight position={[5, 5, 5]} />
//         <Suspense fallback={<CanvasLoader />}>
//           <ReactLogo/>
//         </Suspense>
//         <OrbitControls />
//       </Canvas>
//     </div>
//   );
// };

