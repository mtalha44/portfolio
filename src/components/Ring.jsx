import { useGSAP } from '@gsap/react';
import { Center, useTexture, OrbitControls } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import gsap from 'gsap';
import { useCallback, useRef, Suspense } from 'react';

const sizes = {
  ringPosition: [0, 0,5],
};

const Rings = ({ position }) => {
  const refList = useRef([]);
  const getRef = useCallback((mesh) => {
    if (mesh && !refList.current.includes(mesh)) {
      refList.current.push(mesh);
    }
  }, []);

  const texture = useTexture('textures/rings.png');

  useGSAP(
    () => {
      if (refList.current.length === 0) return;

      refList.current.forEach((r) => {
        r.position.set(position[0], position[1], position[2]);
      });

      gsap.timeline({ repeat: -1, repeatDelay: 0.5 }).to(
        refList.current.map((r) => r.rotation),
        {
          y: `+=${Math.PI * 2}`,
          x: `-=${Math.PI * 2}`,
          duration: 2.5,
          stagger: { each: 0.15 },
        }
      );
    },
    { dependencies: position }
  );

  return (
    <Center>
      <group scale={0.90}>
        {Array.from({ length: 4 }, (_, index) => (
          <mesh key={index} ref={getRef}>
            <torusGeometry args={[(index + 1) * 0.5, 0.1]} />
            <meshMatcapMaterial matcap={texture} toneMapped={false} />
          </mesh>
        ))}
      </group>
    </Center>
  );
};

const RingsModel = () => {
  return (
    <Canvas style={{ width: '100%', height: '100%' }}>
      <ambientLight intensity={0.6} />
      <Suspense fallback={null}>
        <Rings position={sizes.ringPosition} />
      </Suspense>
      <OrbitControls />
    </Canvas>
  );
};

export default RingsModel;
