import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

function Header() {
  return (
    <Head>
      <title>Create Next App</title>
      <meta name="description" content="Generated by create next app" />
      <link rel="icon" href="/favicon.ico" />
    </Head>
  );
}

const resources = {
    Documentation: [
      "https://nextjs.org/docs",
      "Find in-depth information about Next.js features and API.",
    ],
    Learn: [
      "https://nextjs.org/learn",
      "Learn about Next.js in an interactive course with quizzes!",
    ],
    Example: [
      "https://github.com/vercel/next.js/tree/canary/examples",
      "Discover and deploy boilerplate example Next.js projects.",
    ],
    Deploy: [
      "https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app",
      "Instantly deploy your Next.js site to a public URL with Vercel.",
    ],
  };

function Body() {
  return (
    <main className={styles.main}>
      <h1 className={styles.title}>
        Welcome to <a href="https://nextjs.org">Next.js!</a>
      </h1>

      <p className={styles.description}>
        Get started by editing{" "}
        <code className={styles.code}>pages/index.js</code>
      </p>

      <div className={styles.grid}>
        {Object.keys(resources).map(key => (
          <a href={resources[key][0]} className={styles.card}>
            <h2>{key} {'\u2192'}</h2>
            <p>{resources[key][1]}</p>
          </a>
        ))}
      </div>
    </main>
  );
}

function Footer() {
  return (
    <footer className={styles.footer}>
      <a
        href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
        target="_blank"
        rel="noopener noreferrer"
      >
        Powered by{" "}
        <span className={styles.logo}>
          <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
        </span>
      </a>
    </footer>
  );
}

export default function Home() {
  return (
    <div className={styles.container}>
      <Header />
      <Body />
      <Footer />
    </div>
  );
}
