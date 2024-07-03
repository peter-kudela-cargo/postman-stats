import {PostmanSummary} from "./postmanSummary.ts";

export interface PostmanRunnerChart {
    xLabels: string[],
    minimums: number[],
    maximums: number[],
    averages: number[]
}

export class PostmanRunnerAnalyzer {

    private readonly _data: PostmanRunnerChart;

    constructor(config: PostmanSummary) {
        this._data = {
            xLabels: config.results.map(r => r.name),
            minimums: config.results.map(r => Math.min(...r.times)),
            maximums: config.results.map(r => Math.max(...r.times)),
            averages: config.results.map(r => r.time)
        }
    }

    get data(): PostmanRunnerChart {
        return this._data;
    }

}



