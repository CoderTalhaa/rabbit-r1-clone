import React, { useEffect, useRef, useState } from "react";
import gsap, { Power2 } from "gsap";

const SvgReveal = ({ setLoadMain }) => {
  const container = useRef(null);
  const svgRef = useRef(null);
  const [radius, setRadius] = useState(0);

  const initialRadius = 80;

  const figureRadius = (w, h) => Math.sqrt(Math.pow(w, 2) + Math.pow(h, 2)) / 2;

  const figureMask = () => {
    const svgElement = svgRef.current.querySelector("#goAway").getBBox();
    const r = figureRadius(svgElement.width, svgElement.height);
    setRadius(r);
  };

  useEffect(() => {
    figureMask();

    window.addEventListener("resize", figureMask);

    return () => {
      window.removeEventListener("resize", figureMask);
    };
  }, []);

  useEffect(() => {
    if (radius > 0) {
      // Start animation from initialRadius to calculated full radius
      gsap.fromTo(
        "#cover",
        { attr: { r: initialRadius } }, // Start with a small circle
        {
          attr: { r: radius }, // Expand to full screen
          ease: Power2.easeInOut,
          duration: 1,
          delay: 1,
          onComplete: () => {
            gsap.set(container.current, { display: "none" });
            setLoadMain(true);
          },
        }
      );
    }
  }, [radius]);

  return (
    <div
      className="h-screen w-full fixed top-0 left-0 z-10 pointer-events-none"
      ref={container}
    >
      <svg
        id="demo"
        ref={svgRef}
        xmlns="http://www.w3.org/2000/svg"
        width="100%"
        height="100%"
      >
        <defs>
          <mask id="theMask">
            <rect x="0" y="0" width="100%" height="100%" fill="#fff" />
            <circle id="cover" r="0" fill="black" cx="50%" cy="50%" />
          </mask>
        </defs>

        <g mask="url(#theMask)">
          <rect
            id="goAway"
            x="0"
            y="0"
            width="100%"
            height="100%"
            fill="#000"
          />
        </g>
      </svg>
    </div>
  );
};

export default SvgReveal;
