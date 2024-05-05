import { Suspense } from "react";
import { Corridor } from "../models/Corridor";
// import { OrbitControls } from "@react-three/drei";
import Lights from "./Lights";
import Effects from "./Effects";
import { useFrame } from "@react-three/fiber";

const Scene = () => {
  useFrame((state) => {
    state.camera.position.lerp(
      { x: state.pointer.x / 2, y: -state.pointer.y / 2, z: 1 },
      0.1
    );
    state.camera.lookAt(0, -0.3, 0);
  });
  return (
    <>
      <Suspense fallback={null}>
        <Corridor rotation={[0, -Math.PI, 0]} position={[2.4, -2.3, 2]} />
      </Suspense>
      {/* <OrbitControls /> */}
      <Lights />
      <Effects />
    </>
  );
};

export default Scene;
