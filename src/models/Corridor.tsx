import { useGLTF } from "@react-three/drei";

export function Corridor(props) {
  const { nodes, materials } = useGLTF("/corridor.glb");
  return (
    <group {...props} dispose={null}>
      <group position={[-0.673216, -0.283617, -6.375035]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.exteriorStrips_1.geometry}
          material={materials.white_bloom}
          material-emissiveIntensity={3}
          material-toneMapping={false}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.exteriorStrips_2.geometry}
          material={materials.mat2}
        />
      </group>
      <group position={[-0.706465, -0.283617, -6.375035]}>
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
          material={materials.white_bloom}
          material-emissiveIntensity={3}
          material-toneMapping={false}
        />
      </group>
      <group
        position={[2.689634, 6.237738, -0.138753]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={[0.65089, 0.994895, 0.65089]}
      >
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
      <group
        position={[6.074774, -0.283618, 22.304003]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={-1}
      >
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
          material-emissiveIntensity={3}
          material-toneMapping={false}
        />
      </group>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.kiosk_screen.geometry}
        material={materials["kiosk.001"]}
        position={[4.868323, -0.370802, 23.230242]}
        rotation={[Math.PI, -0.891175, Math.PI]}
        scale={2.399242}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.kiosk.geometry}
        material={materials.metal}
        position={[4.868323, -0.370802, 23.230242]}
        rotation={[Math.PI, -0.891175, Math.PI]}
        scale={2.399242}
      />
      <group
        position={[2.416499, 1.802009, 24.92848]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={[9.585181, 0.035026, 9.585181]}
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
          material-emissiveIntensity={3}
          material-toneMapping={false}
        />
      </group>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.door11.geometry}
        material={materials.mat2}
        position={[2.416499, 1.818744, 24.988642]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={[9.585181, 0.035026, 9.585181]}
      />
      <group
        position={[2.797082, 1.802009, -3.80169]}
        rotation={[Math.PI / 2, 0, Math.PI]}
        scale={[9.585181, 0.035026, 9.585181]}
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
          material-emissiveIntensity={3}
          material-toneMapping={false}
        />
      </group>
      <group
        position={[2.797082, 1.802009, -3.80169]}
        rotation={[Math.PI / 2, 0, Math.PI]}
        scale={[9.585181, 0.035026, 9.585181]}
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
          material-emissiveIntensity={3}
          material-toneMapping={false}
        />
      </group>
    </group>
  );
}

useGLTF.preload("/corridor.glb");
