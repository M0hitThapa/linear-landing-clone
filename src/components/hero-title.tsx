import Link from "next/link";
import { Container } from "./container";
import { IconArrowRight } from "@tabler/icons-react";

export const HeroSection = () => {
  return (
    <Container className="pt-50">
      <div className="flex flex-col gap-1.5 items-start justify-center text-6xl tracking-tight font-medium ">
        <span>The product development</span>
        <span>system for teams and agents</span>
      </div>
      <div className="flex items-center justify-between py-9">
        <p className="text-sm text-neutral-400 tracking-wide">
          Purpose-built for planning and building products. Designed for the AI
          era.
        </p>
        <Link
          href="/next"
          className="flex items-center justify-center gap-2 group "
        >
          <div className="relative flex items-center justify-center size-5">
            <span className="absolute inset-0 rounded-full pulse-ring"></span>

            <div className="relative size-5 bg-[#191C2F] rounded-full flex items-center justify-center">
              <div className="size-2 bg-[#465bfa] group-hover:bg-[#7A8AFF] rounded-full transition-all duration-300" />
            </div>
          </div>
          <p className="text-neutral-300 group-hover:text-white text-sm font-medium  transition-all duration-300">
            Issue tracking is dead
          </p>
          <p className="flex items-center justify-center gap-1 text-sm text-neutral-500 transition-all duration-300 group-hover:text-neutral-400">
            linear.app/next <IconArrowRight className="size-4" />
          </p>
        </Link>
      </div>
    </Container>
  );
};
