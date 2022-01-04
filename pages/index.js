import Head from "next/head";
import Image from "next/image";

import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <>
      <Head>
        <title>Página Principal</title>
        <meta name="keywords" content="Roupas, Calcados, Bones" />
        <meta name="description" content="Encontre a melhor roupa para voce" />
      </Head>
      <div>
        <h1 className={styles.title}>Hello World!</h1>
        <Image
          src="/images/parede.jpg"
          width="400px"
          height="400px"
          alt="Parede"
        />
      </div>
    </>
  );
}
