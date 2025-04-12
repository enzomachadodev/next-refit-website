"use client";

import Image from "next/image";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";

const services = {
  "item-1": {
    icon: "/icons/kitchens.svg",
    title: "Cozinhas Planejadas",
    description:
      "Crie a cozinha dos seus sonhos, funcional e cheia de estilo. Projetamos layouts inteligentes que otimizam espaço, integram eletrodomésticos modernos e refletem sua personalidade, perfeita para reunir família e amigos.",
    image: "/images/kitchens.png",
  },
  "item-2": {
    icon: "/icons/loft.svg",
    title: "Conversão de Espaços",
    description:
      "Transforme áreas subutilizadas em espaços abertos e versáteis. Desenvolvemos projetos de lofts ou ambientes integrados que unem conforto, praticidade e design contemporâneo, ideais para viver e receber.",
    image: "/images/loft.png",
  },
  "item-3": {
    icon: "/icons/bathrooms.svg",
    title: "Banheiros Renovados",
    description:
      "Dê vida nova ao seu banheiro com reformas que aliam beleza e funcionalidade. Trabalhamos com acabamentos de alta qualidade, iluminação estratégica e soluções para todos os tamanhos de espaço.",
    image: "/images/bathrooms.png",
  },
  "item-4": {
    icon: "/icons/extensions.svg",
    title: "Ampliações Residenciais",
    description:
      "Precisa de mais espaço? Projetamos ampliações que se integram perfeitamente à sua casa, garantindo harmonia estética, conforto térmico e valorização do imóvel.",
    image: "/images/extensions.png",
  },
  "item-5": {
    icon: "/icons/restorations.svg",
    title: "Restaurações de Ambientes",
    description:
      "Preserve a história do seu lar com restaurações cuidadosas. Recuperamos pisos, paredes e detalhes arquitetônicos, mantendo o charme original com um toque moderno.",
    image: "/images/restorations.png",
  },
  "item-6": {
    icon: "/icons/external.svg",
    title: "Obras Externas",
    description:
      "Transforme quintais, varandas e jardins em áreas de lazer incríveis. Criamos caminhos, decks, pergolados e paisagismo que tornam seu espaço externo um convite ao relaxamento.",
    image: "/images/external.png",
  },
};

const servicesArray = Object.values(services);

export const ServicesAccordion = () => {
  type ServiceKey = keyof typeof services;

  const [activeItem, setActiveItem] = useState<ServiceKey>("item-1");

  return (
    <div className="flex w-full flex-col gap-8 md:gap-10 xl:flex-row xl:items-center">
      <Accordion
        type="single"
        value={activeItem}
        onValueChange={(value) => setActiveItem(value as ServiceKey)}
        className="w-full xl:max-w-1/2"
      >
        {servicesArray.map(({ icon, title, description }, i) => (
          <AccordionItem key={i} value={`item-${i + 1}`}>
            <AccordionTrigger className="py-6">
              <div className="flex items-center gap-6 text-base">
                <Image
                  alt="title"
                  src={icon}
                  width={40}
                  height={40}
                  className="size-10 object-cover"
                />
                <span className="text-lg">{title}</span>
              </div>
            </AccordionTrigger>
            <AccordionContent className="text-lg font-light">
              {description}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>

      <div className="bg-background">
        <AnimatePresence mode="wait">
          <motion.div
            key={`${activeItem}-id`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="bg-muted-foreground aspect-square size-full overflow-hidden rounded-2xl xl:size-[648px]"
          >
            <Image
              src={services[activeItem].image}
              className="size-full object-cover object-center dark:mix-blend-lighten"
              alt={services[activeItem].title}
              width={700}
              height={700}
            />
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
};
