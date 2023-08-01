import * as dotenv from 'dotenv';

import { Configuration, OpenAIApi } from 'openai';
import { ScrapedDataResults, SummaryResults } from './types';
import { auto, mapLimit } from 'async';

import getScrapedData from './get_scraped_data';
import writeSummary from './write_summary';

dotenv.config();

const model = 'gpt-3.5-turbo-16k';

type Tasks = {
  initAi: {
    openai: OpenAIApi;
  };
  getScrapedData: {
    results: ScrapedDataResults[];
    summaryPath: string;
  };
  summarize: SummaryResults;
};

const main = async () => {
  try {
    return await auto<Tasks>({
      initAi: async () => {
        const configuration = new Configuration({
          apiKey: process.env.OPENAI_API_KEY,
        });

        const openai = new OpenAIApi(configuration);

        return { openai };
      },

      getScrapedData: [
        'initAi',
        async ({}) => {
          const { results, summaryPath } = await getScrapedData({});

          return { results, summaryPath };
        },
      ],

      summarize: [
        'getScrapedData',
        'initAi',
        async ({ getScrapedData, initAi }) => {
          const aiResults = async (summary: ScrapedDataResults) => {
            try {
              const aiCompletion = await Promise.all([
                initAi.openai.createChatCompletion({
                  model,
                  messages: [
                    {
                      role: 'user',
                      content: `Can you summarize the text after the asterisk for me? Use no more than 160 words. Split into paragraphs where appropriate. Do not mention the asterisk. * \n ${summary.text}`,
                    },
                  ],
                }),
                initAi.openai.createChatCompletion({
                  model,
                  messages: [
                    {
                      role: 'user',
                      content: `Can you summarize the text after the asterisk for me? Use no more than 100 words. Split into paragraphs where appropriate. Write it for a reader that may not be familiar with the technical jargon in the original text. Assume the reader is 15. Do not mention the asterisk. * ${summary.text} `,
                    },
                  ],
                }),
              ]);
              const chatCompletion = aiCompletion[0].data.choices[0].message?.content || 'No summary generated';
              const chatCompletionEli15 = aiCompletion[1].data.choices[0].message?.content || 'No summary generated';
              return {
                summary: chatCompletion,
                summaryeli15: chatCompletionEli15,
                title: summary.title,
                link: summary.link,
              } as SummaryResults;
            } catch (err: any) {
              console.error(`Summarization failed for ${summary.title} \n`);
              console.log(err.response.data);
            }
          };
          const results = (await mapLimit(getScrapedData.results, 3, aiResults)).filter(
            (result): result is SummaryResults => result !== undefined
          );
          await writeSummary({ path: getScrapedData.summaryPath, data: results });
        },
      ],
    });
  } catch (err: any) {
    throw err.message;
  }
};

main();
