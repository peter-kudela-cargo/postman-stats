import PostmanBarChart from "../../chart/PostmanBarChart.tsx";
import {PostmanSummary} from "../../types/postmanSummary.ts";
import summaryLogspace from './../../../assets/elastic/dispatchorder/logspace.postman_test_run.json';

const Charts = () => {
    return (
        <div>
            <PostmanBarChart summary={summaryLogspace as PostmanSummary}/>
        </div>
    );
};

export default Charts;
