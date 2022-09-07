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

const vercel = require("./resources.json");

function OptionCard(item) {
  const entry = item.list
  return (
    <a href={entry.link} className={styles.card}>
      <h2>
        {entry.type} {"\u2192"}
      </h2>
      <p>{entry.desc}</p>
    </a>
  );
}

function Body() {
  const data = vercel.resources
  return (
    <main className={styles.main}>
      <h1 className={styles.title}>
        Welcome to <a href="https://nextjs.org">Next.js!</a>
      </h1>
      <p className={styles.description}>
        Get started by editing{" "}
        <a href="./pages/newIndex.js">pages/newIndex.js</a>
      </p>
      <div className={styles.grid}>
        {data.map((entry) => (
          <OptionCard list={entry}/>
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
