import { Environment, Float } from "@react-three/drei";
import React, { useRef } from "react";
import { Rabbit } from "../Rabbit";
import useModelStore from "@/store/useStore";
import { useEffect } from "react";
import { useScroll, useTransform } from "framer-motion";
import { motion } from "framer-motion-3d";
import { useMediaQuery } from "@/hooks/useMediaQuery";

export default function Scene2() {
  const model2Ref = useRef();
  const { setModel2Ref } = useModelStore();

  const isDesktop = useMediaQuery("(min-width: 768px)", true);
  const px = isDesktop ? 1 : 0;
  const scale = isDesktop ? 1 : 0.8;

  useEffect(() => {
    setModel2Ref(model2Ref.current);
  }, [setModel2Ref]);

  const { scrollYProgress } = useScroll({
    target: ".section2",
    offset: ["start center", "end end"],
  });

  const xP = useTransform(scrollYProgress, [0, 1], [0, 0]);
  const yP = useTransform(scrollYProgress, [0, 0.1, 0.2, 1], [3, 2, 1.9, -1.2]);

  return (
    <>
      <ambientLight intensity={0.3} />
      <motion.group ref={model2Ref} position={[0, yP, 0]}>
        <Rabbit
          position={[px, 0, 0]}
          scale={scale}
          rotation={[0, 0, 0]}
          wireframe={false}
        />
      </motion.group>

      <Environment preset="city" />
    </>
  );
}
