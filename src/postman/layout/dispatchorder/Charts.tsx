import PostmanBarChart from "../../chart/PostmanBarChart.tsx";
import {PostmanSummary} from "../../types/postmanSummary.ts";
import logspace from './../../../assets/elastic/dispatchorder/logspace.postman_test_run.json';
import elastic from './../../../assets/elastic/dispatchorder/elastic.postman_test_run.json';

const Charts = () => {
    return (
        <div>
            <PostmanBarChart summary={logspace as PostmanSummary}/>
            <PostmanBarChart summary={elastic as PostmanSummary}/>
        </div>
    );
};

export default Charts;
