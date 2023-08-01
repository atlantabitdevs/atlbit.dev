# bitdevs-upgrade

[![Netlify Status](https://api.netlify.com/api/v1/badges/3dabcadd-d728-4a01-b01e-b7a556e40c29/deploy-status)](https://app.netlify.com/sites/bitdevs-upgrade/deploys)

This is a project to improve the UX of BitDevs websites and add AI generated summaries to help new attendees.

## AI Scraper and Summarizer

[How to setup repository secrets](https://docs.github.com/en/actions/security-guides/encrypted-secrets)

- Add repository secret `OPENAI_API_KEY` -> your Open AI API Key
- Add repository secret `GH_TOKEN` -> A github access token with enough access to commit files and submit a PR
- These secrets will enable the github action to summarize the event markdown files using OpenAI.
- The `ai` directory is independent from the website and runs and builds separately. If you want to run it locally:

```
cd ai

# Make a .env file inside the ai directory and add your OPENAI_API_KEY

yarn install

yarn start
```

- It will pick markdown files inside `content/events` directory starting with a date in `yyyy-mm-dd`.
- Only the most recent file sorted by date will be summarized.
- Once the Github action finishes the building the summary, it will submit a PR to the repo. If the PR is merged, the repo builds and deploys to production and summaries are visible on the website.

## Figma Design

Follow design work here: https://www.figma.com/file/4bV8cJBpreCpWwJ55uk9Rb/BitDevs-Upgrade?type=design&node-id=7%3A10&mode=design&t=Wz7ivmd0ZRi69Vqx-1

## Frontend Template

The frontend is a NextJS website. See below for NextJS details.

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
