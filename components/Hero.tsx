import VerticalTechBars from "./VerticalTechBars";

export default function HeroSection() {
  return (
    <section className="relative h-screen w-full overflow-hidden">
      <div
        className="absolute inset-0 z-0"
        style={{
          background: "var(--hero-bg-gradient)",
          boxShadow: "inset 0 1px 0 rgba(255, 255, 255, 0.05)",
        }}
      >
        <VerticalTechBars />

        <div
          className="absolute inset-0"
          style={{
            background: "var(--hero-overlay-gradient)",
          }}
        />
      </div>

      <div className="relative z-20 flex h-full w-full flex-col items-center justify-start pt-26 px-6 md:pt-25">
        <div className="max-w-4xl text-center">
          <h1 className="font-semibold text-foreground leading-tight tracking-tight">
            <span className="block whitespace-nowrap text-[clamp(1.8rem,3.5vw,3rem)]">
              Front-End Developer, Crafting
            </span>

            <span className="block mt-2 whitespace-nowrap text-muted-foreground font-medium text-[clamp(1.3rem,2.6vw,2.25rem)]">
              Scalable, Modern Web Applications
            </span>
          </h1>
        </div>
      </div>
    </section>
  );
}
