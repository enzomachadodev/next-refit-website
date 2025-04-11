import { SectionTitle } from "./section-title";
import { Marquee } from "./ui/marquee";
import Image from "next/image";
import { NumberTicker } from "./ui/number-ticker";

const images = [
  "/images/about-1.png",
  "/images/about-2.png",
  "/images/about-3.png",
  "/images/about-4.png",
  "/images/about-5.png",
  "/images/about-6.png",
];

export const About = () => {
  return (
    <section id="about" className="section-container flex flex-col gap-28">
      <div className="wrapper flex flex-col gap-8 xl:flex-row xl:items-end xl:gap-48">
        <SectionTitle
          eyebrow="About us"
          title="Home Improvement Specialists"
          className="items-start text-start"
        />
        <p className="paragraph-1">
          Welcome to Refit, your trusted home improvement experts, dedicated to
          transforming homes with precision and care. With years of experience
          in building kitchens, bathrooms, garages, and more, we take pride in
          delivering top-quality craftsmanship and a seamless customer
          experience. Our mission is to bring your vision to life while ensuring
          clear communication and expert guidance at every step. Let&apos;s
          create a home you&apos;ll love!
        </p>
      </div>
      <div className="relative flex w-full flex-col items-center justify-center overflow-hidden">
        <Marquee pauseOnHover className="[--duration:50s] md:[--gap:2rem]">
          {images.map((img, i) => (
            <div
              key={i}
              className="relative aspect-[4/5] h-[430px] w-[350px] md:h-[500px] md:w-[400px]"
            >
              <Image
                key={i}
                src={img}
                alt="About image"
                width={400}
                height={500}
                className="size-full object-cover"
              />
            </div>
          ))}
        </Marquee>
        <div className="wrapper mt-28 grid grid-cols-1 gap-10 md:grid-cols-2 md:gap-24 xl:grid-cols-4">
          <div className="col-span-1 flex flex-col">
            <NumberTicker
              value={8}
              className="text-7xl font-light tracking-tighter"
            />
            <span className="mt-5 text-xl font-semibold">
              Anos de experiência
            </span>
            <p>Improving homes with expert craftsmanship for years</p>
          </div>
          <div className="col-span-1 flex flex-col">
            <NumberTicker
              value={26}
              className="text-7xl font-light tracking-tighter"
            />
            <span className="mt-5 text-xl font-semibold">
              Projetos entregues
            </span>
            <p>Improving homes with expert craftsmanship for years</p>
          </div>
          <div className="col-span-1 flex flex-col">
            <NumberTicker
              value={30}
              className="text-7xl font-light tracking-tighter"
            />
            <span className="mt-5 text-xl font-semibold">
              Colaboradores habilidosos
            </span>
            <p>Improving homes with expert craftsmanship for years</p>
          </div>
          <div className="col-span-1 flex flex-col">
            <span className="text-7xl font-light">
              <NumberTicker value={100} className="tracking-tighter" />%
            </span>
            <span className="mt-5 text-xl font-semibold">
              Clientes satisfeitos
            </span>
            <p>Improving homes with expert craftsmanship for years</p>
          </div>
        </div>
      </div>
    </section>
  );
};
