import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Dev Reviews - GAMIFIED LEARN-TO-CODE PLATFORM</title>
        <meta
          name="description"
          content="Make it fun and easy for new developers to learn to code through code reviews"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <div>
          <Image
            src="/devrev.png"
            alt="DevRev explanation"
            layout="fill"
            objectFit="contain"
          />
        </div>
      </main>
    </div>
  );
};

export default Home;
