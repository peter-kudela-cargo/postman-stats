import {axisClasses, BarChart} from "@mui/x-charts";
import {PostmanSummary} from "../types/postmanSummary.ts";
import {PostmanRunnerAnalyzer} from "../types/postmanChart.ts";

const PostmanBarChart = ({summary}: { summary: PostmanSummary }) => {
    const analyzer = new PostmanRunnerAnalyzer(summary);
    return (
        <div>
            <BarChart
                width={600}
                height={300}
                series={[
                    {data: analyzer.data.minimums, label: 'min', id: 'min', stack: 'min'},
                    {data: analyzer.data.averages, label: 'avg', id: 'avg', stack: 'avg'},
                    {data: analyzer.data.maximums, label: 'max', id: 'max', stack: 'max'},
                ]}
                xAxis={[{data: analyzer.data.xLabels, scaleType: 'band', label: 'request'}]}
                yAxis={[{label: 'Millisecond'}]}
                grid={{horizontal: true}}
                margin={{left: 70, right: 70}}
                sx={{
                    [`.${axisClasses.left} .${axisClasses.label}`]: {
                        transform: 'translate(-25px, 0)',
                    },
                }}
            />
        </div>
    );
};

export default PostmanBarChart;
