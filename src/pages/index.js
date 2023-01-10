import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '../../styles/Home.module.css'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Pretty Potties</title>
        <link rel="icon" href="/public/favicon.ico" />
      </Head>
      <main className={styles.main}>



      </main>
    </>
  )
}
