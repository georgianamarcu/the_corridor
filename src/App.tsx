import { Canvas } from "@react-three/fiber";
import MainOverlayContainer from "./overlay/MainOverlayContainer";
import Scene from "./scene/Scene";
import { KeyboardControls } from "@react-three/drei";
// import { Perf } from "r3f-perf";
// import Cursor from "./overlay/Cursor";
import React from "react";

function App(): React.FC {
  return (
    <>
      <MainOverlayContainer />
      {/* <Cursor /> */}
      <KeyboardControls
        map={[
          { name: "forward", keys: ["ArrowUp", "KeyW"] },
          { name: "backward", keys: ["ArrowDown", "KeyS"] },
          { name: "left", keys: ["ArrowLeft", "KeyA"] },
          { name: "right", keys: ["ArrowRight", "KeyD"] },
          { name: "jump", keys: ["Space"] },
        ]}
      >
        <Canvas gl={{ antialias: false, stencil: false }} camera={{ fov: 80 }}>
          <Scene />
          {/* <Perf /> */}
        </Canvas>
      </KeyboardControls>
    </>
  );
}

export default App;
