import React from "react";
import { SectionTitle } from "./section-title";
import { ServicesAccordion } from "./services-accordion";

export const Services = () => {
  return (
    <section id="servicos" className="section-container bg-muted/40">
      <div className="wrapper flex flex-col gap-20 xl:gap-32">
        <SectionTitle
          eyebrow="Serviços"
          title="Soluções Personalizadas para o Seu Lar"
          description="Oferecemos serviços sob medida para transformar qualquer ambiente com qualidade e criatividade."
        />
        <ServicesAccordion />
      </div>
    </section>
  );
};
