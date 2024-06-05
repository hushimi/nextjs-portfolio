'use client'
import React from 'react'
import { EmblaOptionsType } from 'embla-carousel'
import useEmblaCarousel from 'embla-carousel-react'
import AutoScroll from 'embla-carousel-auto-scroll'
import styles from './emblaCarousel.module.css'

type PropType = {
    slides: number[]
    options?: EmblaOptionsType
}

export default function EmblaCarousel(props: PropType) {
    const { slides, options } = props
    const [emblaRef, emblaApi] = useEmblaCarousel(options, [
        AutoScroll({ playOnInit: true }),
    ])

    return (
        <>
            <div className={styles.embla}>
                <div className={styles.embla__viewport} ref={emblaRef}>
                    <div className={styles.embla__container}>
                        {slides.map((index) => (
                            <div className={styles.embla__slide} key={index}>
                                <div className={styles.embla__slide__number}>
                                    <span>{index + 1}</span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    )
}
