import Image from "next/image";

export const HeroContentSection = () => {
  return (
    <div className="p-1.5 ">
      <div className="relative h-225 w-full overflow-hidden selection:bg-red-500 rounded-md">
        <Image
          src="/linear-bg.png"
          alt="linear-bg"
          fill
          className="object-cover object-center scale-[3.5] relative pointer-events-none   "
        />
        <div className="absolute">Hello</div>
      </div>
    </div>
  );
};
