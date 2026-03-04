import VerticalTechBars from "./VerticalTechBars";

export default function HeroSection() {
  return (
    // Full screen width and height, no padding
    <section className="relative h-screen w-full overflow-hidden">
      {/* Background Container */}
      <div
        className="absolute inset-0 z-0"
        style={{
          background: `
            radial-gradient(130% 100% at 50% 105%, rgba(75, 83, 255, 0.25) 0%, rgba(7, 8, 19, 0.05) 52%, rgba(6, 7, 12, 0) 100%),
            linear-gradient(180deg, #06070e 0%, #02030a 100%)
          `,
          boxShadow: "inset 0 1px 0 rgba(255, 255, 255, 0.05)",
        }}
      >
        <VerticalTechBars />

        {/* Overlay Gradient */}
        <div
          className="absolute inset-0"
          style={{
            background: `
              linear-gradient(90deg, rgba(0, 0, 0, 0.65) 0%, rgba(0, 0, 0, 0.1) 50%, rgba(0, 0, 0, 0.65) 100%),
              linear-gradient(180deg, rgba(2, 3, 8, 0.9) 0%, rgba(0, 0, 0, 0) 30%, rgba(0, 0, 0, 0.5) 100%)
            `,
          }}
        />
      </div>

      {/* Content Container - Centered */}
      <div className="relative z-20 mx-auto flex h-full max-w-5xl flex-col items-center justify-center px-6 text-center">
        <h1 className="font-display text-4xl sm:text-5xl md:text-[56px] font-medium leading-[1.15] tracking-tight text-white text-balance">
          Full-Stack Developer Crafting
          <br />
          Scalable, Modern Web Applications
        </h1>

        <p className="mt-8 md:mt-10 max-w-2xl text-base md:text-[17px] leading-relaxed tracking-tight text-white/50 font-display">
          I specialize in building end-to-end web solutions combining clean,
          intuitive front-end experiences with reliable, high-performance
          back-end systems that scale with real-world use.
        </p>

        <button
          className="mt-10 md:mt-12 rounded-full border border-white/25 px-8 py-3 md:px-10 md:py-3.5 text-base md:text-lg font-semibold text-white transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-primary/20 active:scale-100 font-display"
          style={{
            background: "linear-gradient(180deg, #8084ff 0%, #4b4ef5 100%)",
            boxShadow:
              "inset 0 1px 1px rgba(255, 255, 255, 0.35), 0 10px 25px rgba(75, 78, 245, 0.3)",
          }}
        >
          Let&apos;s Build Something
        </button>
      </div>
    </section>
  );
}
