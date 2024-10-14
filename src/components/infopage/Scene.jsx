"use client";

import {
  Environment,
  Lightformer,
  OrbitControls,
  ScrollControls,
} from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import React from "react";
import { Rabbit } from "./Rabbit";
import Animations from "./Animation";

export default function Scene() {
  return (
    <div className="fixed top-0 left-0 w-screen h-screen">
      <Canvas shadows dpr={[1, 1.5]} camera={{ position: [0, 0, 5], fov: 30 }}>
        <Rabbit position={[0, -1.1, 0]} />
        <OrbitControls enableZoom={false} />
        <ambientLight intensity={1} />
        <Environment preset="city">
          {/* <Lightformer
            form="rect"
            intensity={5}
            position={[2, 3, 3]}
            scale={5}
          />
          <Lightformer
            form="rect"
            intensity={5}
            position={[2, 3, 3]}
            scale={5}
          /> */}
        </Environment>
        <Animations />
      </Canvas>
    </div>
  );
}
