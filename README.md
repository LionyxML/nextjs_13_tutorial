# nextjs_13_tutorial

A quick nextjs 13 tutorial

This repo contains the project already done, to follow how it was
implemented use the "Guide" and navigate the git commit history.

### Installing and Running

Clone this repo.

Run npm install:

```bash
npm install
```

Create on project root folder a `.env` file with:

```bash
DATABASE_URL="file:./dev.db"
```

Create the prisma client and run migrations:

```bash
npx prisma generate
npx prisma migrate dev
```

Start the server:

```bash
npm run dev
```

Access the app via the given URL.

### Study Guide

This project was inited with:

```
npx create-next-app@latest .
```

Selected all we wanted: Typescript, tailwind, src, eslint, and all
defaults.

---

Prisma as our ORM:

```
npm i prisma --save-dev
npx prisma init --datasource-provider sqlite
```

Add .env and .db\* to .gitignore.

Add model to `schema.prisma`.

Migrate:

```
npx prisma migrate dev --name init
```

---

Optionally query the DB with some external tool

---

Add /src/db.ts following the guideline:
https://www.prisma.io/docs/guides/other/troubleshooting-orm/help-articles/nextjs-prisma-client-dev-practices

---

Cleanup `globals.css` and page.tsx

Editing `layouts.tsx`.

Create new route by adding a folder with route name and a page.tsx
inside it. (Ex.: new/page/tsx)

We changed /page.tsx to add a Link and then you see that the link
occurs on the client after first loaded. No requests to server.

Add todos from prisma client and we see it querying on the server
side. (As long as we don't have any useEffect, useState, or onChange,
it runs on the server).

We can add some data with something like:

```ts
await prisma.todo.create({
  data: {
    title: "hello there!",
    complete: false,
  },
});
```

We can see then data being written on the source-code of the page.
(Not on Network, we'll see why...)

Some rework of separating the fetch on a separated funcion would be nice.

---

Create the TodoItem.tsx inside a components/ folder. Make everything look
ok and "work". See it on the browser, take a note as the "checked" prop is
not really persistent by refreshing the browser.

We will first make the "New" form work an then come back to see how to make
this work.

Now we improve our new/page.tsx creating the form and defining classes
to make it look ok. By the end whe can try to send the form but no
action will be done by the server since we haven't hooked this up to
any kind of server action.

---

We now try to create a function inside new/page.tsx to handle the form.
Just for testing if this is an server action.

```ts
const createTodo = async (data: FormData) => {
  "use server";

  console.log("WHERE AM I?");
};
```

Saving it and running will make NextJS complain it is experimental.

We need to fix it on next.config.js with:

```js
const nextConfig = {
  experimental: {
    serverActions: true,
  },
};
```

Restart the server.

On the form where usually action="/new" we will pass
action={createTodo}.

Now we can test it on browser and see nothing on console. On network
our POST is now being sent.

On server console, the log occurs!

---

Now we complete the createTodo function to get data from the form,
validate it and save to the database.

Everything is done by the server what makes the client run cleaner.

---

Now we want to syncrhonize the state of our Todo Items.

Inside TodoItem.tsx we complete the defaultChecked and after the
onChange event pointing to a new function toggleTodo. We will pass
this trought a prop so we need to type it also.

Inside the main page add <... toggleTodo={toggleTodo}> and create a
simple toggleTodo skel function with "use server" no more typescript
errors but an error on nextjs. It will complain <TodoItem> must be
rendered on the server because we used an event on Change.

We can than console.log id and complete on toggle and see this working.

Note: we cannot redirect nothing on this function, since its called
from a client component. It will issue an error.

Finally we make an "update" to the DB.

DONE.

### Homework

Make an button that deletes the task.
