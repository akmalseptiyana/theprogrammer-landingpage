import Image from "next/image";

import HighLight from "@/components/ui/HighLight";
import PrimaryAnchorButton from "@/components/ui/button/PrimaryAnchorButton";

export default function ContentLargerIssues() {
  return (
    <section className="container mt-[14.375rem]">
      <h2 className="text-white text-center">
        Concentrate on <HighLight caption="{larger}" /> issues.
      </h2>
      <p className="text-white/80 text-center mt-6 max-w-[41.5rem] mx-auto">
        Spend less time on repetitive code patterns and more time on what really
        matters building great software.
      </p>
      <div className="flex flex-wrap justify-center gap-10 mt-12">
        <div className="relative w-[34.75rem] h-[35.5rem] px-8 py-10 card-gradient">
          <h3 className="text-white">
            Get customized AI-based recommendations.
          </h3>
          <p className="text-white/80 mt-4">
            Get customized AI-based recommendations. A custom environment
            designed especially for developing and facilitating React, Vue,
            Angular, and other frameworks.
          </p>
          <PrimaryAnchorButton href="#" className="mt-8">
            read more
          </PrimaryAnchorButton>
          <figure className="absolute bottom-0">
            <Image
              src="/supporting-graphic-1.svg"
              alt="frame"
              width={492}
              height={209}
            />
          </figure>
        </div>
        <div className="relative w-[34.75rem] h-[35.5rem] px-8 py-10 card-gradient">
          <h3 className="text-white">
            Help of plugins and source code templates.
          </h3>
          <p className="text-white/80 mt-4">
            Get customized AI-based recommendations. A custom environment
            designed especially for developing and facilitating React, Vue,
            Angular, and other frameworks.
          </p>
          <PrimaryAnchorButton href="#" className="mt-8">
            read more
          </PrimaryAnchorButton>
          <figure className="absolute bottom-0">
            <Image
              src="/supporting-graphic-2.svg"
              alt="code"
              width={492}
              height={209}
            />
          </figure>
        </div>
      </div>
    </section>
  );
}
