// SvgLine.js
import React, { useEffect, useRef } from "react";
import useModelStore from "@/store/useStore";

export default function SvgLine() {
  const path = useRef(null);
  const boxRef = useRef(null);
  let progress = 0;
  let x = 0.5;
  let time = Math.PI / 2;
  let reqId = null;

  const cursorPosition = useModelStore((state) => state.cursorPosition);

  useEffect(() => {
    setPath(progress);
  }, []);

  useEffect(() => {
    if (boxRef.current) {
      const { left, top, right, bottom } =
        boxRef.current.getBoundingClientRect();
      if (
        cursorPosition.x >= left &&
        cursorPosition.x <= right &&
        cursorPosition.y >= top &&
        cursorPosition.y <= bottom
      ) {
        handleMouseMove(cursorPosition);
      } else {
        handleMouseLeave();
      }
    }
  }, [cursorPosition]);

  const setPath = (progress) => {
    const width = window.innerWidth * 1;
    path.current.setAttributeNS(
      null,
      "d",
      `M0 50 Q${width * x} ${50 + progress}, ${width} 50`
    );
  };

  const lerp = (x, y, a) => x * (1 - a) + y * a;

  const handleMouseMove = (position) => {
    const { x: clientX, y: clientY } = cursorPosition;
    const pathBound = path.current.getBoundingClientRect();
    x = (clientX - pathBound.left) / pathBound.width;
    progress += clientY - pathBound.top - 50;
    setPath(progress);
  };

  const handleMouseLeave = () => {
    animateOut();
  };

  const animateOut = () => {
    const newProgress = progress * Math.sin(time);
    progress = lerp(progress, 0, 0.025);
    time += 0.2;
    setPath(newProgress);
    if (Math.abs(progress) > 0.75) {
      reqId = requestAnimationFrame(animateOut);
    } else {
      resetAnimation();
    }
  };

  const resetAnimation = () => {
    time = Math.PI / 2;
    progress = 0;
  };

  return (
    <div className="line">
      <div ref={boxRef} className="box"></div>
      <svg>
        <path ref={path}></path>
      </svg>
    </div>
  );
}
