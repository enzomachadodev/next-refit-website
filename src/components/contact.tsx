"use client";

import { useEffect } from "react";
import { SectionTitle } from "./section-title";
import Cal, { getCalApi } from "@calcom/embed-react";

export const Contact = () => {
  useEffect(() => {
    (async function () {
      const cal = await getCalApi({ namespace: "30min" });
      cal("ui", { hideEventTypeDetails: false, layout: "month_view" });
    })();
  }, []);
  return (
    <section id="contato" className="section-container">
      <div className="wrapper flex flex-col items-center gap-14">
        <SectionTitle
          eyebrow="Contato"
          title="Converse com a gente"
          description="Estamos aqui para ajudar! Entre em contato e tire suas dúvidas."
        />
        <div className="w-full">
          <Cal
            namespace="30min"
            calLink="enzomachadodev/30min"
            style={{ width: "100%", height: "100%", overflow: "scroll" }}
            config={{ layout: "month_view" }}
          />
        </div>
      </div>
    </section>
  );
};
