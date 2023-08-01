import { ScrapedDataResults } from './types';
import getLinks from './get_links';
import { map } from 'async';
import path from 'path';
import { readdirSync } from 'fs';
import scrape from './scrape';

type Link = {
  full: string;
  title: string;
  link: string;
};

const getScrapedData = async ({}) => {
  try {
    const eventsDir = path.join(__dirname, '../', '../', 'content', 'events');

    const files = readdirSync(eventsDir);

    // Filter files that start with a date in the format yyyy-mm-dd
    const dateRegex = /^\d{4}-\d{2}-\d{2}/;
    const newEventFiles = files.filter(file => dateRegex.test(file) && file.endsWith('.md'));

    if (!newEventFiles.length) {
      throw new Error('No event files found');
    }

    // Sort the files based on the date in their filenames
    newEventFiles.sort((a, b) => {
      // Extract the dates from the filenames
      const matchA = a.match(dateRegex);
      const matchB = b.match(dateRegex);

      const dateA = matchA ? matchA[0] : '';
      const dateB = matchB ? matchB[0] : '';

      // Compare the dates lexicographically
      return dateB.localeCompare(dateA);
    });

    const mostRecentEvent = newEventFiles[0];

    const eventPath = path.join(eventsDir, mostRecentEvent);

    const summaryPath = path.join(__dirname, '../', '../', 'summaries', mostRecentEvent.replace('.md', '.json'));

    const links = await getLinks({
      path: eventPath,
    });

    const results: ScrapedDataResults[] = (await map(links, scrapeFiles)).filter(n => !!n.text && !!n.title);

    return { results, summaryPath };
  } catch (err) {
    throw err;
  }
};

const scrapeFiles = async (link: Link) => {
  const { text } = await scrape({ url: link.link });

  return { text, title: link.title, link: link.link };
};

export default getScrapedData;
