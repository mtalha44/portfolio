import { Suspense } from 'react';
import { Center, OrbitControls, useGLTF } from '@react-three/drei';
import CanvasLoader from './CanvasLoader';
import { useMediaQuery } from 'react-responsive';
import { Canvas } from '@react-three/fiber';

useGLTF.preload("/models/stylized_pc1_final.glb");

const Model = () => {
const isSmallLaptop = useMediaQuery({ maxWidth:1095 })
const isMobile = useMediaQuery({ maxWidth:595 })
const isSmallMobile = useMediaQuery({ maxWidth:395 })
const isTablet = useMediaQuery({ maxWidth:975 })

  const scaleValue = isSmallMobile 
  ? 1.1 
  : isMobile 
  ? 1.3 
  : isTablet 
    ? 1.3 
    : isSmallLaptop 
      ? 2 
      : 2.5;

      const gltf = useGLTF('/models/stylized_pc1_final.glb');
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
        <OrbitControls enableZoom={false}/>
      </Canvas>
    </div>
  );
};


export default HackerRoom;

