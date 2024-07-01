'use client'
import type { worksCard } from '@/types/works_card'
import { useEffect, useState } from 'react'
import { getWorkList } from '@/libs/client'

import styles from './page.module.css'
import Navbar from '@/components/Navbar/Navbar'
import HandWriting from '@/components/Icons/name_writing.svg'
import EmblaCarousel from '@/components/Carousel/EmblaCarousel'
import { EmblaOptionsType } from 'embla-carousel'
import Works from '@/components/Works/Works'

// EmbraCarousel
const OPTIONS: EmblaOptionsType = { loop: true }
let IMGS: string[] = ['/work1.png', '/work2.png', '/work3.png', '/work2.png']

export default function Home() {
    // works cardの読み込み
    const [worksCards, setWorksCard] = useState<worksCard[]>([])
    useEffect(() => {
        getWorkList().then((worksCards: worksCard[]) => {
            setWorksCard(worksCards)
        })
    }, [])

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
                        <EmblaCarousel images={IMGS} options={OPTIONS} />
                    </div>
                </section>

                {/* works section */}
                <section>
                    <h1 className={styles.section__title} id="works_sec">
                        Works
                    </h1>
                    <Works worksCards={worksCards} />
                </section>

                {/* About section */}
                <section>
                    <h1 className={styles.section__title} id="about_sec">
                        About
                    </h1>
                </section>

                {/* Contact section */}
                <section>
                    <h1 className={styles.section__title} id="contact_sec">
                        Contact
                    </h1>
                </section>
            </main>
        </>
    )
}
