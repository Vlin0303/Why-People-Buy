import Link from "next/link";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border">
      <div className="container-wide py-12 flex flex-col md:flex-row items-start md:items-center justify-between gap-8">

        {/* Brand */}
        <div className="flex flex-col gap-1">
          <p className="text-sm font-semibold">Why People Buy</p>
          <p className="text-xs text-muted-foreground max-w-xs">
            A marketing intelligence lab exploring why people choose, love, and stay with brands.
          </p>
        </div>

        {/* Navigation */}
        <nav className="flex flex-col sm:flex-row gap-4 sm:gap-8">
          <Link href="/" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
            Home
          </Link>
          <Link href="/cases" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
            Case Library
          </Link>
          <Link href="/framework" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
            Framework
          </Link>
          <Link href="/about" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
            About
          </Link>
        </nav>

        {/* Copyright */}
        <p className="text-xs text-muted-foreground">
          © {year} Why People Buy
        </p>
      </div>
    </footer>
  );
}
