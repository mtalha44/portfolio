// import { Canvas } from "@react-three/fiber";
// import { Suspense } from "react";
// import CanvasLoader from "./CanvasLoader";
// import { useGLTF,useAnimations } from "@react-three/drei";
// import { useControls } from "leva";


// const WavingHandsModel = () => {

//     // const { position, rotation , scale} = useControls({
//     //     position : { value:[0,0,0] , step : 0.1 },
//     //     rotation : { value:[0,0,0] , step : 0.1 },
//     //     scale : { value : 1 , min : 0.1 , max:10 }
//     // })

//     const {scene,animations} = useGLTF("/models/man_waving_hands/scene.gltf");
//     const { actions } = useAnimations(animations,scene);

//     if(actions && actions["Animation"]){
//         actions["Animation"].play();
//     }

//     return(
//         <primitive object={scene} scale={1.5} position={[0,-3.0,0]} rotation={[-0.4,-5.5,0.27]}/>
//         // <primitive object={scene} scale={scale} position={position} rotation={rotation}/>
//     )
// }


// const ManWavingHands = () => {
//     return (
//         <Canvas camera={{ position:[5,5,5] , fov:45}} >

//             <ambientLight intensity={0.8}/>
//             <directionalLight position={[5,5,5]} intensity={0.5}/>

//             <Suspense fallback={CanvasLoader}>
//                 <WavingHandsModel/>
//             </Suspense>
        
//         </Canvas>

//     )
// }

// export default ManWavingHands;


import { Canvas } from "@react-three/fiber";
import { Suspense, useEffect } from "react";
import CanvasLoader from "./CanvasLoader";
import { useGLTF, useAnimations } from "@react-three/drei";

const WavingHandsModel = () => {
  const { scene, animations } = useGLTF("/models/man_waving_hands/scene.gltf");

  // Remove LEFT arm animation tracks
  animations.forEach((clip) => {
    clip.tracks = clip.tracks.filter((track) => {
        console.log(track.name);
      return (
        !track.name.includes("LeftArm") &&
        !track.name.includes("LeftForeArm") &&
        !track.name.includes("LeftHand")
      );
    });
  });

  const { actions } = useAnimations(animations, scene);

  useEffect(() => {
    const firstAnimation = Object.keys(actions)[0];
    console.log("Available Animations:", Object.keys(actions));

    if (actions[firstAnimation]) {
      actions[firstAnimation].reset().fadeIn(0.5).play();
    }

    return () => {
      if (actions[firstAnimation]) {
        actions[firstAnimation].fadeOut(0.5);
      }
    };
  }, [actions]);

  return (
    <primitive
      object={scene}
      scale={1.5}
      position={[0, -3, 0]}
      rotation={[-0.4, -5.5, 0.27]}
    />
  );
};

const ManWavingHands = () => {
  return (
    <Canvas camera={{ position: [5, 5, 5], fov: 45 }}>
      <ambientLight intensity={0.8} />
      <directionalLight position={[5, 5, 5]} intensity={0.5} />

      <Suspense fallback={<CanvasLoader />}>
        <WavingHandsModel />
      </Suspense>
    </Canvas>
  );
};

export default ManWavingHands;


// import { Canvas } from "@react-three/fiber";
// import { Suspense, useEffect } from "react";
// import CanvasLoader from "./CanvasLoader";
// import { useGLTF, useAnimations } from "@react-three/drei";

// const WavingHandsModel = () => {
//     const { scene, animations } = useGLTF("/models/man_waving_hands/scene.gltf");
//     const { actions } = useAnimations(animations, scene);

//     useEffect(() => {
//         if (!scene || !actions) return;

//         // 👉 Play main waving animation (right hand)
//         if (actions["Animation"]) {
//             actions["Animation"].reset().play();
//         }

//         // 👉 Modify Left Arm Bones (make arm straight down)
//         const leftShoulder = scene.getObjectByName("LeftShoulder_012");
//         const leftArm = scene.getObjectByName("LeftArm_013");
//         const leftForeArm = scene.getObjectByName("LeftForeArm_014");
//         const leftHand = scene.getObjectByName("LeftHand_015");

//         if (leftShoulder) {
//             leftShoulder.rotation.set(-0.2, 0, 0.3); // slight backward + natural angle
//         }
//         if (leftArm) {
//             leftArm.rotation.set(-0.6, 0, 0); // straight down
//         }
//         if (leftForeArm) {
//             leftForeArm.rotation.set(-0.2, 0, 0); // relaxed
//         }
//         if (leftHand) {
//             leftHand.rotation.set(0, 0, 0); // neutral
//         }

//     }, [scene, actions]);

//     return (
//         <primitive 
//             object={scene} 
//             scale={1.5} 
//             position={[0, -3.0, 0]} 
//             rotation={[-0.4, -5.5, 0.27]} 
//         />
//     );
// };

// const ManWavingHands = () => {
//     return (
//         <Canvas camera={{ position: [5, 5, 5], fov: 45 }}>
//             <ambientLight intensity={0.8} />
//             <directionalLight position={[5, 5, 5]} intensity={0.5} />

//             <Suspense fallback={<CanvasLoader />}>
//                 <WavingHandsModel />
//             </Suspense>
//         </Canvas>
//     );
// };

// export default ManWavingHands;
