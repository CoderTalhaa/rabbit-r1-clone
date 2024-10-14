import Image from "next/image";
import React from "react";

export default function Section2() {
  return (
    <div className="absolute top-0 w-full flex flex-wrap">
      <div className="flex flex-col flex-wrap w-[700px]">
        <Image
          src="/r1.webp"
          alt="sda"
          width={100}
          height={100}
          className="imageR1"
        />
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
  );
}
