import {BarChart} from "@mui/x-charts";
import {PostmanSummary} from "../types/postmanSummary.ts";
import {PostmanRunnerAnalyzer} from "../types/postmanChart.ts";

const PostmanBarChart = ({summary}: { summary: PostmanSummary }) => {
    const analyzer = new PostmanRunnerAnalyzer(summary);
    return (
        <div>
            <BarChart
                width={500}
                height={300}
                series={[
                    {data: analyzer.data.minimums, label: 'min', id: 'min', stack: 'min'},
                    {data: analyzer.data.averages, label: 'avg', id: 'avg', stack: 'avg'},
                    {data: analyzer.data.maximums, label: 'max', id: 'max', stack: 'max'},
                ]}
                xAxis={[{data: analyzer.data.xLabels, scaleType: 'band'}]}
            />
        </div>
    );
};

export default PostmanBarChart;
