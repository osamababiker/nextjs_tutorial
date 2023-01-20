import Head from 'next/head'
import styles from '../styles/Home.module.css';
import Link from 'next/link';
import { useRouter } from 'next/router';

export default function Home() {

  const router = useRouter();
  const handelClick = () => {
    router.push("/docs");
  }
  return (
    <div className={styles.container}>
      <Head>
        <title>GitStartup</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1 className={styles.title}>
          <Link href="/blog" className='hdh' replace>
            Blog
          </Link>
        </h1>
        <button type="button" onClick={handelClick}>Go to Docs</button>
      </main>

    </div>
  )
}