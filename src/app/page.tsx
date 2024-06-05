import Image from 'next/image'
import styles from './page.module.css'
import Navbar from '@/components/Navbar/Navbar'
import HandWriting from '@/components/Icons/name_writing.svg'
import EmblaCarousel from '@/components/Carousel/EmblaCarousel'
import { EmblaOptionsType } from 'embla-carousel'

const OPTIONS: EmblaOptionsType = { loop: true }
const SLIDE_COUNT = 8
const SLIDES = Array.from(Array(SLIDE_COUNT).keys())

export default function Home() {
    return (
        <>
            <main>
                <Navbar />

                {/* Top Section */}
                <section className={styles.top}>
                    <div className={styles.top__img}>
                        <HandWriting />
                    </div>
                    <div className={styles.top__slider}>
                        <EmblaCarousel slides={SLIDES} options={OPTIONS} />
                    </div>
                </section>
            </main>
        </>
    )
}
