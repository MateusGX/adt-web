import React from 'react'
import styles from '../styles/History.module.css'
import Link from 'next/link'

export default function History(props) {
    return (
        <article className={styles.card}>
            <Link href={`/${props.slug}`}><a className={styles.title}>{props.title}</a></Link>
            <p className={styles.excerpt}>{props.excerpt}</p>
            <Link href={`/${props.slug}`}><a className={styles.btn}>Ler História</a></Link>
            <hr />
        </article>
    );
}