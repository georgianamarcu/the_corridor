import { Canvas } from "@react-three/fiber";
import MainOverlayContainer from "./overlay/MainOverlayContainer";
import Scene from "./scene/Scene";
import { KeyboardControls } from "@react-three/drei";

function App() {
  return (
    <>
      <MainOverlayContainer />
      <KeyboardControls
        map={[
          { name: "forward", keys: ["ArrowUp", "KeyW"] },
          { name: "backward", keys: ["ArrowDown", "KeyS"] },
          { name: "left", keys: ["ArrowLeft", "KeyA"] },
          { name: "right", keys: ["ArrowRight", "KeyD"] },
          { name: "jump", keys: ["Space"] },
        ]}
      >
        <Canvas
          dpr={[1, 2]}
          gl={{ antialias: false, stencil: false }}
          camera={{ fov: 80 }}
        >
          <Scene />
        </Canvas>
      </KeyboardControls>
    </>
  );
}

export default App;
