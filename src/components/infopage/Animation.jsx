import React, { useEffect, useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import useModelStore from "@/store/useStore";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import * as THREE from "three";
import { useFrame, useThree } from "@react-three/fiber";
import { useControls } from "leva";

gsap.registerPlugin(useGSAP);
gsap.registerPlugin(ScrollTrigger);

export default function Animations() {
  const tl = gsap.timeline();

  const cameraTarget = new THREE.Vector3(0, 0, 0);

  const camera = useThree((state) => state.camera);

  useFrame((state, delta) => {
    camera.lookAt(cameraTarget);
  });

  const { cameraX, cameraY, cameraZ, targetX, targetY, targetZ } = useControls(
    "Camera Position",
    {
      cameraX: { value: 0, min: -30, max: 30, step: 0.1 },
      cameraY: { value: 0, min: -30, max: 30, step: 0.1 },
      cameraZ: { value: 5, min: -30, max: 30, step: 0.1 },
      targetX: { value: 0, min: -10, max: 30, step: 0.1 },
      targetY: { value: 0, min: -10, max: 30, step: 0.1 },
      targetZ: { value: 0, min: -10, max: 30, step: 0.1 },
    }
  );

  useEffect(() => {
    camera.position.set(cameraX, cameraY, cameraZ);
    camera.lookAt(new THREE.Vector3(targetX, targetY, targetZ));
  }, [camera, cameraX, cameraY, cameraZ, targetX, targetY, targetZ]);

  // useGSAP(() => {
  //   tl.fromTo(
  //     camera.position,
  //     { x: 0, y: 0, z: 5 },
  //     {
  //       x: 3,
  //       y: 1,
  //       z: 6,
  //       ease: "power1.inOut",
  //       scrollTrigger: {
  //         trigger: ".infoPage",
  //         start: "top top",
  //         end: "bottom bottom",
  //         scrub: 0.5,
  //         markers: true,
  //       },
  //     }
  //   );
  // });

  return null;
}
