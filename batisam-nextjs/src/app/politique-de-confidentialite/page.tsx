import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Politique de confidentialité | BATISAM: Construisez votre avenir avec nous.",
    description: "Cette page décrit la politique de confidentialité du site BATISAM.",
};

export default function Page() {
    return (
        <div className="max-w-screen-xl mx-auto">
            <div className="max-w-64 sm:max-w-xl md:max-w-2xl py-16 mx-4">
                <h1 className="text-xl font-semibold">Politique de confidentialité</h1>
                <div className="mt-12">
                    <section className="mt-8">
                        <p>
                            {"Ce site ne collecte, ni ne stocke aucune donnée personnelle des visiteurs. Nous n'utilisons pas de cookies, de formulaires, ou d'autres moyens de collecte d'informations."}
                        </p>
                    </section>
                </div>
            </div>
        </div>
    )
}