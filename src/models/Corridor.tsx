import { useGLTF } from "@react-three/drei";
import { GLTF } from "three-stdlib";
import * as THREE from "three";
import { Euler, Vector3 } from "@react-three/fiber";

type GLTFResults = GLTF & {
  nodes: {
    exteriorStrips_1: THREE.Mesh;
    exteriorStrips_2: THREE.Mesh;
    interiorStrips_1: THREE.Mesh;
    interiorStrips_2: THREE.Mesh;
    corridorMetal_1: THREE.Mesh;
    corridorMetal_2: THREE.Mesh;
    pillars_1: THREE.Mesh;
    pillars_2: THREE.Mesh;
    kiosk_screen: THREE.Mesh;
    kiosk: THREE.Mesh;
    interiorStrips001: THREE.Mesh;
    interiorStrips001_1: THREE.Mesh;
    interiorStrips002: THREE.Mesh;
    interiorStrips002_1: THREE.Mesh;
    door_1: THREE.Mesh;
    door_2: THREE.Mesh;
    door2Left_1: THREE.Mesh;
    door2Left_2: THREE.Mesh;
    door2Right_1: THREE.Mesh;
    door2Right_2: THREE.Mesh;
    door11: THREE.Mesh;
    door1002: THREE.Mesh;
  };
  materials: {
    white_bloom: THREE.MeshStandardMaterial;
    mat2: THREE.MeshStandardMaterial;
    mat3: THREE.MeshStandardMaterial;
    bloom: THREE.MeshStandardMaterial;
    ["kiosk.001"]: THREE.MeshStandardMaterial;
    metal: THREE.MeshStandardMaterial;
    bloom1: THREE.MeshStandardMaterial;
  };
};

interface CorridorProps {
  rotation: Euler;
  position: Vector3;
}

export function Corridor({ rotation, position }: CorridorProps) {
  const { nodes, materials } = useGLTF("/corridor.glb") as GLTFResults;

  materials.mat3.envMapIntensity = 2;
  materials.mat2.envMapIntensity = 2;
  materials.bloom1.emissiveIntensity = 8;
  materials.bloom1.toneMapped = false;
  materials.bloom.emissiveIntensity = 6;
  materials.bloom.toneMapped = false;

  return (
    <group rotation={rotation} position={position} dispose={null}>
      <group position={[-0.673, -0.284, -6.375]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.exteriorStrips_1.geometry}
          material={materials.bloom1}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.exteriorStrips_2.geometry}
          material={materials.mat2}
        />
      </group>
      <group position={[-0.706, -0.284, -6.375]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.interiorStrips_1.geometry}
          material={materials.mat2}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.interiorStrips_2.geometry}
          material={materials.bloom1}
        />
      </group>
      <group name="corridor" position={[2.69, 6.238, -0.139]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.corridorMetal_1.geometry}
          material={materials.mat2}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.corridorMetal_2.geometry}
          material={materials.mat3}
        />
      </group>
      <group name="pillars" position={[6.075, -0.284, 22.304]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.pillars_1.geometry}
          material={materials.mat2}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.pillars_2.geometry}
          material={materials.bloom}
        />
      </group>
      <group name="kiosk" visible={true}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.kiosk_screen.geometry}
          material={materials["kiosk.001"]}
          position={[4.868, -0.371, 23.23]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.kiosk.geometry}
          material={materials.metal}
          position={[4.868, -0.371, 23.23]}
        />
      </group>
      <group position={[-0.706, -0.284, -6.375]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.interiorStrips001.geometry}
          material={materials.bloom1}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.interiorStrips001_1.geometry}
          material={materials.bloom1}
        />
      </group>
      <group position={[-0.706, -0.284, -6.375]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.interiorStrips002.geometry}
          material={materials.mat2}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.interiorStrips002_1.geometry}
          material={materials.bloom1}
        />
      </group>
      <group name="doors">
        <group
          position={[2.416, 1.802, 24.928]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[9.585, 0.035, 9.585]}
        >
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.door_1.geometry}
            material={materials.mat2}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.door_2.geometry}
            material={materials.bloom1}
          />
        </group>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.door11.geometry}
          material={materials.mat2}
          position={[1.511, 1.819, 24.989]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[2.71, 1, 1]}
        />
        <group
          position={[2.797, 1.802, -3.802]}
          rotation={[Math.PI / 2, 0, Math.PI]}
          scale={[9.585, 0.035, 9.585]}
        >
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.door2Left_1.geometry}
            material={materials.mat2}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.door2Left_2.geometry}
            material={materials.bloom1}
          />
        </group>
        <group
          position={[2.797, 1.802, -3.802]}
          rotation={[Math.PI / 2, 0, Math.PI]}
          scale={[9.585, 0.035, 9.585]}
        >
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.door2Right_1.geometry}
            material={materials.mat2}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.door2Right_2.geometry}
            material={materials.bloom1}
          />
        </group>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.door1002.geometry}
          material={materials.mat2}
          position={[1.742, 1.819, -4.117]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[2.71, 1, 1]}
        />
      </group>
    </group>
  );
}

useGLTF.preload("/corridor.glb");
