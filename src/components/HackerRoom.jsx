import { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { Center, OrbitControls, useGLTF } from '@react-three/drei';
import CanvasLoader from './CanvasLoader';
import { useMediaQuery } from 'react-responsive';

const Model = () => {

  const isPad = useMediaQuery({ maxWidth:575 })
  const isMobile = useMediaQuery({ maxWidth:375 })
  const isSmallMobile = useMediaQuery({ maxWidth:315 })
  
  const scaleValue = isSmallMobile ? 1 : isMobile ? 1.5 : isPad ? 1.8 : 2;

  const gltf = useGLTF('/models/stylized_pc.glb');

  return (
    <Center>
      <primitive
        object={gltf.scene}
        position={[-1.58, 0.5, 0]}
        rotation={[0,0,0]}
        scale={scaleValue}
      />
    </Center>
  );
};

const HackerRoom = () => {
  return (
    // <div className="w-full m-auto h-full inset-0">
    // <div className="w-full m-auto h-full inset-0 transform translate-x-8 translate-y-[-10vh]">
    <div className="w-full m-auto h-full inset-0 ">
      <Canvas camera={{ position: [-2, 0, 5], fov: 50 }} className='pl-11'>
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
