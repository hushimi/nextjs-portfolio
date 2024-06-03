import Image from 'next/image'
import styles from './page.module.css'
import Navbar from '@/components/Navbar/Navbar'
import HandWriting from '@/components/Icons/name_writing.svg'

export default function Home() {
    return (
        <>
            <main>
                <Navbar />
                <section className={styles.top}>
                    <div className={styles.top__img}>
                        <HandWriting />
                    </div>
                </section>
            </main>
        </>
    )
}
