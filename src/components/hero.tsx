import Image from "next/image";
import { Button } from "./ui/button";

export const Hero = () => {
  return (
    <section className="bg-foreground text-background relative flex h-screen w-full justify-end p-5 md:p-10">
      <div className="relative w-full overflow-hidden rounded-xl xl:max-w-1/2">
        <Image
          alt="Hero Image"
          src="/images/hero.png"
          fill
          className="object-cover object-center"
        />
      </div>
      <div className="bg-foreground/50 absolute top-0 left-0 size-full p-4 md:p-8 xl:bg-transparent">
        <div className="wrapper z-10 flex h-full py-6 md:py-8">
          <div className="flex h-full w-full flex-col justify-end gap-4 md:gap-8 xl:max-w-2/5 xl:justify-center">
            <HeroBadge />
            <h2 className="heading-1">
              Your trusted partner for quality home improvement
            </h2>
            <p className="paragraph-1 text-muted">
              Refit delivers expert home improvements, creating beautiful and
              functional spaces with quality craftsmanship.
            </p>
            <Button className="w-fit" variant="secondary" size="lg">
              Work with us
            </Button>
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
