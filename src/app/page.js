"use client";
import LoadingScreen from "@/components/utils/LoadingScreen";
import Main from "@/components/main/Main";
import useModelStore from "@/store/useStore";
import { useProgress } from "@react-three/drei";
import { AnimatePresence } from "framer-motion";
import Lenis from "lenis";
import React, { useEffect, useState } from "react";
import Cursor from "@/components/utils/Cursor";
import { useMediaQuery } from "@/hooks/useMediaQuery";
import SvgReveal from "@/components/utils/SvgReveal";

export default function Home() {
  const [isloading, setIsLoading] = useState(true);
  const [loadMain, setLoadMain] = useState(false);
  const { progress } = useProgress();

  const isDesktop = useMediaQuery("(min-width: 768px)", true);

  const { anim } = useModelStore();

  useEffect(() => {
    const lenis = new Lenis({});

    lenis.stop();

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    if (progress === 100) {
      handleLoading(lenis);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, [progress]);

  const handleLoading = (lenis) => {
    setTimeout(() => {
      setIsLoading(false);
      lenis.start();
      window.scrollTo(0, 0);
    }, 1000);
  };
  return (
    <>
      {isDesktop && <Cursor />}

      <AnimatePresence mode="wait">
        {isloading && <LoadingScreen progress={progress} />}
      </AnimatePresence>
      {!isloading && <SvgReveal setLoadMain={setLoadMain} />}

      <div className="absolute top-0 left-0 w-full h-screen -z-[1]  videobg">
        <video
          className="w-full h-full object-cover"
          src="rabbits_fact.mp4"
          preload="metadata"
          autoPlay
          loop
          muted
          playsInline
          loading="lazy"
        ></video>
      </div>

      {loadMain && <Main />}
    </>
  );
}
