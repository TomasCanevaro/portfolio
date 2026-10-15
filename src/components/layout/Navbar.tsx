
import Link from "next/link";
import Container from "./Container";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  return (
    <header className="border-b border-[#30445e]">
      <Container>
        <nav
          aria-label="Main navigation"
          className="flex min-h-20 items-center justify-between gap-6"
        >
          <Link
            href="/"
            className="shrink-0 text-lg font-semibold tracking-tight text-[#e8eef7]"
          >
            Portfolio<span className="text-zinc-500">.</span>
          </Link>

          <div className="flex flex-wrap items-center justify-end gap-x-6 gap-y-2">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="text-sm text-[#a9bad0] transition-colors hover:text-[#e8eef7]"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </nav>
      </Container>
    </header>
  );
}
