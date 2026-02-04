"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import SVGLogo from "@/svgs/components/SVGLogo";
import SvgWithGradient from "@/components/ui/SvgWithGradient";

const navItems = [
  { href: "/approche", label: "Approche", number: "01" },
  { href: "/offres", label: "Offres", number: "02" },
  { href: "/a-propos", label: "À propos", number: "03" },
];

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
          isScrolled
            ? "bg-background/80 backdrop-blur-md border-b border-border"
            : "bg-transparent",
        )}
      >
        <div className="max-w-[1280px] mx-auto px-6 md:px-12">
          <nav className="flex items-center justify-between h-16 md:h-20">
            {/* Logo */}
            <Link href="/" className="flex items-center">
              <SvgWithGradient
                svg={SVGLogo}
                colors={[["#203eec", "#00d4ff"]]}
                angle={135}
                className="h-5 w-auto"
              />
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-8">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  {item.label}
                  <span className="text-xs ml-1 opacity-50">
                    ({item.number})
                  </span>
                </Link>
              ))}
            </div>

            {/* CTA Button */}
            <div className="hidden md:block">
              <Link
                href="#contact"
                className="btn-primary inline-flex items-center justify-center px-5 py-2.5 text-sm font-medium rounded-full text-white"
              >
                Me contacter
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(true)}
              className="md:hidden p-2 -mr-2"
              aria-label="Open menu"
            >
              <Menu className="w-5 h-5" />
            </button>
          </nav>
        </div>
      </header>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-50 bg-background md:hidden">
          <div className="flex flex-col h-full p-6">
            <div className="flex items-center justify-between">
              <Link href="/" className="flex items-center">
                <SvgWithGradient
                  svg={SVGLogo}
                  colors={[["#203eec", "#00d4ff"]]}
                  angle={135}
                  className="h-5 w-auto"
                />
              </Link>
              <button
                onClick={() => setIsMobileMenuOpen(false)}
                className="p-2 -mr-2"
                aria-label="Close menu"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            <nav className="flex flex-col gap-6 mt-12">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-3xl font-semibold hover:text-muted-foreground transition-colors"
                >
                  {item.label}
                </Link>
              ))}
            </nav>
            <div className="mt-auto">
              <Link
                href="#contact"
                onClick={() => setIsMobileMenuOpen(false)}
                className="btn-primary inline-flex items-center justify-center w-full px-5 py-3 text-base font-medium rounded-full text-white"
              >
                Me contacter
              </Link>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
