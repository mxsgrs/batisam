import Link from "next/link";

import localFont from 'next/font/local'
const bebasNeue = localFont({ src: '../../public/fonts/Bebas_Neue/BebasNeue-Regular.ttf' })

export default function Navbar() {
    return (
        <div className="bg-primary-color">
            <div className="max-w-screen-xl mx-auto">
                <div className="flex flex-row items-end text-white py-8 mx-4">
                    <Link className={`text-[2.625rem]/[3rem] md:text-5xl lg:text-6xl font-semibold ${bebasNeue.className}`} href="/">BATISAM</Link>
                    <div className="bg-[url('/images/batisam-small.png')] bg-cover w-10 md:w-12 lg:w-16 h-10 md:h-12 lg:h-16 ml-2 mb-[10px] md:mb-[9px] lg:mb-[10px]"></div>
                </div>
            </div>
        </div>
    )
}