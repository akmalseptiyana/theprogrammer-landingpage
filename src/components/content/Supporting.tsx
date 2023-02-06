import Image from "next/image";

export default function Supporting() {
  return (
    <section className="container mt-[11.5rem]">
      <p className="text-white/[0.56] text-[0.9375rem] leading-[1.2188rem] text-center uppercase">
        Providing power to the world's best product teams.
      </p>
      <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-20 lg:justify-between mt-12">
        <figure>
          <Image src="/epicdev.svg" alt="EpicDev" width={143.65} height={40} />
        </figure>
        <figure>
          <Image
            src="/databites.svg"
            alt="dataBites"
            width={167.66}
            height={40}
          />
        </figure>
        <figure>
          <Image src="/starsup.svg" alt="starsup" width={169.39} height={40} />
        </figure>
        <figure>
          <Image src="/exdone.svg" alt="ExDone" width={173.25} height={40} />
        </figure>
        <figure>
          <Image src="/selfast.svg" alt="selfast" width={141.74} height={40} />
        </figure>
      </div>
    </section>
  );
}
