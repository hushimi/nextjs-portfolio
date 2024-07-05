import React from 'react'
import Image from 'next/image'
import styles from './about.module.css'
import { aboutMe } from '@/types/about_me'

export default function About({ aboutMe }: { aboutMe: aboutMe[] }) {
    return (
        <>
            {/* aboutMe is array. Need to fix api type from list to object */}
            {aboutMe.map((aboutMe: aboutMe, index: number) => (
                <div className={styles.about__wrap} key={index}>
                    {/* self introduction */}
                    <div className={styles.about__me}>
                        <div className={styles.about__me__img}>
                            <Image
                                src={aboutMe.about_img.url}
                                priority={true}
                                width={500}
                                height={500}
                                alt="Kosuke Fushimi"
                            />
                        </div>
                        <div className={styles.about__me__desc}>
                            <h2>{aboutMe.about_name}</h2>
                            <p>{aboutMe.about_desc}</p>
                        </div>
                    </div>
                    {/* job history */}
                    {aboutMe.about_history.map((hist, index: number) => (
                        <div className={styles.about__hist} key={index}>
                            <div className={styles.about__hist__item}>
                                <div
                                    className={styles.about__hist__item__title}
                                >
                                    <h2>{hist.job_title}</h2>
                                </div>
                                <div className={styles.about__hist__item__desc}>
                                    <p>{hist.job_detail}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            ))}
        </>
    )
}
