import { Suspense, useEffect } from 'react';
import { Center, OrbitControls, useGLTF } from '@react-three/drei';
import CanvasLoader from './CanvasLoader';
import { Canvas, useFrame } from '@react-three/fiber';
import { useRef } from 'react';
import * as THREE from 'three';

const RotatingModel = ({src}) => {
  const ref = useRef();
  const gltf = useGLTF(`/models/${src}.glb`);

    useEffect(() => {
    if (src === 'cube' && ref.current) {
      ref.current.traverse((child) => {
        if (child.isMesh) {
          child.material = new THREE.MeshStandardMaterial({ color: '#FFC300' }); 
        }
      });
    }
  }, [src]);

  useFrame(() => {
    if (ref.current && src === 'cube') {
      ref.current.rotation.y += 0.01;
      ref.current.rotation.x += 0.01;
    }
    else{
      ref.current.rotation.y += 0.01;
    }
  });
  
  return (
    <Center>
      <primitive ref={ref} object={gltf.scene} position={[6, 1.2, -3]} scale={src === 'cube' ? 1.3 : 0.47} />
    </Center>
  );
};

export const ModelCanvas = ({ src }) => {
  return (
    <Canvas camera={{ position: [0, 1.5, 5], fov: 45 }}>
      <ambientLight intensity={0.8} />
      <directionalLight position={[5, 5, 5]} />
      <Suspense fallback={<CanvasLoader />}>
        <RotatingModel src={src} />
      </Suspense>
      <OrbitControls />
    </Canvas>
  );
};