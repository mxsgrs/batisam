import type { Metadata } from "next";
import Content from "./content";

export const metadata: Metadata = {
  title: "Accueil | BATISAM: Construisez votre avenir avec nous.",
  description: "BATISAM est une entreprise de maçonnerie renommée, spécialisée dans la construction et la rénovation de bâtiments résidentiels et commerciaux.",
};

export default function Home() {
  return (
    <Content />
  );
}
