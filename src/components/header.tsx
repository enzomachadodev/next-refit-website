import Link from "next/link";

export const Header = () => {
  return (
    <header className="text-background from-foreground/50 fixed top-0 left-0 z-50 w-full bg-gradient-to-b from-20% to-transparent">
      <nav className="wrapper flex items-center justify-between py-12">
        <h1 className="text-3xl font-semibold">
          <Link href="/">Refit</Link>
        </h1>
        <ul className="flex items-center gap-12 text-xl font-medium">
          <li>Sobre</li>
          <li>Serviços</li>
          <li>Portfólio</li>
          <li>Contato</li>
          <li>FAQ</li>
        </ul>
      </nav>
    </header>
  );
};
