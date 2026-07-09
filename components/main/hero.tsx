import { HeroContent } from "@/components/sub/hero-content";

export const Hero = () => {
  return (
    <section
      id="home"
      className="relative flex min-h-screen w-full items-center justify-center overflow-hidden"
    >
      {/* Background Video */}
      <video
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        className="
          absolute
          left-0
          top-[-180px]
          md:top-[-340px]
          h-full
          w-full
          rotate-180
          object-cover
          -z-20
          opacity-90
        "
      >
        <source src="/videos/blackhole.webm" type="video/webm" />
      </video>

      {/* Overlay */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-[#030014]/10 via-[#030014]/20 to-[#030014]" />

      {/* Hero Content */}
      <div className="relative z-10 w-full">
        <HeroContent />
      </div>
    </section>
  );
};