import Head from 'next/head'
import Link from 'next/link'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <>
      <Head>
        <title>Project Manager</title>
        <meta name="description" content="Project Manager app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <h1>Project Manager</h1>
        <hr />
        <form>
          <h2>Name: </h2>
          <input type="text" name="name" id="name" />
          <h2>Username: </h2>
          <input type="text" name="username" id="username" />
          <h2>Password: </h2>
          <input type="text" name="password" id="password" />
          <br />
          <Link href="/projects" as={`/projects`} passHref >
          <button type="submit">Signup</button>
          </Link>
        </form>
      </main>
    </>
  )
}
