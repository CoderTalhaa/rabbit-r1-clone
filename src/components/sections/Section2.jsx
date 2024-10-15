import useModelStore from "@/store/useStore";
import Image from "next/image";
import React, { useEffect, useRef } from "react";
import SvgLine from "../utils/SvgLine";

export default function Section2() {
  const { cursorPosition } = useModelStore();

  return (
    <>
      <div className="absolute top-0 w-full ">
        <SvgLine />
        <div className="flex flex-col flex-wrap w-[700px]">
          <h1 className="text-3xl lg:text-7xl  font-geko pt-10 pb-2 text1">
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
      </div>
    </>
  );
}
