import TodoItem from "@/components/TodoItem";
import prisma from "@/db";
// import { revalidatePath } from "next/cache";
import Link from "next/link";
import { useRouter } from "next/navigation";

const getTodos = () => prisma.todo.findMany();

const toggleTodo = async (id: string, complete: boolean) => {
  "use server";

  await prisma.todo.update({
    where: {
      id,
    },
    data: { complete },
  });
};

const deleteTodo = async (id: string) => {
  "use server";

  await prisma.todo.delete({
    where: {
      id,
    },
  });

  // redirect("/") // won't work because of caching
  // revalidatePath("/");
};

export default async function Home() {
  const todos = await getTodos();

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
          <TodoItem
            key={todo.id}
            toggleTodo={toggleTodo}
            deleteTodo={deleteTodo}
            {...todo}
          />
        ))}
      </ul>
    </>
  );
}
