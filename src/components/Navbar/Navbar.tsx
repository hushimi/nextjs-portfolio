'use client'
import React, { useEffect, useRef, useState } from 'react'
import styles from './navbar.module.css'
import { useWindowSize } from '@/hooks/useWindowSize'

function Navbar() {
    const hamburgerRef = useRef<HTMLAnchorElement>(null!)
    const listRef = useRef<HTMLUListElement>(null!)
    const [listOn, setListOn] = useState(false)
    const [fadeOutOn, setfadeOutOn] = useState(false)
    const { windowWidth } = useWindowSize()

    /**
     * ----------------------------------------------------
     * Menu toggle
     * ----------------------------------------------------
     */
    const handleClick = () => {
        setListOn(!listOn)
        if (listOn) {
            // fadeout
            setfadeOutOn(true)
            listRef.current.style.pointerEvents = 'none'
        } else {
            // fadein
            setfadeOutOn(false)
            listRef.current.style.pointerEvents = 'auto'
        }
    }

    /**
     * ----------------------------------------------------
     * Close menu when click outside of list
     * ----------------------------------------------------
     */
    useEffect(() => {
        const handleClickOutside = (e: MouseEvent) => {
            if (listOn) {
                setListOn(false)
                setfadeOutOn(true)
                listRef.current.style.pointerEvents = 'none'
            }
        }

        document.addEventListener('click', handleClickOutside)
        return () => {
            document.removeEventListener('click', handleClickOutside)
        }
    }, [listOn])

    /**
     * ----------------------------------------------------
     * Remove fade in, fade-out class
     * ----------------------------------------------------
     */
    useEffect(() => {
        if (windowWidth > 912) {
            setListOn(false)
            setfadeOutOn(false)
        }
    }, [windowWidth])

    return (
        <>
            <section className={styles.navbar}>
                <div className={styles.navbar__container}>
                    {/* logo */}
                    <div className={styles.navbar__logo}>
                        <a href="#">0xF3</a>
                    </div>

                    <nav className={styles.navbar__menu}>
                        {/* hamburger */}
                        <div className={styles.navbar__menu__mobile}>
                            <a
                                className={`${styles.navbar__toggle} ${listOn ? styles.active : ''}`}
                                href="#!"
                                ref={hamburgerRef}
                                onClick={() => {
                                    handleClick()
                                }}
                            >
                                <span></span>
                            </a>
                        </div>

                        {/* menu */}
                        <ul
                            className={`${styles.navbar__menu__list} ${listOn ? styles.fadeIn : ''} ${fadeOutOn ? styles.fadeOut : ''}`}
                            ref={listRef}
                        >
                            <li>
                                <a href="#works_sec">Works</a>
                            </li>
                            <li>
                                <a href="#about_sec">About</a>
                            </li>
                            <li>
                                <a href="#contact_sec">Contact</a>
                            </li>
                        </ul>
                    </nav>
                </div>
            </section>
        </>
    )
}

export default Navbar
