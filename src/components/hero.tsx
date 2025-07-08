import Image from "next/image";
import { CTAButton } from "./cta-button";

export const Hero = () => {
  return (
    <section className="bg-foreground text-background relative flex h-screen w-full justify-end p-5 md:p-10">
      <div className="relative w-full overflow-hidden rounded-xl xl:max-w-1/2">
        <Image
          alt="Hero Image"
          src="/images/hero.webp"
          className="absolute size-full object-cover object-center"
          sizes="(max-width: 1280px) 100vw, 50vw"
          width={1000}
          height={1000}
          quality={80}
          placeholder="blur"
          blurDataURL="/images/hero.webp"
        />
      </div>
      <div className="bg-foreground/50 xl:from-foreground absolute top-0 left-0 size-full p-4 md:p-8 xl:bg-gradient-to-b xl:from-0% xl:to-transparent xl:to-11%">
        <div className="wrapper z-10 flex h-full py-6 md:py-8">
          <div className="flex h-full w-full flex-col justify-end gap-4 md:gap-8 xl:max-w-2/5 xl:justify-center">
            <HeroBadge />
            <h3 className="heading-1">
              Transforme Seu Espaço com Projetos que Inspiram
            </h3>
            <p className="paragraph-1 text-muted">
              Na Refit, criamos ambientes únicos que combinam funcionalidade,
              beleza e seu estilo pessoal. Comece hoje mesmo a realizar o lar
              dos seus sonhos!
            </p>
            <CTAButton href="#contato" className="dark" />
          </div>
        </div>
      </div>
    </section>
  );
};

const HeroBadge = () => (
  <div className="bg-muted/10 flex w-fit items-center gap-3 rounded-full px-3.5 py-1.5 backdrop-blur-xl">
    <div className="relative">
      <div className="bg-background relative size-2.5 animate-ping rounded-full"></div>
      <div className="bg-background absolute top-1/2 left-1/2 size-2.5 -translate-x-1/2 -translate-y-1/2 rounded-full" />
    </div>
    <span className="text-sm leading-4 font-light">Vagas Disponíveis</span>
  </div>
);
