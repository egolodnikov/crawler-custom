import {defaultConfig} from "../config.js";
import {crawl, write} from "./core.js";
import {v4 as uuid} from 'uuid';


const url = "https://www.tinkoff.ru/bank/help/credit-cards/all-airlines/"
const match = "https://www.tinkoff.ru/bank/help/credit-cards/all-airlines/**"
const id: string = uuid();

export async function crawlerFabric(url: string, match: string) {
    defaultConfig.url = url;
    defaultConfig.match = match
    defaultConfig.outputFileName = `${id}.json`

    crawl(defaultConfig)
}

export async function writeFabric() {
    defaultConfig.outputFileName = `${id}.json`

    write(defaultConfig)
    console.log(id)
    return id
}

await crawlerFabric(url, match);
await writeFabric();
