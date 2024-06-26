'use client'
import React from 'react'
import Image from 'next/image'
import { EmblaOptionsType } from 'embla-carousel'
import useEmblaCarousel from 'embla-carousel-react'
import AutoScroll from 'embla-carousel-auto-scroll'
import styles from './emblaCarousel.module.css'

type PropType = {
    images: string[]
    options?: EmblaOptionsType
}

export default function EmblaCarousel(props: PropType) {
    const { images, options } = props
    const [emblaRef, emblaApi] = useEmblaCarousel(options, [
        AutoScroll({ playOnInit: true, speed: 1, stopOnInteraction: false }),
    ])

    return (
        <>
            <div className={styles.embla}>
                <div className={styles.embla__viewport} ref={emblaRef}>
                    <div className={styles.embla__container}>
                        {images.map((image, index) => (
                            <div className={styles.embla__slide} key={index}>
                                <Image
                                    src={image}
                                    alt="my works"
                                    className={styles.embla__slide__img}
                                    sizes="(max-width: 912px) 30vw, 50vw"
                                    priority={true}
                                    fill
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    )
}
