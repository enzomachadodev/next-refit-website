import { section } from "motion/react-client";
import { SectionTitle } from "./section-title";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./ui/accordion";
import { Button } from "./ui/button";

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
    <section id="faq" className="section-container">
      <div className="wrapper flex flex-col items-center gap-14">
        <SectionTitle
          eyebrow="FAQs"
          title="Dúvidas Frequentes"
          description="Tudo o que você precisa saber antes de começar seu projeto com a Refit. Ainda tem perguntas? Fale com a gente!"
        />
        <Button variant="secondary" size="lg">
          Entre em Contato
        </Button>
        <div className="w-full max-w-screen-md">
          <Accordion type="single" className="w-full space-y-5">
            {questions.map(({ question, answer }, i) => (
              <AccordionItem
                key={i}
                value={`item-${i + 1}`}
                className="border-muted-foreground/50 rounded-xl border"
              >
                <AccordionTrigger className="items-center p-5">
                  <span className="text-lg">{question}</span>
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
