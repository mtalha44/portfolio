import { Canvas } from "@react-three/fiber";
import { Text, OrbitControls } from "@react-three/drei";
import { Suspense } from "react";

const skills = [
  "React", "Node.js", "TypeScript", "JavaScript",
  "MongoDB", "Express.js", "TailwindCSS", "Three.js",
  "Framer Motion", "Git", "HTML", "CSS"
];

function SkillSphere() {
  return (
    <group>
      {skills.map((skill, i) => {
        const angle = (i / skills.length) * Math.PI * 2; // spread around sphere
        const y = Math.cos(angle) * 2;
        const x = Math.sin(angle) * 2;
        const z = (Math.random() - 0.5) * 2; // random depth

        return (
          <Text
            key={i}
            position={[x, y, z]}
            fontSize={0.3}
            color="white"
            anchorX="center"
            anchorY="middle"
          >
            {skill}
          </Text>
        );
      })}
    </group>
  );
}

export default function SkillCloud() {
  return (
    <Canvas camera={{ position: [0, 0, 6], fov: 75 }} style={{ height: "500px" }}>
      <ambientLight intensity={0.5} />
      <directionalLight position={[5, 5, 5]} />
      <Suspense fallback={null}>
        <SkillSphere />
      </Suspense>
      <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={2} />
    </Canvas>
  );
}
