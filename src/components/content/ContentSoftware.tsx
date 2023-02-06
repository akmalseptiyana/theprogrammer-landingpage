import Image from "next/image";

import HighLight from "@/components/ui/HighLight";
import PrimaryButton from "../ui/button/PrimaryButton";

export default function ContentSoftware() {
  return (
    <section className="mt-40 xl:mt-[24.75rem]">
      <h2 className="text-white text-center max-w-[39.75rem] mx-auto px-6 md:px-0">
        Useful <HighLight caption="{software}" /> that can assist.
      </h2>
      <figure className="relative mt-12">
        <div className="w-20 h-20 shades-software opacity-80 absolute top-0 left-0 md:w-[20.75rem] md:h-[21.625rem]" />
        <Image src="/Logos.svg" alt="Logos" width={1880} height={240} />
        <div className="w-20 h-20 shades-software opacity-80 absolute top-0 right-0 matrix md:w-[20.75rem] md:h-[21.625rem]" />
      </figure>
      <PrimaryButton className="mx-auto mt-12">see full software</PrimaryButton>
    </section>
  );
}
