import { Center, OrbitControls, useAnimations, useGLTF } from "@react-three/drei"
import { Canvas } from "@react-three/fiber";
import { Suspense, useEffect, useRef } from "react";
import CanvasLoader from "./CanvasLoader";

useGLTF.preload("./models/robot_optimized.glb");

const ModelSkillsRobot = () => {
  const group = useRef();
  // const { scene, animations } = useGLTF("./models/robot_playground/scene.gltf");
  const { scene, animations } = useGLTF("./models/robot_optimized.glb");

  // Bind animations to the group
  const { actions, names } = useAnimations(animations, group);

  useEffect(() => {
    if (actions && names.length > 0) {
      // Play the first animation (you can replace with the exact name if known)
      actions[names[0]].reset().fadeIn(0.5).play();

      // If you want to loop, ensure loop is set
      actions[names[0]].clampWhenFinished = false;
      actions[names[0]].repetitions = Infinity;
    }
  }, [actions, names]);

  return (
      <primitive
        ref={group}
        object={scene}
        position={[0, -2, 0]}
        rotation={[0, 1.90, 0]}
        scale={1.94}
        />
  );
};

const SkillsRobot = () => {
  return (
    <Canvas camera={{ position: [5, 5, 5], fov: 50 }} style={{ width: "100%", height: "375px",}}>
      <ambientLight intensity={1} />
      <directionalLight position={[5, 5, 5]} />
      <Suspense fallback={<CanvasLoader />}>
        <ModelSkillsRobot />
      </Suspense>
      <OrbitControls enableZoom={true} />
    </Canvas>
  );
};

export default SkillsRobot;
