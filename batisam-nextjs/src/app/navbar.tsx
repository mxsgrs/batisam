import Image from "next/image"
import Link from "next/link";

import localFont from 'next/font/local'
const bebasNeue = localFont({ src: '../../public/fonts/Bebas_Neue/BebasNeue-Regular.ttf' })

export default function Navbar() {
    return (
        <div className="bg-primary-color">
            <div className="max-w-screen-xl mx-auto">
                <div className="flex flex-row items-end text-white py-8 mx-2">
                    <Link className={`lg:text-6xl font-semibold ${bebasNeue.className}`} href="/">BATISAM</Link>
                    <Image className="pl-2 mb-[10px]" src="/images/batisam-small.png" width={64} height={64} alt="BATISAM logo" />
                </div>
            </div>
        </div>
    )
}