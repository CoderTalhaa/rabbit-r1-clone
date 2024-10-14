import { useFrame } from "@react-three/fiber";
import { easing } from "maath";
import React, { useRef } from "react";

export default function CameraRig({ children }) {
  const groupRef = useRef();

  useFrame((state, delta) => {
    easing.damp3(
      groupRef.current.rotation,
      [
        (-state.pointer.y * state.viewport.height) / 8,
        (-state.pointer.x * state.viewport.width) / 8,
        0,
      ],
      0.5,
      delta
    );
  });

  return <group ref={groupRef}>{children}</group>;
}
