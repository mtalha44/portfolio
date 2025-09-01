import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import * as THREE from "three";

function Image3D({ url }) {
  const texture = new THREE.TextureLoader().load(url);

  return (
    <mesh scale={3.5}>
      {/* flat plane instead of box */}
      <planeGeometry args={[2, 2 ]} />
      <meshBasicMaterial map={texture} transparent side={THREE.DoubleSide} />
    </mesh>
  );
}

export default function Image3DModel({ src }) {
  return (
    <Canvas camera={{ position: [0, 0, 5] }} style={{height: "100%", width: "100%" }}>
      <ambientLight intensity={1} />
      <Image3D url={`/assets/${src}.png`} />
      <OrbitControls enableZoom={false} />
    </Canvas>
  );
}
