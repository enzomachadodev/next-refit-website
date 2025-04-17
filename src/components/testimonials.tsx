import { cn } from "@/lib/utils";
import { SectionTitle } from "./section-title";
import { Marquee } from "./ui/marquee";
import { Star } from "lucide-react";
import Image from "next/image";

interface Review {
  text: string;
  name: string;
  picture: string;
}

const testimonials: Review[] = [
  {
    text: "Contratei a Refit para reformar minha sala, e o resultado foi além do esperado. Eles entenderam exatamente o que eu queria e entregaram tudo no prazo. Superprofissionais!",
    name: "João M., Curitiba",
    picture: "/images/testimonial-1.jpg",
  },
  {
    text: "Minha varanda nunca foi tão usada! A Refit transformou um espaço simples em um cantinho perfeito para relaxar. Adorei o cuidado com os detalhes.",
    name: "Ana L., Salvador",
    picture: "/images/testimonial-5.jpg",
  },
  {
    text: "Fizemos uma ampliação com a Refit, e o processo foi tranquilo do começo ao fim. O time é atencioso e o projeto ficou incrível!",
    name: "Pedro T., Porto Alegre",
    picture: "/images/testimonial-2.png",
  },
  {
    text: "A cozinha planejada que a Refit fez para nós é perfeita! Funcional, bonita e com acabamento impecável. Recomendo muito!",
    name: "Fernanda G., Florianópolis",
    picture: "/images/testimonial-4.png",
  },
  {
    text: "A restauração da minha casa antiga foi um desafio, mas a Refit trouxe o charme de volta com um toque moderno. Não poderia estar mais satisfeito!",
    name: "Lucas B., Recife",
    picture: "/images/testimonial-3.png",
  },
  {
    text: "O banheiro renovado mudou a energia do nosso apartamento. A Refit foi superparceira e entregou tudo com muita qualidade.",
    name: "Sofia C., Brasília",
    picture: "/images/testimonial-6.png",
  },
];

const firstRow = testimonials.slice(0, testimonials.length / 2);
const secondRow = testimonials.slice(testimonials.length / 2);

export const Testimonials = () => {
  return (
    <section id="testimonials" className="section-container">
      <div className="wrapper flex flex-col items-center gap-28">
        <SectionTitle
          eyebrow="Depoimentos"
          title={"O que Dizem \nNossos Clientes"}
          description="Nossos projetos falam por si, mas as palavras de quem já trabalhou conosco mostram o cuidado e a dedicação que colocamos em cada detalhe."
        />
        <div className="relative flex w-full flex-col items-center justify-center overflow-hidden">
          <Marquee pauseOnHover className="[--duration:20s]">
            {firstRow.map((review, i) => (
              <TestimonialCard key={i} data={review} />
            ))}
          </Marquee>
          <Marquee reverse pauseOnHover className="[--duration:20s]">
            {secondRow.map((review, i) => (
              <TestimonialCard key={i} data={review} />
            ))}
          </Marquee>
          <div className="from-background pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r"></div>
          <div className="from-background pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l"></div>
        </div>
      </div>
    </section>
  );
};

const TestimonialCard = ({
  data: { picture, name, text },
}: {
  data: Review;
}) => {
  return (
    <figure
      className={cn(
        "bg-muted/30 relative flex h-full max-w-xs cursor-pointer flex-col justify-between gap-2 overflow-hidden rounded-xl border p-5 md:max-w-sm",
      )}
    >
      <div className="flex items-center gap-2">
        {Array.from({ length: 5 }).map((_, i) => (
          <Star key={i} className="fill-foreground" />
        ))}
      </div>
      <blockquote className="mt-2 text-sm">{text}</blockquote>
      <div className="mt-2 flex flex-row items-center gap-4">
        <Image
          className="size-10 rounded-full"
          width={32}
          height={32}
          alt={`Foto ${name}`}
          src={picture}
        />
        <div className="flex flex-col">
          <figcaption className="text-sm font-medium dark:text-white">
            {name}
          </figcaption>
        </div>
      </div>
    </figure>
  );
};
