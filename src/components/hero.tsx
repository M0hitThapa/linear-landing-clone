import Link from "next/link";
import { Container } from "./container";

export const HeroSection = () => {
  return (
    <Container className="pt-50">
      <div className="flex flex-col gap-1.5 items-start justify-center text-6xl tracking-tight font-medium ">
        <span>The product development</span>
        <span>system for teams and agents</span>
      </div>
      <div>
        <p>
          Purpose-built for planning and building products. Designed for the AI
          era.
        </p>
      </div>
    </Container>
  );
};
