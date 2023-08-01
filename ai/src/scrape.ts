import axios from 'axios';
import { load } from 'cheerio';
import sanitizeHtml from 'sanitize-html';

type Args = {
  url: string;
};

type Return = {
  text: string;
  title: string;
};

const scrape = async ({ url }: Args): Promise<Return> => {
  try {
    // Make an HTTP GET request to the URL
    const response = await axios.get(url);
    const html = response.data;

    // Use cheerio to parse the HTML and extract text content
    const $ = load(html);

    const title = $('title').text();

    const paragraphs = $('p')
      .map((index, element) => {
        let text = $(element).text();
        text = sanitizeHtml(text, { allowedTags: [] }); // Strips out all HTML tags
        text = text.replace(/^\s*[>]+/gm, '').trim(); // Removes '>' and '>>' from the beginning of each line
        text = text.replace(/\s+/g, ' ').trim(); // Removes excessive whitespace
        return text;
      })
      .get()
      .filter(n => !!n)
      .filter(text => text.length > 50 && text.length < 500) // Filters out too short or too long paragraphs
      .join('\n');

    const preTags = $('pre')
      .map((index, element) => {
        let text = $(element).text();
        text = sanitizeHtml(text, { allowedTags: [] }); // Strips out all HTML tags
        text = text.replace(/^\s*[>]+/gm, '').trim(); // Removes '>' and '>>' from the beginning of each line
        text = text.replace(/\s+/g, ' ').trim(); // Removes excessive whitespace
        return text;
      })
      .get()
      .filter(n => !!n)
      .join('\n');

    if (!paragraphs && !preTags) {
      return { title, text: '' };
    }

    const scrapedText = [paragraphs, preTags].join('\n\n');

    return { title, text: scrapedText };
  } catch (error: any) {
    console.error('Error occurred during scraping:', error.message);
    return { title: '', text: '' };
  }
};

export default scrape;
