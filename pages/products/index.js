import Link from "next/link";
import Navbar from "../../components/Navbar";

export default function Products() {
  return (
    <>
      <Navbar />
      <h1>Products</h1>
      <Link href="/">
        <a>Voltar</a>
      </Link>
    </>
  );
}
