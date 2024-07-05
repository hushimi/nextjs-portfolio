import React from 'react'
import styles from './contact.module.css'
import { FaGithub } from 'react-icons/fa6'

export default function Contact() {
    return (
        <>
            <div className={styles.contact__wrap}>
                <div className={styles.contact__mail}>
                    <span>MAIL</span>
                    <a href="mailto:mowmow.meganekun@gmail.com">
                        mowmow.meganekun@gmail.com
                    </a>
                </div>
                <div className={styles.contact__sns}>
                    <a
                        href="https://github.com/hushimi"
                        target="_blank"
                        rel="noopener"
                    >
                        <FaGithub />
                    </a>
                </div>
            </div>
        </>
    )
}
