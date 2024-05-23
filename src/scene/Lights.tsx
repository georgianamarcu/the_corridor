import { Environment, Lightformer } from "@react-three/drei";

const Lights = () => {
  return (
    <>
      <Environment resolution={1024}>
        {/* Ceiling */}
        <Lightformer
          intensity={40}
          color="red"
          rotation-x={Math.PI / 2}
          position={[-1, 4, -9]}
          scale={[1, 1, 1]}
        />
        <Lightformer
          color="white"
          intensity={10}
          rotation-x={Math.PI / 2}
          position={[2, 4, -9]}
          scale={[1, 1, 1]}
        />
        {/* Sides */}
        <Lightformer
          intensity={10}
          rotation-y={Math.PI / 2}
          position={[-7, 2, 4]}
          scale={[1, 2, 1]}
        />
        <Lightformer
          intensity={10}
          rotation-y={-Math.PI / 2}
          position={[7, 2, 2]}
          scale={[1, 2, 1]}
        />
        <Lightformer
          form="ring"
          color="cyan"
          intensity={10}
          scale={1}
          position={[5, 5, 4]}
          onUpdate={(self) => self.lookAt(0, 0, 0)}
        />
        {/* Ceiling */}
      </Environment>
    </>
  );
};

export default Lights;
