## Scrapes for links inside markdown files and summerizes them.

### How it works:

- Add a mark down file that you want to summerize inside the events folder.
- Markdown file must be named like this `new-event-yyyy-mm-dd.md`. Example: `new-event-2023-06-15.md`.
- Only the markdown file with the latest date with be summerized.
- Inside the markdown file anything above `### Mailing Lists` will be stripped away like meetup links, announcements etc because there is no use summerizing them.
- Once you commit the file and push to the `main` branch, the github action will trigger and submit a PR to the main branch with the summery file.
- [Check this out](https://github.com/niteshbalusu11/bitdevs-ai-scraper/blob/main/summaries/summary-2023-07-25.md) as an example after a file is summerized.
- Summerized files are placed under `summeries` directory if you merge the pull request. Example summary file would like `summary-2023-06-15.md`
- [Example pull request](https://github.com/niteshbalusu11/bitdevs-ai-scraper/pull/12)

### For the github action to work you will need to add two repository secrets

```
# Your open AI API key
OPENAI_API_KEY

# Your github access token, create one in settings on your profile and
give the token necessary permissions for committing and submitting pull requests

GH_TOKEN
```

### Running it locally

```
# Clone the repo
git clone https://github.com/niteshbalusu11/bitdevs-ai-scraper.git

# Change directory
cd bitdevs-ai-scraper

# Add a .env file
touch .env

# Add your Open AI API key inside the file
OPENAI_API_KEY=your_api_key


# Install dependencies
yarn install

# Local dev server
yarn dev

# For building and starting for production
yarn start
```
