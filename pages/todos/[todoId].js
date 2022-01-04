import Link from "next/link";
import { useRouter } from "next/router";

export default function Todo() {
  const router = useRouter();
  const todoId = router.query.todoId;

  return (
    <>
      <Link href="/">
        <a>Voltar</a>
      </Link>
      <h1>Exibindo o todo: {todoId}</h1>
      <p>
        Comentario: texto...
        <Link href={`/todos/${todoId}/comments/1`}>
          <a>Detalhes</a>
        </Link>
      </p>
    </>
  );
}
