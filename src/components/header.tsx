"use client";

import { navLinks } from "@/lib/data";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { useState, useEffect } from "react";
import { BurguerButton } from "./burguer-button";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
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
          : "bg-transparent px-4 py-12 lg:px-0",
      )}
    >
      <nav className="wrapper flex items-center justify-between">
        <h1 className="text-4xl font-semibold">
          <Link href="/" aria-label="Ir para o início">
            Refit
          </Link>
        </h1>
        <ul className="hidden items-center gap-12 text-xl font-medium lg:flex">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                aria-label={`Navegar para ${link.label}`}
                className="text-muted transition-opacity duration-200 hover:opacity-80"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger className="lg:hidden" asChild>
            <BurguerButton isOpen={isOpen} />
          </SheetTrigger>
          <SheetContent className="py-8">
            <ul className="flex flex-col items-start gap-12 px-6 text-xl font-medium">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    aria-label={`Navegar para ${link.label}`}
                    className="text-foreground"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </SheetContent>
        </Sheet>
      </nav>
    </header>
  );
};
