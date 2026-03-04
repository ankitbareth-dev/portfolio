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
    </section>
  );
}
