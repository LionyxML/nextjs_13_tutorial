import prisma from "@/db";
import Link from "next/link";

export default async function Home() {
  const todos = await prisma.todo.findMany();

  return (
    <>
      <header className="flex justify-between mb-4 items-center">
        <h1 className="text-2xl">TODOs</h1>
        <Link
          className="border border-slate-300 text-slate-300
        px-2 py-1 rounded hover:bg-slate-700 focus-within:bg-slate-700
        outline-mode"
          href="/new"
        >
          New
        </Link>
      </header>
      <ul className="pl-4">
        {todos.map((todo) => (
          <li key={todo.id}>{todo.title}</li>
        ))}
      </ul>
    </>
  );
}
