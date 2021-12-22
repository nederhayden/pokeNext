import Head from "next/head";
import Link from "next/link";

export default function Contact() {
  return (
    <>
      <Head>
        <title>Contato</title>
      </Head>
      <div>
        <h1>Contato</h1>
        <Link href="/">
          <a>Voltar</a>
        </Link>
      </div>
    </>
  );
}
