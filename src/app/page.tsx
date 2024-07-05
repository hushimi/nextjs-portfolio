'use client'
import { useEffect, useState } from 'react'
import styles from './page.module.css'
import { EmblaOptionsType } from 'embla-carousel'

// API
import { getWorkList, getAboutMe } from '@/libs/client'
import type { worksCard } from '@/types/works_card'
import type { aboutMe } from '@/types/about_me'

// Components
import Navbar from '@/components/Navbar/Navbar'
import HandWriting from '@/components/Icons/name_writing.svg'
import EmblaCarousel from '@/components/Carousel/EmblaCarousel'
import Works from '@/components/Works/Works'
import About from '@/components/About/About'
import Contact from '@/components/Contact/Contact'

// EmbraCarousel
const OPTIONS: EmblaOptionsType = { loop: true }
const IMGS: string[] = ['/work1.png', '/work2.png', '/work3.png', '/work2.png']

export default function Home() {
    // works cardの読み込み
    const [worksCards, setWorksCard] = useState<worksCard[]>([])
    const [aboutMe, setAboutMe] = useState<aboutMe[]>([])

    useEffect(() => {
        getWorkList().then((worksCards: worksCard[]) => {
            setWorksCard(worksCards)
        })

        getAboutMe().then((aboutMe: aboutMe[]) => {
            setAboutMe(aboutMe)
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
                    {aboutMe && <About aboutMe={aboutMe} />}
                </section>

                {/* Contact section */}
                <section>
                    <h1 className={styles.section__title} id="contact_sec">
                        Contact
                    </h1>
                    <Contact />
                </section>

                {/* footer */}
                <footer className={styles.footer}>
                    <h2>&copy;Kosuke Fushimi</h2>
                </footer>
            </main>
        </>
    )
}
