import useModelStore from "@/store/useStore";
import { motion, useAnimation, useInView } from "framer-motion";
import Image from "next/image";
import React, { useEffect, useRef } from "react";
import Marquee from "react-fast-marquee";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import gsap from "gsap";
import SplitType from "split-type";

gsap.registerPlugin(ScrollTrigger);

export default function Section1() {
  const { light, setLight, cursorPosition } = useModelStore();

  const textRef = useRef();
  const textRef2 = useRef();
  const textRef3 = useRef();

  useEffect(() => {
    if (!textRef.current) return;
    const text1split = new SplitType(textRef.current, { types: "words" });
    const text1splitwords = text1split.words;

    const text3split = new SplitType(textRef3.current, { types: "words" });
    const text3splitwords = text3split.words;

    gsap.set(text1splitwords, {
      opacity: 0,
      filter: "blur(8px)",
      willChange: "opacity, filter, transform",
    });

    gsap.set(text3splitwords, {
      perspective: 1000,
      transformStyle: "preserve-3d",
    });

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: textRef.current,
        start: "top bottom-=25%",
        end: "bottom top+=35%",
        toggleActions: "play none none none",
        // markers: true,
      },
    });

    //! text ref 1 animation

    tl.to(text1splitwords, {
      opacity: 1,
      filter: "blur(0px)",
      stagger: 0.1,
      duration: 1,
      ease: "sine.out",
    });

    //! text ref 2 animation

    tl.fromTo(
      textRef2.current,
      { x: -100, opacity: 0 },
      { x: 0, opacity: 1, duration: 1, ease: "back.inOut" },
      "-0.2"
    );

    //! text ref 3 animation

    tl.fromTo(
      text3splitwords,
      {
        opacity: 0,
        rotationX: 90,
        z: -300,
        skewX: 15,
        y: 100,
      },
      {
        opacity: 1,
        rotationX: 0,
        z: 0,
        skewX: 0,
        y: 0,
        duration: 0.7,
        ease: "power4.out",
        stagger: {
          amount: 0.8,
          from: "random",
        },
      },
      "-0.2"
    );

    return () => {
      tl.kill();
      text1split.revert();
      text3split.revert();
    };
  }, []);

  return (
    <div className="absolute top-0 w-full   ">
      <div className=" flex flex-col flex-wrap w-[700px] mt-20 ">
        <Image
          src="/r1.webp"
          alt="sda"
          width={100}
          height={100}
          className="imageR1"
        />
        <h1 className="text-3xl lg:text-6xl font-geko pt-10 pb-2 text1">
          your pocket companion
        </h1>
        <h1 className="text-3xl lg:text-6xl font-geko flex items-center text-center gap-1 flex-wrap text2">
          powered by{" "}
          <span className="imageOs">
            <Image
              src="./logo-os-light.svg"
              alt="logo"
              width={200}
              height={100}
              priority
            />
          </span>
        </h1>
      </div>
      <button
        className={`cta ${light ? "cta-active" : ""}`}
        onClick={() => setLight(true)}
      >
        <span className="font-geko">Light</span>
        <svg width="15px" height="10px" viewBox="0 0 13 10">
          <path d="M1,5 L11,5"></path>
          <polyline points="8 1 12 5 8 9"></polyline>
        </svg>
      </button>

      <Carosel />

      <div className="mt-20  flex flex-wrap flex-col ">
        <h1
          ref={textRef}
          className="lg:w-[700px] w-60 font-geko lg:text-6xl text-xl"
        >
          shaping the future of human-machine interaction{" "}
        </h1>
        <p ref={textRef2} className="lg:text-xl font-secondary mt-10">
          our efforts to make agentic AI accessible today{" "}
        </p>
        <h1
          ref={textRef3}
          className="lg:w-[700px]  font-primary lg:text-6xl text-xl mt-10"
        >
          hop around and find out
        </h1>
        <div className="flex justify-between mt-10 gap-2">
          <motion.div
            className="w-28 lg:w-auto "
            style={{
              rotateX: cursorPosition.x / 20,
              rotateY: cursorPosition.y / -20,
            }}
          >
            <Image
              unoptimized
              src="/rabbitlp.gif"
              alt="hope on"
              width={200}
              height={100}
            />
          </motion.div>
          <div className="flex-1 lg:block hidden">
            <Reveal>
              <p className="w-[500px] font-secondary ">
                rabbit is growing everyday and so are the rabbits. the hares in
                the LAM playground today might not do everything perfectly, but
                they are taking a solid hop from 0 to 1 on websites.
              </p>
            </Reveal>
            <br />
            <Reveal>
              <p className="w-[500px] font-secondary">
                we are so proud to have gathered an enthusiastic and likeminded
                community through the launch of r1. the most important thing is
                to improve as quickly as possible
              </p>
            </Reveal>
          </div>
        </div>
      </div>
    </div>
  );
}

const Carosel = () => {
  const words = [
    {
      icon: "@",
      name: "Google",
    },
    {
      icon: "@",
      name: "microsoft",
    },
    {
      icon: "@",
      name: "navidia",
    },
    {
      icon: "@",
      name: "rabbit",
    },
    {
      icon: "@",
      name: "tesla",
    },
    {
      icon: "@",
      name: "spaceX",
    },
    {
      icon: "@",
      name: "AMD",
    },
    {
      icon: "@",
      name: "Iphone",
    },
    {
      icon: "@",
      name: "Goku",
    },
  ];

  return (
    <div className="w-full mt-60 flex">
      <Marquee gradient={true} gradientWidth={100} gradientColor="black">
        {words.map((word, i) => {
          return (
            <div key={i} className="px-10">
              <h1 className="font-primary text-lg text-white/45">
                <span>{word.icon}</span> {word.name}
              </h1>
            </div>
          );
        })}
      </Marquee>
    </div>
  );
};

const Reveal = ({ children, width = "fit-content" }) => {
  const ref = useRef();

  const isInView = useInView(ref, { once: true });

  const opacityAnimation = useAnimation();
  const slideAnimation = useAnimation();

  useEffect(() => {
    if (isInView) {
      opacityAnimation.start("visible");
      slideAnimation.start("visible");
    }
  }, [isInView]);

  return (
    <div ref={ref} style={{ position: "relative", width, overflow: "hidden" }}>
      <motion.div
        variants={{
          hidden: { opacity: 0, y: 75 },
          visible: { opacity: 1, y: 0 },
        }}
        initial="hidden"
        animate={opacityAnimation}
        transition={{ duration: 0.5, delay: 0.25 }}
      >
        {children}
      </motion.div>
      <motion.div
        variants={{
          hidden: { left: 0 },
          visible: { left: "100%" },
        }}
        initial="hidden"
        animate={slideAnimation}
        transition={{ duration: 0.5, ease: "easeIn" }}
        style={{
          position: "absolute",
          top: 4,
          bottom: 4,
          left: 0,
          right: 0,
          background: "#ff4d00",
          zIndex: 20,
        }}
      ></motion.div>
    </div>
  );
};
