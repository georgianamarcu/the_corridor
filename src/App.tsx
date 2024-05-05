import { Canvas } from "@react-three/fiber";
import Scene from "./scene/Scene";

function App() {
  return (
    <Canvas gl={{ antialias: false, stencil: false }} camera={{ fov: 80 }}>
      <Scene />
    </Canvas>
  );
}

export default App;
