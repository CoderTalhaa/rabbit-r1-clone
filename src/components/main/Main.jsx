import { Canvas } from "@react-three/fiber";
import React, { Suspense, useRef } from "react";
import { Environment, OrbitControls, View } from "@react-three/drei";

import Animations from "../animations/Animations";
import Image from "next/image";
import Section1 from "../sections/Section1";
import Section2 from "../sections/Section2";
import { Leva } from "leva";
import Effects from "../utils/Effects";
import Scene1 from "../three/scenes/Scene1";
import Scene2 from "../three/scenes/Scene2";

export default function Main() {
  const container = useRef();
  const section1 = useRef();
  const section2 = useRef();

  return (
    <>
      <main ref={container}>
        <Leva hidden={false} />
        <Canvas
          shadows
          dpr={[1, 1.5]}
          gl={{ antialias: true }}
          className="canvas"
          camera={{ position: [0, 0, 5], fov: 30 }}
          eventSource={container}
        >
          <Suspense fallback={null}>
            <View track={section1} index={1}>
              <Scene1 />
              {/* <Effects /> */}
            </View>
            <View track={section2} index={2}>
              <Scene2 />
              {/* <Effects /> */}
            </View>
          </Suspense>

          <Animations />
        </Canvas>

        {/* main start */}

        <div className="wrap relative h-[150vh]   border-blue-600 border section1 ">
          <div
            className="sticky top-0 wrap h-screen w-full "
            ref={section1}
          ></div>

          <Section1 />
        </div>

        <div className=" wrap relative h-[200vh] border-yellow-600 border section2 ">
          <div
            className="sticky top-0 h-screen w-full border-2 "
            ref={section2}
          ></div>
          <Section2 />
        </div>
      </main>
    </>
  );
}
