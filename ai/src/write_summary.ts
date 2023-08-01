import { SummaryResults } from './types';
import { writeFileSync } from 'fs';
const defaultSummary = { summary: [{ title: '', link: '', summary: '', eli5: '' }] };

const stringify = (n: WriteData) => JSON.stringify(n, null, 2);

type Args = {
  path: string;
  data: SummaryResults[];
};

type WriteData = {
  summary: SummaryResults[];
};

const writeSummary = async ({ path, data }: Args) => {
  try {
    const writeData = {
      summary: data,
    };

    writeFileSync(path, stringify(writeData));
  } catch (err) {
    throw err;
  }
};

export default writeSummary;
