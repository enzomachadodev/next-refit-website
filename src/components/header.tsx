"use client";

import { navLinks } from "@/lib/data";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { useState, useEffect } from "react";

export const Header = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const isScrolled = scrollY > 0;

  return (
    <header
      className={cn(
        "text-background border-muted/10 fixed top-0 left-0 z-50 w-full transition-all duration-300",
        isScrolled
          ? "dark bg-foreground/80 border-b py-6 backdrop-blur-md"
          : "bg-transparent py-12",
      )}
    >
      <nav className="wrapper flex items-center justify-between">
        <h1 className="text-4xl font-semibold">
          <Link href="/">Refit</Link>
        </h1>
        <ul className="flex items-center gap-12 text-xl font-medium">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="text-muted transition-opacity duration-200 hover:opacity-80"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};
