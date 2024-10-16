import { Environment, Float } from "@react-three/drei";
import React, { useEffect, useRef } from "react";
import { Rabbit } from "../Rabbit";
import useModelStore from "@/store/useStore";
import { useMediaQuery } from "@/hooks/useMediaQuery";
import { Rabbit2 } from "../Rabbit2";
import { useScroll, useTransform } from "framer-motion";
import { motion } from "framer-motion-3d";

export default function Scene1() {
  const model1Ref = useRef();
  const { setModel1Ref } = useModelStore();

  const isDesktop = useMediaQuery("(min-width: 768px)", true);
  const px = isDesktop ? 1 : 0;
  const scale = isDesktop ? 1 : 0.8;

  useEffect(() => {
    setModel1Ref(model1Ref.current);
  }, [setModel1Ref]);

  const { scrollYProgress } = useScroll({
    target: ".section1",
    offset: ["start start", "end center"],
  });

  const xP = useTransform(scrollYProgress, [0, 1], [0, 0]);
  const yP = useTransform(scrollYProgress, [0, 0.9, 1], [0, -4.3, -5]);

  return (
    <>
      {/* <Rabbit2 position={position} scale={scale} rotation={rotation} /> */}
      <ambientLight intensity={1} />
      <motion.group ref={model1Ref} position={[0, yP, 0]}>
        <Rabbit
          position={[px, 0, 0]}
          scale={scale}
          rotation={[0, 0, 0]}
          wireframe={true}
        />
      </motion.group>

      <Environment preset="city" />
    </>
  );
}
