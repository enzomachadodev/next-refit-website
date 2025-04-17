import { section } from "motion/react-client";
import { SectionTitle } from "./section-title";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./ui/accordion";
import { CTAButton } from "./cta-button";

const questions = [
  {
    question: "Quanto tempo leva para concluir um projeto?",
    answer:
      "O prazo varia conforme a complexidade, mas reformas pontuais (como cozinhas ou banheiros) levam de 4 a 8 semanas, enquanto projetos maiores podem levar de 3 a 6 meses. Definimos tudo com você no planejamento!",
  },
  {
    question: "Vocês trabalham com orçamentos personalizados?",
    answer:
      "Sim! Cada projeto é único, e criamos orçamentos detalhados com base nas suas necessidades e preferências, sem surpresas no final.",
  },
  {
    question: "Posso acompanhar o progresso do meu projeto?",
    answer:
      "Claro! Mantemos você informado em cada etapa com atualizações regulares e um canal direto com nossa equipe para tirar dúvidas.",
  },
  {
    question: "Vocês oferecem garantia nos projetos?",
    answer:
      "Sim, todos os nossos projetos têm garantia de até 2 anos para acabamentos e instalações, garantindo sua tranquilidade.",
  },
  {
    question: "Como funciona o processo de design?",
    answer:
      "Começamos com uma reunião para entender suas ideias e necessidades. Depois, criamos um projeto 3D para sua aprovação antes de iniciar a obra, garantindo que tudo saia como planejado.",
  },
  {
    question: "Vocês atendem fora da minha cidade?",
    answer:
      "Atendemos em várias regiões do Brasil! Entre em contato para verificar a disponibilidade na sua localidade.",
  },
];

export const Faq = () => {
  return (
    <section id="duvidas-frequentes" className="section-container">
      <div className="wrapper relative flex flex-col items-center gap-14 xl:flex-row xl:items-start">
        <div className="top-0 flex flex-col items-center gap-14 xl:sticky xl:top-24 xl:max-w-[400px] xl:items-start xl:gap-8">
          <SectionTitle
            eyebrow="FAQs"
            title="Dúvidas Frequentes"
            description="Ainda tem perguntas? Fale com a gente!"
            className="xl:items-start xl:text-start"
          />
          <CTAButton href="#contato" />
        </div>
        <div className="w-full max-w-screen-md">
          <Accordion type="single" className="w-full space-y-5">
            {questions.map(({ question, answer }, i) => (
              <AccordionItem
                key={i}
                value={`item-${i + 1}`}
                className="border-muted-foreground/50 rounded-xl border"
              >
                <AccordionTrigger className="items-center p-5 xl:p-6">
                  <span className="text-lg xl:text-xl">{question}</span>
                </AccordionTrigger>
                <AccordionContent className="px-5 text-lg font-light">
                  {answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};
