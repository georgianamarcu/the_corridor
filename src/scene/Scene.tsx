import { Suspense, useRef } from "react";
import { Corridor } from "../models/Corridor";
import Lights from "./Lights";
import Effects from "./Effects";
import { useKeyboardControls, PointerLockControls } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { Vector3 } from "three";

const Scene = () => {
  const [, get] = useKeyboardControls();
  const lastY = useRef(0.7);

  useFrame((state) => {
    const { forward, backward, left, right } = get();
    if (!state.camera) return;

    const forwardVec = new Vector3();
    const rightVec = new Vector3();
    const speed = 0.1;

    state.camera.getWorldDirection(forwardVec);
    forwardVec.y = 0;
    forwardVec.normalize();

    rightVec.crossVectors(new Vector3(0, 1, 0), forwardVec).normalize();

    if (forward) {
      state.camera.position.addScaledVector(forwardVec, speed);
    }
    if (backward) {
      state.camera.position.addScaledVector(forwardVec, -speed);
    }
    if (left) {
      state.camera.position.addScaledVector(rightVec, speed);
    }
    if (right) {
      state.camera.position.addScaledVector(rightVec, -speed);
    }

    const isMoving = forward || backward || left || right;
    //Give the impression camera is moving up and down as if walking
    if (isMoving) {
      const time = state.clock.getElapsedTime() * 0.2;
      const bobbingAmount = Math.sin(time) * 0.09;
      lastY.current = 0.7 + bobbingAmount;
    } else {
      if (lastY.current !== 0.7) {
        lastY.current -= (lastY.current - 0.7) * 0.1;
      }
    }

    state.camera.position.y = lastY.current;
  });

  return (
    <>
      <Suspense fallback={null}>
        <Corridor rotation={[0, -Math.PI, 0]} position={[3, -2.6, 2]} />
      </Suspense>
      <Lights />
      <Effects />
      <PointerLockControls />
    </>
  );
};

export default Scene;
