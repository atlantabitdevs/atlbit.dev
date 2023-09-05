# bitdevs-upgrade

[![Netlify Status](https://api.netlify.com/api/v1/badges/3dabcadd-d728-4a01-b01e-b7a556e40c29/deploy-status)](https://app.netlify.com/sites/bitdevs-upgrade/deploys)

[![Generate AI Summaries](https://github.com/atlantabitdevs/bitdevs-upgrade/actions/workflows/process-event.yml/badge.svg)](https://github.com/atlantabitdevs/bitdevs-upgrade/actions/workflows/process-event.yml)

This is a project to improve the UX of BitDevs websites and add AI generated summaries to help new attendees.

![BitDevs Upgrade](https://github.com/atlantabitdevs/bitdevs-upgrade/raw/main/public/bitdevs-upgrade.jpg)

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

## Upgrading

If you fork this template for your own website, you may want to upgrade the template in the future if there are bug fixes, UX improvements, or new features. You can run `./upgrade.sh` from a CLI shell to upgrade, which will pull down the latest, but ignore content that ia unique to your site.

However, this in't guaranteed to work properly. Before running upgrade.sh, make sure all your changes have been committed. Create a clean branch and run the update their. Check the changes that have been applied when you merge to ensure none of your unique content is overwritten.
