import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Mentions légales | BATISAM: Construisez votre avenir avec nous.",
    description: "Cette page décrit les mentions légales du site BATISAM.",
};

export default function Page() {
    return (
        <div className="max-w-screen-xl mx-auto">
            <div className="max-w-64 sm:max-w-xl md:max-w-2xl py-16 mx-4">
                <h1 className="text-[1.375rem] font-semibold">{"Mention légales"}</h1>
                <div className="mt-12">
                    <section className="mt-8">
                        <h2 className="font-semibold text-[1.1rem]">{"Article 1 - Éditeur du site"}</h2>
                        <p className="mt-4">
                            {"Le site BATISAM est édité par ORION APPLICATIONS, une société SARL, avec un capital social de 2 000€ €, dont le siège social est à 61 bis Route de Saint Pierre 84600 Valréas. Le représentant légal de l'entreprise est Mr. GROS."}
                        </p>
                        <p className="mt-4">
                            {"Pour contacter l'éditeur, veuillez utiliser le numéro de téléphone suivant : 00 00 00 00 00, ou l'adresse e-mail suivante : hello@gmail.com."}
                        </p>
                    </section>
                    <section className="mt-8">
                        <h2 className="font-semibold text-[1.1rem]">{"Article 2 - Hébergement du site"}</h2>
                        <p className="mt-4">
                            {"Le site BATISAM est hébergé par Azure, une société dont la forme juridique n'est pas indiquée sur le site, dont le siège social est à 61 bis Route de Saint Pierre 84600 Valréas."}
                        </p>
                    </section>
                    <section className="mt-8">
                        <h2 className="font-semibold text-[1.1rem]">{"Article 3 - Accès au site"}</h2>
                        <p className="mt-4">
                            {"L'accès au site et son utilisation sont strictement réservés à un usage personnel. En tant qu'utilisateur, vous vous engagez à ne pas utiliser ce site et les informations ou données qui y figurent à des fins commerciales, politiques, publicitaires, ou pour toute forme de sollicitation commerciale, y compris l'envoi de courriers électroniques non sollicités."}
                        </p>
                    </section>
                    <section className="mt-8">
                        <h2 className="font-semibold text-[1.1rem]">{"Article 4 - Propriété intellectuelle"}</h2>
                        <p className="mt-4">
                            {"L'ensemble des éléments distinctifs tels que les marques, logos, graphismes, photographies, animations, vidéos et textes présents sur ce site web sont la propriété intellectuelle exclusive de ORION APPLICATIONS. Toute reproduction, utilisation ou représentation de ces éléments sans l'autorisation expresse de ORION APPLICATIONS est susceptible de donner lieu à des poursuites judiciaires."}
                        </p>
                    </section>
                    <section className="mt-8">
                        <h2 className="font-semibold text-[1.1rem]">{"Article 5 - Responsabilité"}</h2>
                        <p className="mt-4">
                            {"ORION APPLICATIONS s'efforce d'assurer l'exactitude et la mise à jour des informations diffusées sur ce site. Cependant, nous ne pouvons garantir que toutes les informations soient toujours complètes, exactes et à jour."}
                        </p>
                    </section>
                    <section className="mt-8">
                        <h2 className="font-semibold text-[1.1rem]">{"Article 6 - Contact"}</h2>
                        <p className="mt-4">
                            {"Pour toute question relative à l'utilisation du site, vous pouvez nous contacter à l'adresse suivante : hello@gmail.com."}
                        </p>
                    </section>
                </div>
            </div>
        </div>
    )
}