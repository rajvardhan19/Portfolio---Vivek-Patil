import React from "react";

import { useGLTF } from "@react-three/drei";

export default function Model(props) {
  const { nodes, materials } = useGLTF("/building.gltf");
  return (
    <group {...props} dispose={null} rotation={[0, Math.PI / 2, 0]}>
      <group scale={0.01}>
        <mesh
          geometry={nodes.Cube009_Lobby_Interior_Baked_0.geometry}
          material={materials.Lobby_Interior_Baked}
          position={[0, 0, 0]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={1}
        />
        <mesh
          geometry={nodes.Cube001_Windows_0.geometry}
          material={materials.Windows}
          position={[0, 0, 0]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={1}
        />
        <mesh
          geometry={nodes.Cube002_Material_0.geometry}
          material={materials.Material}
          position={[0, 0, 0]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={1}
        />
        <mesh
          geometry={nodes.Cube003_Blinds_0.geometry}
          material={materials.Blinds}
          position={[0, 0, 0]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={1}
        />
        <mesh
          geometry={nodes.Cube004_Billboard_0.geometry}
          material={materials.Billboard}
          position={[0, 0, 0]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={1}
        />
        <mesh
          geometry={nodes.Cube005_Glass_0.geometry}
          material={materials.Glass}
          position={[0, 0, 0]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={1}
        />
        <mesh
          geometry={nodes.Cube006_Emmisive_0.geometry}
          material={materials.Emmisive}
          position={[0, 0, 0]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={1}
        />
        <mesh
          geometry={nodes.Cube007_Glass_Lobby_0.geometry}
          material={materials.Glass_Lobby}
          position={[0, 0, 0]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={1}
        />
        <mesh
          geometry={nodes.Cube008__0.geometry}
          material={materials["Cube.008__0"]}
          position={[0, 0, 0]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={1}
        />
        <mesh
          geometry={nodes.Cube010_Bulb_0.geometry}
          material={materials.Bulb}
          position={[0, 0, 0]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={1}
        />
        <mesh
          geometry={nodes.Cube011_Lobby_Interior_Trimsheet_0.geometry}
          material={materials.Lobby_Interior_Trimsheet}
          position={[0, 0, 0]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={1}
        />
        <mesh
          geometry={nodes.Cube012_Parralax_Mapping_0.geometry}
          material={materials.Parralax_Mapping}
          position={[0, 0, 0]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={1}
        />
      </group>
    </group>
  );
}

useGLTF.preload("/building.gltf");
