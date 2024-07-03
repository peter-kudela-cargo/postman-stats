import {BarChart} from "@mui/x-charts";
import config from './assets/LOGISTICS.postman_test_run.json';

function App() {


    const xLabels = config.results.map(value => value.name);
    const minData = config.results.map(value => Math.min(...value.times));
    const maxData = config.results.map(value => Math.max(...value.times));
    const avgData = config.results.map(value => value.time);

    return (
        <>
            <BarChart
                width={500}
                height={300}
                series={[
                    {data: minData, label: 'min', id: 'min', stack: 'min'},
                    {data: maxData, label: 'max', id: 'max', stack: 'max'},
                    {data: avgData, label: 'avg', id: 'avg', stack: 'avg'},
                ]}
                xAxis={[{data: xLabels, scaleType: 'band'}]}
            />
        </>
    )
}

export default App
