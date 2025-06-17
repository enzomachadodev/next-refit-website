import {
  SiInstagram,
  SiWhatsapp,
  SiFacebook,
  SiX,
} from "@icons-pack/react-simple-icons";
import { SectionTitle } from "./section-title";
import {
  TooltipProvider,
  Tooltip,
  TooltipTrigger,
  TooltipContent,
} from "./ui/tooltip";
import { Button } from "./ui/button";
import { ContactForm } from "./contact-form";

export const Contact = () => {
  return (
    <section id="contato" className="section-container">
      <div className="wrapper">
        <div className="bg-foreground text-background grid w-full grid-cols-1 gap-14 rounded-2xl px-5 py-10 lg:grid-cols-2">
          <div className="col-span-1 flex flex-col gap-10">
            <SectionTitle
              eyebrow="Contato"
              title="Vamos conversar?"
              description="Estamos prontos para transformar suas ideias em realidade. Entre em contato e vamos juntos criar algo incrível!"
              className="dark mb-4 items-start text-start"
            />
            <div className="space-y-5">
              <div className="flex flex-col justify-between text-lg md:flex-row">
                <p className="font-semibold">Localização</p>
                <p className="text-muted">
                  Rua Oscar Freire, 984, Jardim Paulista, São Paulo - SP
                </p>
              </div>
              <div className="flex flex-col justify-between text-lg md:flex-row">
                <p className="font-semibold">Email</p>
                <p className="text-muted">contato@refit.com.br</p>
              </div>
              <div className="flex flex-col justify-between text-lg md:flex-row">
                <p className="font-semibold">Telefone</p>
                <p className="text-muted">(11) 98765-4321</p>
              </div>
            </div>
            <div className="bg-muted-foreground h-px w-full" />
            <div className="flex flex-col gap-5">
              <p className="font-semibold">Redes sociais</p>
              <div className="mb-6 flex space-x-4 lg:mb-0">
                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <Button
                        variant="outline"
                        size="icon"
                        className="dark rounded-full"
                        aria-label="Acessar Facebook"
                      >
                        <SiFacebook className="h-4 w-4" />
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
                        aria-label="Acessar Twitter"
                      >
                        <SiX className="h-4 w-4" />
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
                        aria-label="Acessar Instagram"
                      >
                        <SiInstagram className="h-4 w-4" />
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
                        aria-label="Acessar WhatsApp"
                      >
                        <SiWhatsapp className="h-4 w-4" />
                        <span className="sr-only">Whatsapp</span>
                      </Button>
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>Whatsapp</p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              </div>
            </div>
          </div>
          <div className="col-span-1 flex items-center">
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
};
