import { Canvas } from "@react-three/fiber";
import Scene from "./scene/Scene";
import { KeyboardControls } from "@react-three/drei";

function App() {
  return (
    <KeyboardControls
      map={[
        { name: "forward", keys: ["ArrowUp", "KeyW"] },
        { name: "backward", keys: ["ArrowDown", "KeyS"] },
        { name: "left", keys: ["ArrowLeft", "KeyA"] },
        { name: "right", keys: ["ArrowRight", "KeyD"] },
        { name: "jump", keys: ["Space"] },
      ]}
    >
      <Canvas gl={{ antialias: false, stencil: false }} camera={{ fov: 90 }}>
        <Scene />
      </Canvas>
    </KeyboardControls>
  );
}

export default App;
