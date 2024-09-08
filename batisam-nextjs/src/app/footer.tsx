import Link from 'next/link';

import localFont from 'next/font/local'
const bebasNeue = localFont({ src: '../../public/fonts/Bebas_Neue/BebasNeue-Regular.ttf' })

export default function Footer() {
    const year = new Date().getFullYear();

    return (
        <div className="bg-font-color">
            <div className="max-w-screen-xl mx-auto">
                <footer className="text-white pt-20 mx-4">
                    <div className="flex justify-between">
                        <div>
                            <section>
                                <div className={`text-6xl font-bold ${bebasNeue.className}`}>BATISAM</div>
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
                    <div className="text-gray-400 text-sm border-t mt-48 border-gray-400 border-primary py-4">
                        © {year} BATISAM |{' '}
                        <Link href="/legal" className="hover:text-white">
                            Mentions légales
                        </Link>{' '}
                        |{' '}
                        <Link href="/privacy-policy" className="hover:text-white">
                            Politique de confidentialité
                        </Link>
                    </div>
                </footer>
            </div>
        </div>
    )
}