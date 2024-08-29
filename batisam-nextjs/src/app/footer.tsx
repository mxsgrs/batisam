import Link from 'next/link';

export default function Footer() {
    const year = new Date().getFullYear();

    return (
        <div className="bg-font-color">
            <div className="max-w-[custom_width] mx-auto">
                <footer className="text-white pt-20 mx-4">
                    <div className="flex justify-between">
                        <div>
                            <section>
                                <div className="text-xl font-bold">BATISAM</div>
                                <p className="text-gray-400 leading-[1.875rem]">
                                    49 Avenue Jean Jaurès <br />
                                    84290 Sainte-Cécile-les-Vignes <br />
                                    batisam@gmail.com <br />
                                    83 89 82 01 98
                                </p>
                            </section>
                        </div>
                        <div>
                        </div>
                    </div>
                    <div className="text-gray-400 text-sm border-t mt-48 border-primary pt-4">
                        © {year} BATISAM |{' '}
                        <Link href="/mentions-legales" className="hover:text-white">
                            Mentions légales
                        </Link>{' '}
                        |{' '}
                        <Link href="/politique-de-confidentialite" className="hover:text-white">
                            Politique de confidentialité
                        </Link>
                    </div>
                </footer>
            </div>
        </div>
    )
}