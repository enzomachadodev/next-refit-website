import {
  Send,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Sun,
  Moon,
} from "lucide-react";
import React from "react";
import { Button } from "./ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "./ui/tooltip";

export const Footer = () => {
  return (
    <footer className="dark bg-background text-foreground relative border-t transition-colors duration-300">
      <div className="wrapper pt-12 pb-8">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          <div className="relative">
            <h2 className="mb-4 text-3xl font-bold tracking-tight">Refit</h2>
            <p className="text-muted-foreground mb-6">
              Transforme Seu Espaço com Projetos que Inspiram
            </p>
          </div>
          <div>
            <h3 className="mb-4 text-lg font-semibold">Navegação</h3>
            <nav className="space-y-2 text-sm">
              <a
                href="#"
                className="hover:text-primary block transition-colors"
              >
                Início
              </a>
              <a
                href="#"
                className="hover:text-primary block transition-colors"
              >
                Sobre
              </a>
              <a
                href="#"
                className="hover:text-primary block transition-colors"
              >
                Serviços
              </a>
              <a
                href="#"
                className="hover:text-primary block transition-colors"
              >
                Portfólio
              </a>
              <a
                href="#"
                className="hover:text-primary block transition-colors"
              >
                Contato
              </a>
            </nav>
          </div>
          <div>
            <h3 className="mb-4 text-lg font-semibold">Entre em Contato</h3>
            <address className="space-y-2 text-sm not-italic">
              <p>123 Rua da Consolação</p>
              <p>São Paulo, SP - 01153 000</p>
              <p>Telefone: +55 (31) 99876 - 5432</p>
              <p>Email: contato@refit.com.br</p>
            </address>
          </div>
          <div className="relative">
            <h3 className="mb-4 text-lg font-semibold">Redes Sociais</h3>
            <div className="mb-6 flex space-x-4">
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button
                      variant="outline"
                      size="icon"
                      className="dark rounded-full"
                    >
                      <Facebook className="h-4 w-4" />
                      <span className="sr-only">Facebook</span>
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Facebook</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button
                      variant="outline"
                      size="icon"
                      className="dark rounded-full"
                    >
                      <Twitter className="h-4 w-4" />
                      <span className="sr-only">Twitter</span>
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Twitter</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button
                      variant="outline"
                      size="icon"
                      className="dark rounded-full"
                    >
                      <Instagram className="h-4 w-4" />
                      <span className="sr-only">Instagram</span>
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Instagram</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button
                      variant="outline"
                      size="icon"
                      className="dark rounded-full"
                    >
                      <Linkedin className="h-4 w-4" />
                      <span className="sr-only">LinkedIn</span>
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>LinkedIn</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </div>
          </div>
        </div>
        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t pt-8 text-center md:flex-row">
          <p className="text-muted-foreground text-sm">
            © 2024 Refit. Todos os direitos reservados.
          </p>
          <nav className="flex gap-4 text-sm">
            <a href="#" className="hover:text-primary transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-primary transition-colors">
              Terms of Service
            </a>
            <a href="#" className="hover:text-primary transition-colors">
              Cookie Settings
            </a>
          </nav>
        </div>
      </div>
    </footer>
  );
};
