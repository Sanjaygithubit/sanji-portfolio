import { HeroContent } from "@/components/sub/hero-content";

export const Hero = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen w-full overflow-hidden"
    >
      {/* Background Video */}
      <video
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        className="
         hidden
          md:block
          absolute
          inset-0
          w-full
          h-full
          object-cover
          object-center
          rotate-180
           
          scale-[1.45]
          sm:scale-[1.25]
          md:scale-100

          top-[-120px]
          sm:top-[-180px]
          md:top-[-340px]

          -z-20
        "
      >
        <source src="/videos/blackhole.webm" type="video/webm" />
      </video>
{/* Background */}

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#030014]/10 via-[#030014]/25 to-[#030014] -z-10" />

      {/* Hero Content */}
      <div className="relative z-10">
        <HeroContent />
      </div>
    </section>
  );
};