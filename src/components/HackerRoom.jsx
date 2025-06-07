import { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { Center, OrbitControls, useGLTF } from '@react-three/drei';
import CanvasLoader from './CanvasLoader';
import { useMediaQuery } from 'react-responsive';
// import { useControls } from 'leva';



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

      const gltf = useGLTF('/models/stylized_pc.glb');
  return (
    <Center>
      <primitive
        object={gltf.scene}
        // position={[-1.58, 0.5, 0]}
        rotation={[-0.2,0,0]}
        // scale={scaleValue}
        // scale={2}
        // position={[ 1 , -0.81 ,-8]}
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
    <div className=" m-auto h-full inset-0 ">
      {/* <Canvas camera={{ position: [-0.1, 2.5, 5.8 ], fov: 50 }} className='' > */}
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

export default HackerRoom;
