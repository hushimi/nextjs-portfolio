import Image from 'next/image'
import styles from './page.module.css'
import Navbar from '@/components/Navbar/Navbar'
import { Sawarabi_Gothic } from 'next/font/google'

const SawarabiGothic = Sawarabi_Gothic({
    weight: ['400'],
    preload: false,
})

export default function Home() {
    return (
        <>
            <main className={SawarabiGothic.className}>
                <Navbar />
            </main>
        </>
    )
}
