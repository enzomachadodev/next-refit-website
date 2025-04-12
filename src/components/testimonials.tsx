import { SectionTitle } from "./section-title";

const testimonials = [
  {
    text: "Contratei a Refit para reformar minha sala, e o resultado foi além do esperado. Eles entenderam exatamente o que eu queria e entregaram tudo no prazo. Superprofissionais!",
    name: "João M., Curitiba",
    picture: "",
  },
  {
    text: "Minha varanda nunca foi tão usada! A Refit transformou um espaço simples em um cantinho perfeito para relaxar. Adorei o cuidado com os detalhes.",
    name: "Ana L., Salvador",
    picture: "",
  },
  {
    text: "Fizemos uma ampliação com a Refit, e o processo foi tranquilo do começo ao fim. O time é atencioso e o projeto ficou incrível!",
    name: "Pedro T., Porto Alegre",
    picture: "",
  },
  {
    text: "A cozinha planejada que a Refit fez para nós é perfeita! Funcional, bonita e com acabamento impecável. Recomendo muito!",
    name: "Fernanda G., Florianópolis",
    picture: "",
  },
  {
    text: "A restauração da minha casa antiga foi um desafio, mas a Refit trouxe o charme de volta com um toque moderno. Não poderia estar mais satisfeito!",
    name: "Lucas B., Recife",
    picture: "",
  },
  {
    text: "O banheiro renovado mudou a energia do nosso apartamento. A Refit foi superparceira e entregou tudo com muita qualidade.",
    name: "Sofia C., Brasília",
    picture: "",
  },
];

export const Testimonials = () => {
  return (
    <section id="testimonials" className="section-container">
      <div className="wrapper flex flex-col items-center">
        <SectionTitle
          eyebrow="Depoimentos"
          title={"O que Dizem \nNossos Clientes"}
          description="Nossos projetos falam por si, mas as palavras de quem já trabalhou conosco mostram o cuidado e a dedicação que colocamos em cada detalhe."
        />
      </div>
    </section>
  );
};
