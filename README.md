# nextjs_13_tutorial
A quick nextjs 13 tutorial

This repo contains the project already done, to follow how it was
implemented use the "Guide" and navigate the git commit history.


# Guide
This project was inited with:
```
npx create-next-app@latest .
```

Selected all we wanted: Typescript, tailwind, src, eslint, and all defaults.


Prisma as our ORM:
```
npm i prisma --save-dev
npx prisma init --datasource-provider sqlite
```

Add .env  and .db* to .gitignore.

Add model to `schema.prisma`.

Migrate:
```
npx prisma migrate dev --name init
```

Add /src/db.ts following the guideline:
https://www.prisma.io/docs/guides/other/troubleshooting-orm/help-articles/nextjs-prisma-client-dev-practices


Cleanup `globals.css` and page.tsx


Editing `layouts.tsx`.

Create new route by adding a folder with route name and a page.tsx inside it.
(Ex.: new/page/tsx)



