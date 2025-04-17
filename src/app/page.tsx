import { About } from "@/components/about";
import { Faq } from "@/components/faq";
import { Hero } from "@/components/hero";
import { Portfolio } from "@/components/portfolio";
import { Services } from "@/components/services";
import { Testimonials } from "@/components/testimonials";

export const Home = () => {
  return (
    <>
      <Hero />
      <About />
      <Services />
      <Portfolio />
      <Testimonials />
      <Faq />
    </>
  );
};
export default Home;
