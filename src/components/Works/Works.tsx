'use client'
import React from 'react'
import styles from './works.module.css'
import Image from 'next/image'
import type { worksCard } from '@/types/works_card'
import {
    DiHtml5,
    DiCss3,
    DiJavascript1,
    DiWordpress,
    DiPhp,
    DiJqueryLogo,
    DiDocker,
} from 'react-icons/di'
import { FaLaravel, FaVuejs } from 'react-icons/fa6'
import { RiFlutterFill } from 'react-icons/ri'
import { SiPostgresql } from 'react-icons/si'

type IconsType = {
    [K in string]: any
}
const icons: IconsType = {
    DiHtml5: <DiHtml5 />,
    DiCss3: <DiCss3 />,
    DiJavascript1: <DiJavascript1 />,
    DiWordpress: <DiWordpress />,
    DiPhp: <DiPhp />,
    DiJqueryLogo: <DiJqueryLogo />,
    DiDocker: <DiDocker />,
    FaLaravel: <FaLaravel />,
    FaVuejs: <FaVuejs />,
    RiFlutterFill: <RiFlutterFill />,
    SiPostgresql: <SiPostgresql />,
}

export default function Works({ worksCards }: { worksCards: worksCard[] }) {
    const openLink = (url: string): void => {
        window.open(url, '_blank')
    }

    return (
        <>
            <div className={styles.works__wrap}>
                {/* Loop */}
                {worksCards.map((worksCard: worksCard, index: number) => (
                    <div
                        className={styles.works__card}
                        key={index}
                        onClick={() => openLink(worksCard.work_url)}
                    >
                        <div className={styles.works__card__img}>
                            <Image
                                src={worksCard.card_img.url}
                                alt="my works"
                                priority={true}
                                width={500}
                                height={500}
                            />
                        </div>

                        <div className={styles.works__card__desc}>
                            <h1 className={styles.works__desc__title}>
                                {worksCard.card_title}
                            </h1>
                            <div className={styles.works__desc__tech}>
                                {/* Skill Icon array */}
                                {worksCard.card_skills.map(
                                    (cardSkill, index: number) => {
                                        if ('devicon_class' in cardSkill) {
                                            let cat: string =
                                                cardSkill.devicon_class || ''
                                            let Icon = icons[cat]
                                            return (
                                                <span key={index}>{Icon}</span>
                                            )
                                        }
                                    }
                                )}
                            </div>
                            <p>{worksCard.card_desc}</p>
                        </div>
                    </div>
                ))}
            </div>
        </>
    )
}
