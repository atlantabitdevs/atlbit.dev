import { OpenAI } from 'langchain/llms/openai'
import { loadSummarizationChain } from 'langchain/chains'
import { RecursiveCharacterTextSplitter } from 'langchain/text_splitter'
import { GithubRepoLoader } from 'langchain/document_loaders/web/github'
import { read, readFileSync } from 'fs'

/*
  1. Ingest a markdown file and extract each link.
  2. For each link, read each webpage and summarize it.
  3. Create sumaries at multiple skill levels for each link ("Detailed", "ELI5")
  4. Create a new markdown file with the summaries.
*/
const NYC_BITDEVS = 'https://github.com/BitDevsNYC/BitDevsNYC.github.io'

const loadFromRepo = async () => {
  const loader = new GithubRepoLoader(NYC_BITDEVS, {
    branch: 'main',
    recursive: false,
    unknown: 'warn',
    ignorePaths: ['*.md'],
  })
  const docs = await loader.load()
}

/**
 * Ingest a markdown file and extract each link.
 */
const getLinks = async (markdownPath: string) => {
  const linksRegex = /\[([^\[]+)\](\(.*\))/gm
  const singleMatchRegex = /\[([^\[]+)\]\((.*)\)/
  const file = await readFileSync(markdownPath, 'utf-8')
  const matches = file.match(linksRegex) ?? []
  const links = []
  for (let i = 0; i < matches.length; i++) {
    const match = singleMatchRegex.exec(matches[i])
    if (!match) continue
    links.push({
      full: match[0],
      title: match[1],
      link: match[2],
    })
  }
  return links
}

export async function summarizeWebpage() {
  const model = new OpenAI({ temperature: 0 })
  const textSplitter = new RecursiveCharacterTextSplitter({ chunkSize: 1000 })
  // const docs = await textSplitter.createDocuments([text]);
}

const run = async () => {
  const links = await getLinks('./_posts/2023-06-28-socratic-seminar-125.md')
}
run()
