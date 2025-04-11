import { SectionTitle } from "./section-title";
import { Marquee } from "./ui/marquee";
import Image from "next/image";
import { NumberTicker } from "./ui/number-ticker";

const images = [
  "/images/bathrooms.png",
  "/images/corridor.png",
  "/images/external.png",
  "/images/house.png",
  "/images/loft.png",
  "/images/room.png",
];

export const About = () => {
  return (
    <section id="about" className="section-container flex flex-col gap-28">
      <div className="wrapper flex flex-col gap-8 xl:flex-row xl:items-end xl:gap-48">
        <SectionTitle
          eyebrow="Quem Somos"
          title="Arquitetura que Conecta Sonhos à Realidade"
          className="items-start text-start"
        />
        <p className="paragraph-1 max-w-3xl">
          Na <b>Refit</b>, acreditamos que cada espaço tem uma história para
          contar. Com mais de 10 anos de experiência, nosso time de arquitetos e
          designers transforma ideias em ambientes práticos, elegantes e
          personalizados. Trabalhamos com paixão para entender suas necessidades
          e entregar projetos que superam expectativas, seja uma reforma pontual
          ou uma transformação completa. Nosso compromisso é com a qualidade, o
          prazo e a sua satisfação.
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
            <span className="text-7xl font-light">
              <NumberTicker value={10} className="tracking-tighter" />+
            </span>
            <span className="mt-5 text-xl font-semibold">
              Anos Transformando Espaços
            </span>
            <p>Improving homes with expert craftsmanship for years</p>
          </div>
          <div className="col-span-1 flex flex-col">
            <span className="text-7xl font-light">
              +<NumberTicker value={200} className="tracking-tighter" />
            </span>
            <span className="mt-5 text-xl font-semibold">
              Projetos Concluídos
            </span>
            <p>Improving homes with expert craftsmanship for years</p>
          </div>
          <div className="col-span-1 flex flex-col">
            <NumberTicker
              value={30}
              className="text-7xl font-light tracking-tighter"
            />
            <span className="mt-5 text-xl font-semibold">
              Colaboradores Habilidosos
            </span>
            <p>Improving homes with expert craftsmanship for years</p>
          </div>
          <div className="col-span-1 flex flex-col">
            <span className="text-7xl font-light">
              <NumberTicker value={100} className="tracking-tighter" />%
            </span>
            <span className="mt-5 text-xl font-semibold">
              Clientes Satisfeitos
            </span>
            <p>Improving homes with expert craftsmanship for years</p>
          </div>
        </div>
      </div>
    </section>
  );
};
