"use client";
import { motion } from "framer-motion";
import React, { useState, useEffect } from "react";
import { BsFillMenuButtonWideFill } from "react-icons/bs";
import AnimatedLink from "./AnimatedLink";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";

const links = [
  {
    href: "/",
    name: "HOME",
  },
  {
    href: "/info",
    name: "INFO",
  },
  {
    href: "/about",
    name: "ABout",
  },
];

export default function Header() {
  const [hidden, setHidden] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const header = document.querySelector("header");
      if (header) {
        const headerTop = header.getBoundingClientRect().top;
        setHidden(headerTop > 0);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const pathname = usePathname();

  return (
    <motion.header
      variants={{
        hidden: { backgroundColor: "#00000000" },
        visible: { backgroundColor: "black" },
      }}
      animate={hidden ? "hidden" : "visible"}
      transition={{ duration: 0.2, ease: "easeIn" }}
      className="sticky top-[-1px] mb-[.5rem]  text-white z-50 font-geko"
    >
      <div className="wrap relative py-3 ">
        <motion.div
          className="absolute bottom-0 left-0 w-full h-[1px] bg-primary/85 origin-center"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: hidden ? 0 : 1 }}
          transition={{ duration: 0.5, ease: "easeInOut", delay: 0.1 }}
        />
        <div>
          <Link href="/">
            <Image
              src="/logo.svg"
              alt="logo"
              width={100}
              height={100}
              priority
              style={{ height: 'auto', width: '100px' }}
            />
          </Link>
        </div>
        <motion.div
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1 },
          }}
          animate={hidden ? "hidden" : "visible"}
          transition={{ duration: 0.35, ease: "linear", delay: 0.2 }}
          className={`${hidden ? "md:hidden" : "block"}`}
        >
          <nav className={`hidden md:flex gap-5 text-xl `}>
            {links.map((link, index) => (
              <Link
                key={index}
                href={link.href}
                className={`${pathname === link.href && "link"} uppercase `}
              >
                <AnimatedLink title={link.name} />
              </Link>
            ))}
          </nav>
          <div className="block lg:hidden">
            <BsFillMenuButtonWideFill size={27} />
          </div>
        </motion.div>
      </div>
    </motion.header>
  );
}
