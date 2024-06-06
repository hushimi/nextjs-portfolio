import styles from './page.module.css'
import Navbar from '@/components/Navbar/Navbar'
import HandWriting from '@/components/Icons/name_writing.svg'
import EmblaCarousel from '@/components/Carousel/EmblaCarousel'
import { EmblaOptionsType } from 'embla-carousel'

const OPTIONS: EmblaOptionsType = { loop: true }
let IMGS: string[] = ['/work1.png', '/work2.png', '/work3.png', '/work2.png']

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
                        <EmblaCarousel images={IMGS} options={OPTIONS} />
                    </div>
                </section>
            </main>
        </>
    )
}
