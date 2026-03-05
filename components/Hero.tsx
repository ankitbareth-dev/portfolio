import VerticalTechBars from "./VerticalTechBars";

export default function HeroSection() {
  return (
    <section className="relative h-screen w-full overflow-hidden">
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

        <div
          className="absolute inset-0"
          style={{
            background: `
              linear-gradient(90deg, rgba(0,0,0,0.65) 0%, rgba(0,0,0,0.1) 50%, rgba(0,0,0,0.65) 100%),
              linear-gradient(180deg, rgba(2,3,8,0.9) 0%, rgba(0,0,0,0) 50%, rgba(0,0,0,0.9) 100%)
            `,
          }}
        />
      </div>

      {/* TEXT CONTENT */}
      <div className="relative z-20 flex h-full w-full flex-col items-center justify-start pt-40 px-6 md:pt-25">
        <div className="max-w-4xl text-center">
          {/* Heading */}
          <h1 className="text-3xl md:text-5xl font-semibold text-white leading-tight tracking-tight">
            Front-End Developer, Crafting
            <br />
            <span className="text-neutral-200 text-2xl md:text-4xl font-medium block mt-2">
              Scalable, Modern Web Applications
            </span>
          </h1>
        </div>
      </div>
    </section>
  );
}
