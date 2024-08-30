import Link from "next/link";

import localFont from 'next/font/local'
const bebasNeue = localFont({ src: '../../public/fonts/Bebas_Neue/BebasNeue-Regular.ttf' })

export default function Navbar() {
    return (
        <div className="bg-primary-color">
            <div className="max-w-screen-xl mx-auto">
                <div className="flex flex-row items-end text-white py-8 mx-4">
                    <Link className={`text-5xl lg:text-6xl font-semibold ${bebasNeue.className}`} href="/">BATISAM</Link>
                    <img className="w-10 lg:w-16 h-10 lg:h-16 ml-1 lg:ml-2 mb-[9px] lg:mb-[10px]" src="/images/batisam-small.png" alt="logo" />
                </div>
            </div>
        </div>
    )
}