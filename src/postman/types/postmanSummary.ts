export interface PostmanSummary {
    id: string;
    name: string;
    timestamp: string;
    collection_id: string;
    folder_id: string;
    environment_id: string;
    totalPass: number;
    delay: number;
    persist: boolean;
    status: string;
    startedAt: string;
    totalFail: number;
    results: Result[];
    count: number;
    totalTime: number;
    collection: Collection;
}

interface Result {
    id: string;
    name: string;
    url: string;
    time: number;
    responseCode: ResponseCode;
    tests: Record<string, unknown>;
    testPassFailCounts: Record<string, unknown>;
    times: number[];
    allTests: Record<string, unknown>[];
}

interface ResponseCode {
    code: number;
    name: string;
}

interface Collection {
    requests: Request[];
}

interface Request {
    id: string;
    method: string;
}
