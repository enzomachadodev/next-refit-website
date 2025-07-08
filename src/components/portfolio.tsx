import React from "react";
import { SectionTitle } from "./section-title";
import Image from "next/image";
import { cn } from "@/lib/utils";

interface Project {
  title: string;
  description: string;
  tags: string[];
  image: string;
  testimonial: string;
  name: string;
  picture: string;
}

const projects: Project[] = [
  {
    title: "Reforma de Cozinha Moderna",
    description:
      "Uma família de São Paulo queria uma cozinha que fosse o coração da casa. Desenvolvemos um projeto com ilha central, armários planejados em tons neutros e iluminação embutida. Integramos eletrodomésticos de última geração e criamos um espaço amplo para refeições em família. O resultado? Uma cozinha prática, elegante e perfeita para momentos inesquecíveis.",
    image: "/images/kitchen-2.webp",
    tags: ["Cozinha", "4 semanas"],
    testimonial:
      "A Refit transformou nossa cozinha em um lugar que amamos estar! Cada detalhe foi pensado com cuidado, e o time foi superatencioso. Recomendo de olhos fechados!",
    name: "Mariana S.",
    picture: "/images/mariana.webp",
  },
  {
    title: "Construção de Caminho Externo no Jardim",
    description:
      "Um casal do Rio de Janeiro queria um jardim mais funcional para receber amigos. Projetamos um caminho de pedras naturais que conecta a entrada ao espaço de convivência, com iluminação suave e paisagismo integrado. O projeto trouxe charme e praticidade ao quintal, valorizando ainda mais a área externa.",
    image: "/images/garden.webp",
    tags: ["Obras Externas", "1 mês"],
    testimonial:
      "Nosso jardim ficou incrível! O caminho deu um toque especial, e agora adoramos receber amigos aqui. A Refit entregou tudo no prazo e com muita qualidade.",
    name: "Rafael P.",
    picture: "/images/rafael.webp",
  },
  {
    title: "Renovação de Banheiro",
    description:
      "Um apartamento em Belo Horizonte precisava de um banheiro mais moderno e funcional. Substituímos revestimentos antigos por porcelanatos claros, instalamos um box elegante e criamos nichos embutidos para organização. O projeto trouxe sofisticação e praticidade ao dia a dia dos moradores.",
    image: "/images/bathrooms.webp",
    tags: ["Bathroom", "6 semanas"],
    testimonial:
      "O banheiro ficou exatamente como imaginávamos! A Refit captou nossa ideia e entregou um projeto impecável. Estamos muito felizes!",
    name: "Camila R.",
    picture: "/images/camila.webp",
  },
];

export const Portfolio = () => {
  return (
    <section id="portfolio" className="section-container">
      <div className="wrapper flex flex-col items-center gap-28">
        <SectionTitle
          eyebrow="Portfólio"
          title="Projetos que Inspiram"
          description="Conheça alguns dos nossos trabalhos e veja como transformamos ideias em realidade com criatividade e precisão."
        />
        <div className="relative mx-auto flex max-w-screen-xl flex-col gap-8 xl:gap-10">
          {projects.map((p, i) => (
            <ProjectCard key={i} data={p} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
};

const ProjectCard = ({
  data: { title, description, tags, image, testimonial, name, picture },
  index,
}: {
  data: Project;
  index: number;
}) => {
  const isEven = index % 2 == 0;
  return (
    <div
      className={cn(
        "top-8 flex flex-col gap-8 rounded-2xl p-5 md:p-8 lg:flex-row-reverse",
        `z-[${index}]`,
        isEven ? "bg-muted text-foreground" : "bg-foreground text-muted",
      )}
    >
      <div className="flex flex-col items-start gap-8">
        <div className="space-y-6">
          <h3
            className={cn(
              "heading-3",
              isEven ? "text-foreground" : "text-background",
            )}
          >
            {title}
          </h3>
          <p className="paragraph-2">{description}</p>
          <div className="flex items-center gap-4">
            {tags.map((tag, i) => (
              <div
                key={i}
                className={cn(
                  "rounded-full px-2.5 py-0.5 text-sm",
                  isEven
                    ? "bg-foreground text-background"
                    : "bg-background text-foreground",
                )}
              >
                {tag}
              </div>
            ))}
          </div>
        </div>
        <div className="flex w-full gap-4">
          <svg
            height="800px"
            width="800px"
            version="1.1"
            id="_x32_"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
            xmlSpace="preserve"
            className={cn(
              "size-10 rotate-180 pt-4",
              isEven ? "fill-foreground" : "fill-background",
            )}
          >
            <g>
              <path
                className="st0"
                d="M119.472,66.59C53.489,66.59,0,120.094,0,186.1c0,65.983,53.489,119.487,119.472,119.487
		c0,0-0.578,44.392-36.642,108.284c-4.006,12.802,3.135,26.435,15.945,30.418c9.089,2.859,18.653,0.08,24.829-6.389
		c82.925-90.7,115.385-197.448,115.385-251.8C238.989,120.094,185.501,66.59,119.472,66.59z"
              />
              <path
                className="st0"
                d="M392.482,66.59c-65.983,0-119.472,53.505-119.472,119.51c0,65.983,53.489,119.487,119.472,119.487
		c0,0-0.578,44.392-36.642,108.284c-4.006,12.802,3.136,26.435,15.945,30.418c9.089,2.859,18.653,0.08,24.828-6.389
		C479.539,347.2,512,240.452,512,186.1C512,120.094,458.511,66.59,392.482,66.59z"
              />
            </g>
          </svg>
          <div className="space-y-6">
            <blockquote>
              <p className="paragraph-1">{testimonial}</p>
            </blockquote>
            <div className="flex items-center gap-4">
              <Image
                alt={`Foto ${name}`}
                src={picture}
                className="size-14 rounded-full border object-cover"
                width={60}
                height={60}
              />
              <span>{name}</span>
            </div>
          </div>
        </div>
      </div>
      <Image
        alt={`Foto ${title}`}
        src={image}
        className="aspect-[3/4] w-full rounded-xl object-cover lg:min-w-[400px]"
        width={500}
        height={1000}
      />
    </div>
  );
};
