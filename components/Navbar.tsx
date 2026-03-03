import Link from "next/link";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Projects", href: "/projects" },
  { name: "Contact", href: "/contact" },
];

export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <div className="max-w-7xl mx-auto px-6 h-20 grid grid-cols-3 items-center">
        {/* Left Side - Logo */}
        <Link
          href="/"
          className="font-display text-xl font-bold text-foreground justify-self-start hover:text-primary transition-colors"
        >
          Code World
        </Link>

        {/* Center - Pill Navigation Bar */}
        {/* Added a container with rounded-full, border, and background to create the "Pill" look */}
        <nav className="justify-self-center flex items-center gap-1 px-2 py-1.5 rounded-full border border-border bg-surface/80 backdrop-blur-sm">
          {navLinks.map((link) => {
            const isActive = link.name === "About";

            return (
              <Link
                key={link.name}
                href={link.href}
                className={`px-4 py-1.5 text-sm font-medium rounded-full transition-colors ${
                  isActive
                    ? "text-primary" // Purple text for active state
                    : "text-muted hover:text-foreground"
                }`}
              >
                {link.name}
              </Link>
            );
          })}
        </nav>

        {/* Right Side - Hire Me Button */}
        <div className="justify-self-end">
          <Link
            href="/contact"
            className="px-5 py-2 text-sm font-semibold rounded-full bg-primary text-primary-foreground hover:opacity-90 transition-opacity"
          >
            Hire Me
          </Link>
        </div>
      </div>
    </header>
  );
}
