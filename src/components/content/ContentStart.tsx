import Image from "next/image";

import HighLight from "@/components/ui/HighLight";
import PrimaryButton from "@/components/ui/button/PrimaryButton";
import SecondaryButton from "@/components/ui/button/SecondaryButton";

export default function ContentStart() {
  return (
    <section className="container mt-[6.5rem]">
      <div className="flex flex-col items-center justify-between lg:flex-row">
        <h1 className="text-white flex-1">
          Expert Developers for a Connected <HighLight caption="{World}" />
        </h1>
        <SecondaryButton className="mt-5 ml-auto" withIcon>
          get a demo
        </SecondaryButton>
      </div>
      <div className="flex flex-col items-start gap-x-16 mt-20 md:flex-row md:items-center md:mt-14">
        <PrimaryButton>watch a video</PrimaryButton>
        <p className="text-white flex-1 mt-4 md:mt-0">
          Circle is a code development platform that gives innovators the speed
          and reliability they need to create at the speed of inspiration.
        </p>
      </div>
      <figure className="relative mt-10 md:mt-[7.875rem]">
        <Image
          src="/hero-illustration.svg"
          alt="Code Illustration"
          width={1440}
          height={660}
          quality={90}
        />
        <div className="w-full h-full shades opacity-80 absolute top-12" />
      </figure>
    </section>
  );
}
