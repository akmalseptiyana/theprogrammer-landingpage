import Image from "next/image";

import HighLight from "@/components/ui/HighLight";
import PrimaryAnchorButton from "@/components/ui/button/PrimaryAnchorButton";

export default function ContentFullstack() {
  return (
    <section className="container mt-40">
      <div className="flex flex-wrap items-center justify-between">
        <div className="max-w-[41.1875rem]">
          <h2 className="text-white">
            Finally you can develop <HighLight caption="{full-stack}" /> web
            applications in one place.
          </h2>
          <p className="text-white/80 mt-5 md:mt-10">
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
            sint. Velit officia consequat duis enim velit mollit. Exercitation
            veniam consequat sunt nostrud ame
          </p>
        </div>
        <figure className="mt-20 xl:mt-0">
          <Image
            src="/code.svg"
            alt="code"
            width={445}
            height={403}
            className="drop-shadow-[0_0_266.185px_rgba(132,236,142,0.6)]"
          />
        </figure>
      </div>

      <div className="mt-[13.5rem]">
        <div className="flex flex-col justify-center md:flex-row">
          <div className="w-full py-10 px-8 bg-[#0A1319] border-b-4 border-primary md:w-2/4">
            <h3 className="text-white">Optimized Frameworks</h3>
            <p className="text-white/80 mt-2">
              A custom environment designed especially for developing and
              facilitating React, Vue, Angular, and other.
            </p>
            <PrimaryAnchorButton href="#" className="mt-8">
              read more
            </PrimaryAnchorButton>
          </div>
          <div className="w-full py-10 px-8 md:w-2/4">
            <h3 className="text-white">Integrated with GitHub</h3>
            <p className="text-white/80 mt-2">
              Import and run GitHub repositories directly. Alternatively, you
              can commit your source code to a repository.
            </p>
            <PrimaryAnchorButton href="#" className="mt-8">
              read more
            </PrimaryAnchorButton>
          </div>
        </div>

        <PrimaryAnchorButton href="/services" className="mt-12">
          explore more services
        </PrimaryAnchorButton>
      </div>
    </section>
  );
}
