"use client";
import Link from "next/link";
import { Container } from "./container";
import { IconArrowRight } from "@tabler/icons-react";
import { motion } from "motion/react";

export const HeroSection = () => {
  return (
    <Container className="pt-50">
      <div className="flex flex-col gap-1.5 items-start justify-center text-6xl tracking-tight font-medium ">
        <motion.span
          initial={{
            opacity: 0,
            filter: "blur(8px)",
            y: 2,
          }}
          animate={{
            opacity: 1,
            filter: "blur(0px)",
            y: 0,
          }}
          transition={{ duration: 0.7, ease: "easeIn" }}
        >
          The product development
        </motion.span>
        <motion.span
          initial={{
            opacity: 0,
            filter: "blur(8px)",
            y: 1,
          }}
          animate={{
            opacity: 1,
            filter: "blur(0px)",
            y: 0,
          }}
          transition={{ duration: 0.72, ease: "easeIn" }}
        >
          system for teams and agents
        </motion.span>
      </div>
      <div className="flex items-center justify-between py-9">
        <motion.p
          initial={{
            opacity: 0,
            filter: "blur(8px)",
            y: 1,
          }}
          animate={{
            opacity: 1,
            filter: "blur(0px)",
            y: 0,
          }}
          transition={{ duration: 0.9, ease: "easeIn", delay: 0.1 }}
          className="text-sm text-neutral-400 tracking-wide"
        >
          Purpose-built for planning and building products. Designed for the AI
          era.
        </motion.p>
        <motion.div
          initial={{
            opacity: 0,
            filter: "blur(8px)",
            y: 1,
          }}
          animate={{
            opacity: 1,
            filter: "blur(0px)",
            y: 0,
          }}
          transition={{ duration: 0.5, ease: "easeIn", delay: 1.5 }}
        >
          <Link
            href="/next"
            className="flex items-center justify-center gap-2 group "
          >
            <div className="relative flex items-center justify-center size-5">
              <span className="absolute inset-0 rounded-full pulse-ring"></span>

              <div className="relative size-4 bg-[#191C2F] rounded-full flex items-center justify-center">
                <div className="size-1.5 bg-[#465bfa] group-hover:bg-[#7A8AFF] rounded-full transition-all duration-300" />
              </div>
            </div>
            <p className="text-neutral-300 group-hover:text-white text-sm font-medium  transition-all duration-300">
              Issue tracking is dead
            </p>
            <p className="flex items-center justify-center gap-1 text-sm text-neutral-500 transition-all duration-300 group-hover:text-neutral-400">
              linear.app/next <IconArrowRight className="size-4" />
            </p>
          </Link>
        </motion.div>
      </div>
    </Container>
  );
};
