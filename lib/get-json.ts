import { join } from 'path'
import { readFileSync } from 'fs'

type Args = {
  fileName: string
}

export type ParsedData = {
  summary: {
    summary: string
    summaryeli15: string
    title: string
    link: string
  }[]
}

const getJsonFile = async (args: Args) => {
  try {
    const path = join(process.cwd(), 'summaries', `${args.fileName}.json`)

    const data = readFileSync(path, 'utf-8')
    const parsedData: ParsedData = JSON.parse(data)

    return parsedData
  } catch (err: any) {
    console.error(err.message)
    return undefined
  }
}

export default getJsonFile
