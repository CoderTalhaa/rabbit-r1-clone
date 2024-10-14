import React, { useEffect, useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import useModelStore from "@/store/useStore";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import * as THREE from "three";
import { useFrame, useThree } from "@react-three/fiber";

gsap.registerPlugin(useGSAP);
gsap.registerPlugin(ScrollTrigger);

export default function Animations() {
  const { anim, setAnim, model1Ref, model2Ref } = useModelStore();
  const tl = gsap.timeline();

  const cameraTarget = new THREE.Vector3(0, 0, 0);

  const camera = useThree((state) => state.camera);

  useFrame((state, delta) => {
    camera.lookAt(cameraTarget);
  });

  useEffect(() => {}, [model1Ref, model2Ref]);

  useGSAP(() => {
    tl.to(".videobg", { opacity: 0.25, duration: 2, ease: "power3.inOut" });
    //   .fromTo(
    //     ".imageR1",
    //     { x: -150 },
    //     { x: 0, duration: 1, ease: "power3.inOut" }
    //   )
    //   .fromTo(
    //     ".text1, .text2, .imageOs",
    //     { opacity: 0 },
    //     {
    //       opacity: 1,
    //       duration: 1,
    //       ease: "power1.out",
    //       onComplete: () => {
    //         setAnim("start");
    //       },
    //     }
    //   );
  }, {});

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
  //         trigger: ".section1",
  //         start: "top top",
  //         end: "bottom bottom",
  //         scrub: 0.5,
  //         markers: true,
  //       },
  //     }
  //   );
  // });

  // useGSAP(
  //   () => {
  //     if (!model1Ref || !model2Ref) return;

  //     const st1 = gsap.timeline({
  //       scrollTrigger: {
  //         trigger: ".section1",
  //         start: "center+=300 center+=300",
  //         end: "bottom top",
  //         scrub: true,
  //         // markers: true,
  //       },
  //     });

  //     const st2 = gsap.timeline({
  //       scrollTrigger: {
  //         trigger: ".section2",
  //         start: "top center+=300",
  //         end: "bottom bottom",
  //         scrub: true,
  //         markers: true,
  //       },
  //     });

  //     st1.to(model1Ref.position, {
  //       y: -2,
  //       ease: "power1.inOut",
  //     });

  //     st2.fromTo(
  //       model2Ref.position,
  //       {
  //         y: 1.5,
  //         ease: "power1.inOut",
  //       },
  //       {
  //         y: -1.6,
  //         ease: "power1.inOut",
  //       }
  //     );
  //   },
  //   { dependencies: [anim, model1Ref] }
  // );

  // useGSAP(
  //   () => {
  //     if (!model2Ref) return;
  //     //   if (anim != "start") return;

  //     const st = gsap.timeline({
  //       scrollTrigger: {
  //         trigger: ".triggerModel2",
  //         endTrigger: ".triggerModelEnd2",
  //         pin: true,
  //         start: "top top",
  //         end: "bottom bottom",
  //         scrub: true,
  //         markers: true,
  //       },
  //     });

  //     st.to(model2Ref.position, {
  //       y: -2.5,
  //     });
  //   },
  //   { dependencies: [anim, model2Ref] }
  // );

  return null;
}
