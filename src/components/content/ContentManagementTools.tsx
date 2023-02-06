import Image from "next/image";

import HighLight from "@/components/ui/HighLight";
import PrimaryButton from "@/components/ui/button/PrimaryButton";
import SecondaryButton from "@/components/ui/button/SecondaryButton";

export default function ContentManagementTools() {
  return (
    <section className="relative container mt-[13.5rem]">
      <h2 className="text-white max-w-[65rem]">
        Circle provides teams and individuals with customizable{" "}
        <HighLight caption="{management tools}" /> for your source code.
      </h2>
      <p className="text-white/80 mt-5 md:mt-12 max-w-[30rem]">
        Create issues, sections into tasks, track relationships, add custom
        spaces, and initiate discussions. Visualize large projects with
        spreadsheets or codeboards, and use the help of code systems to automate
        everything.
      </p>
      <figure className="mt-10 xl:absolute xl:top-40 xl:-right-16">
        <Image
          src="/html-code.svg"
          alt="html code"
          width={847.87}
          height={368}
        />
      </figure>
      <div className="flex items-center gap-x-4 mt-8">
        <PrimaryButton>watch a video</PrimaryButton>
        <SecondaryButton className="btn-shadow">get a demo</SecondaryButton>
      </div>
    </section>
  );
}
