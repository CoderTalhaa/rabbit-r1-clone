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
  const { anim, setAnim, model1Ref, model2Ref } = useModelStore();

  const cameraTarget = new THREE.Vector3(0, 0, 0);

  const camera = useThree((state) => state.camera);

  // const { startX, startY, startZ } = useControls({
  //   startX: { value: 1.5, min: -10, max: 10, step: 0.1 },
  //   startY: { value: 0.4, min: -10, max: 10, step: 0.1 },
  //   startZ: { value: 4, min: -10, max: 10, step: 0.1 },
  // });

  useFrame((state, delta) => {
    camera.lookAt(cameraTarget);
    // camera.position.set(startX, startY, startZ);
  });

  useGSAP(() => {
    const tl = gsap.timeline();
    gsap.set(".imageR1", { x: -180 });
    gsap.set(".text1, .text2, .imageOs", { opacity: 0 }),

    tl.to(".videobg", { opacity: 0.25, duration: 2, ease: "power3.inOut" });

      tl.to(".imageR1", { x: 0, duration: 1, ease: "power3.inOut" })

    tl.to(".text1, .text2, .imageOs", {
      opacity: 1,
      duration: 1,
      ease: "power1.out",
      stagger: 0.2,
    })
  });

  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".section1",
        start: "top top+=300",
        end: "bottom bottom",
        scrub: 0.5,
        toggleActions: "play none none none",
        // markers: true,
      },
      defaults: {
        ease: "power4.inOut",
        duration: 5,
      },
    });

    tl.to(camera.position, {
      x: 0,
      y: 0,
      z: 5,
    });
  });

  return null;
}
