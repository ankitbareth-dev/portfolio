import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />

      <main className="pt-20">
        {/* Hero Section matches the screenshot layout */}
        <div className="flex flex-col items-center justify-center min-h-[calc(100vh-5rem)] text-center px-6">
          <h1 className="font-display text-5xl md:text-7xl font-bold tracking-tight leading-tight">
            Full-Stack Developer
          </h1>

          <p className="mt-4 text-muted text-lg md:text-xl max-w-2xl">
            Crafting Scalable, Modern Web Applications
          </p>

          <button className="mt-8 bg-primary text-primary-foreground px-8 py-3 rounded-full text-base font-medium hover:opacity-90 transition-opacity shadow-lg shadow-primary/20">
            Lets Build Something
          </button>
        </div>
      </main>
    </div>
  );
}
