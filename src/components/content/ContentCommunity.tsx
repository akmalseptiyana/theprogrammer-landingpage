import HighLight from "@/components/ui/HighLight";
import PrimaryAnchorButton from "@/components/ui/button/PrimaryAnchorButton";

export default function ContentCommunity() {
  return (
    <section className="container mt-40">
      <div className="bg-[#12181d] border-b-4 border-primary p-5 md:p-12">
        <div className="flex flex-wrap gap-x-2">
          <h2 className="text-white max-w-[38.875rem]">
            Join the <HighLight caption="{community}" /> around the world
          </h2>
          <p className="text-white/80 max-w-[26.625rem] mt-5 md:mt-0">
            A custom environment designed especially for developing and
            facilitating React, Vue, Angular, and other.
          </p>
        </div>
        <PrimaryAnchorButton href="#" className="mt-8">
          join community
        </PrimaryAnchorButton>
      </div>
    </section>
  );
}
