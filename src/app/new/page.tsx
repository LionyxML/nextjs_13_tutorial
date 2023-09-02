import Link from "next/link";

const createTodo = async (data: FormData) => {
  "use server";

  console.log("WHERE AM I?");
};

const Page = () => {
  return (
    <>
      <header className="flex justify-between mb-4 items-center">
        <h1 className="text-2xl">New</h1>
      </header>
      <form action={createTodo} className="flex gap-2 flex-col">
        <input
          type="text"
          name="title"
          className="border border-slate-300 bg-transparent rounded px-2
          py-1 outline-mode focus-within:border-slate-100"
        />
        <div className="flex gap-2 justify-end">
          <Link
            href=".."
            className="border border-slate-300 bg-transparent rounded px-2
            py-1 outline-mode focus-within:border-slate-100"
          >
            Cancel
          </Link>
          <button
            type="submit"
            className="border border-slate-300 bg-transparent rounded px-2
            py-1 outline-mode focus-within:border-slate-100"
          >
            Send
          </button>
        </div>
      </form>
    </>
  );
};

export default Page;
