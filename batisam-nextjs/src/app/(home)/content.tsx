"use client";

import { HomeIcon, EnvelopeIcon, PhoneIcon, DocumentTextIcon, CalendarDaysIcon, FaceSmileIcon } from "@heroicons/react/24/outline";
import { useState, useEffect } from "react";

export default function Content() {
    const [isImageLoaded, setIsImageLoaded] = useState(false)
  
    useEffect(() => {
        const img = new Image()
        img.src = '/images/btp.webp'
        img.onload = () => setIsImageLoaded(true)
    }, [])
  
    if (!isImageLoaded) {
      return null
    }

    return (
        <div>
            <div className="bg-background-color pb-20">
                <div className="flex items-center justify-center bg-[var(--hero-gradient),url('/images/btp.webp')] bg-cover min-h-[660px]">
                    <section className="text-white max-w-64 sm:max-w-xl md:max-w-2xl mx-7 rise-up-animation">
                        <h1 className="text-[2.625rem]/[3.125rem] md:text-5xl lg:text-6xl text-center font-bold">Construisez votre avenir avec nous.</h1>
                        <p className="text-xl md:text-xl lg:text-2xl text-secondary text-center mt-4">Découvrez notre entreprise de maçonnerie.</p>
                    </section>
                </div>
                <div className="bg-white shadow-lg py-4 sm:max-w-7xl sm:px-6 sm:mt-[-50px] mx-auto">
                    <div className="space-y-6 lg:space-y-0 lg:flex lg:flex-row lg:justify-between gap-8 p-5 md:p-7 lg:p-10 mr-6">
                        <div className="flex flex-row gap-8">
                            <HomeIcon className="default-icon" />
                            <section>
                                <div className="text-base md:text-lg lg:text-xl font-extrabold">Adresse</div>
                                <p className="mt-1">49 Avenue Jean Jaurès <br />84290 Sainte-Cécile-les-Vignes</p>
                            </section>
                        </div>
                        <div className="flex flex-row gap-8">
                            <EnvelopeIcon className="default-icon" />
                            <section>
                                <div className="text-base md:text-lg lg:text-xl font-extrabold">Mail</div>
                                <p className="mt-1">batisam@gmail.com</p>
                            </section>
                        </div>
                        <div className="flex flex-row gap-8">
                            <PhoneIcon className="default-icon" />
                            <section>
                                <div className="text-base md:text-lg lg:text-xl font-extrabold">Téléphone</div>
                                <p className="mt-1">83 89 82 01 98</p>
                            </section>
                        </div>
                    </div>
                </div>
            </div>
            <div className="bg-background-color">
                <div className="max-w-screen-xl mx-auto">
                    <div className="pb-24 mx-4 sm:pb-32">
                        <section className="gap-12 lg:flex lg:flex-row sm:gap-16">
                            <div className="pb-5 px-5 sm:pb-5 sm:px-5">
                                <h2 className="text-4xl/[3rem] md:text-5xl/[4rem] lg:text-6xl/[5rem] font-semibold">Les professionels pour vos travaux de maçonnerie.</h2>
                            </div>
                            <div className="leading-8 p-5">
                                <p className="sm:mt-4">
                                    {"BATISAM est une entreprise de maçonnerie renommée, spécialisée dans la construction et la rénovation de bâtiments résidentiels et commerciaux. Forte de plusieurs années d'expérience, elle se distingue par la qualité de ses réalisations et son souci du détail. L'équipe de BATISAM, composée de maçons qualifiés et passionnés, utilise des matériaux de première qualité pour garantir la durabilité et l'esthétique des ouvrages."}
                                </p>
                                <p className="mt-4">
                                    {"En plus des travaux de maçonnerie traditionnelle, l'entreprise offre des services de rénovation complète, incluant la restauration de façades et la création de structures sur mesure. La satisfaction de la clientèle est au cœur de ses priorités, assurant des projets livrés dans les délais impartis et respectant les budgets établis. BATISAM est votre partenaire de confiance pour tous vos projets de construction et de rénovation."}
                                </p>
                            </div>
                        </section>
                        <section className="mt-4 sm:flex sm:justify-between sm:mx-12 sm:mt-16">
                            <div className="flex flex-col items-center mt-12">
                                <DocumentTextIcon className="default-icon" />
                                <p className="mt-3 font-semibold">Commande</p>
                            </div>
                            <div className="flex flex-col items-center mt-12">
                                <CalendarDaysIcon className="default-icon" />
                                <p className="mt-3 font-semibold">Planification</p>
                            </div>
                            <div className="flex flex-col items-center mt-12">
                                <HomeIcon className="default-icon" />
                                <p className="mt-3 font-semibold">Travaux</p>
                            </div>
                            <div className="flex flex-col items-center mt-12">
                                <FaceSmileIcon className="default-icon" />
                                <p className="mt-3 font-semibold">Profitez</p>
                            </div>
                        </section>
                    </div>
                </div>
            </div>
            <div className="lg:grid lg:grid-cols-2">
                <div className="bg-[url('/images/masonry.webp')] bg-cover bg-center min-h-[100vw] sm:min-h-[300px] lg:order-1"></div>
                <div className="bg-white px-7 py-20 sm:px-28 sm:py-28 leading-7 lg:order-2">
                    <section>
                        <h2 className="text-2xl md:text-5xl font-semibold">Construction</h2>
                        <p className="mt-11 sm:mt-12">
                            {"BATISAM est une société de maçonnerie réputée offrant une gamme complète de services de construction pour répondre à tous vos besoins. Spécialisée dans la construction neuve, la rénovation et la restauration, l'entreprise excelle dans la réalisation de projets résidentiels, commerciaux et industriels. Les services incluent la pose de briques, de pierres et de blocs, ainsi que la construction de murs porteurs et de fondations. BATISAM s'engage à utiliser des matériaux de haute qualité et à respecter les délais impartis. Avec une équipe de professionnels qualifiés, l'entreprise garantit des travaux durables et conformes aux normes en vigueur."}
                        </p>
                        <button className="text-sm font-semibold text-white bg-font-color px-6 py-3 mt-8">INFORMATIONS</button>
                    </section>
                </div>
                <div className="bg-[url('/images/renovation.webp')] bg-cover bg-center min-h-[100vw] sm:min-h-[300px] lg:order-4"></div>
                <div className="bg-white px-7 py-20 sm:px-28 sm:py-28 leading-7 lg:order-3">
                    <section>
                        <h2 className="text-2xl md:text-5xl font-semibold">Renovation</h2>
                        <p className="mt-11 sm:mt-12">
                            {"BATISAM offre des services complets de rénovation pour transformer et moderniser vos espaces résidentiels et commerciaux. Spécialisée dans la rénovation intérieure et extérieure, l'entreprise s'occupe de la démolition, de la reconstruction, de la pose de nouveaux revêtements et de l'isolation. Les artisans de BATISAM travaillent avec soin pour préserver le caractère original des bâtiments tout en intégrant des éléments modernes. Qu'il s'agisse de rénover une cuisine, une salle de bains, ou de réaménager un espace complet, l'entreprise garantit des résultats impeccables, respectant les normes et vos attentes. Leur expertise assure des travaux de qualité, réalisés dans les délais impartis."}
                        </p>
                        <button className="text-sm font-semibold text-white bg-font-color px-6 py-3 mt-8">DÉTAILS</button>
                    </section>
                </div>
            </div>
            <div className="text-white bg-primary-color">
                <div className="md:flex md:flex-row max-w-screen-xl md:w-full py-28 mx-auto">
                    <div className="bg-[var(--subdomain-gradient),url('/images/bricks.webp')] grid grid-rows-1 md:flex-1 bg-cover bg-center min-h-[450px] p-8 m-4">
                        <section className="mt-auto">
                            <button className="text-sm font-semibold bg-font-color px-4 p-3">INFOS</button>
                            <div className="mt-6 drop-shadow-lg">
                                <div className="text-lg font-extrabold">Durabilité</div>
                                <p className="mt-2">Utilisation de matériaux recyclés et traitement des débris.</p>
                            </div>
                        </section>
                    </div>
                    <div className="bg-[var(--subdomain-gradient),url('/images/coupes.webp')] grid grid-rows-1 md:flex-1 bg-cover bg-center min-h-[450px] p-8 m-4">
                        <section className="mt-auto">
                            <button className="text-sm font-semibold bg-font-color px-4 p-3">INFOS</button>
                            <div className="mt-6 drop-shadow-lg">
                                <div className="text-lg font-extrabold">Écoute</div>
                                <p className="mt-2">{"Adaptation à votre environnement et travail en coordination avec l'architecte."}</p>
                            </div>
                        </section>
                    </div>
                    <div className="bg-[var(--subdomain-gradient),url('/images/tools.webp')] grid grid-rows-1 md:flex-1 bg-cover bg-center min-h-[450px] p-8 m-4">
                        <section className="mt-auto">
                            <button className="text-sm font-semibold bg-font-color px-4 p-3">INFOS</button>
                            <div className="mt-6 drop-shadow-lg">
                                <div className="text-lg font-extrabold">Expertise</div>
                                <p className="mt-2">Depuis 1996 dans la région, au service du privé et du public.</p>
                            </div>
                        </section>
                    </div>
                </div>
            </div>
        </div>
    )
}