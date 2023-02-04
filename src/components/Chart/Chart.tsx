import './Chart.css';
import ChartBar from "./ChartBar";

const Chart = (props: any) => {
    const totalMaximum = Math.max(...props.dataPoints.map((dataPoint: any) => dataPoint.value));

    return (
        <div className='chart'>
            {props.dataPoints.map((dataPoint: any) => (
                <ChartBar
                    key={dataPoint.label}
                    value={dataPoint.value}
                    maxValue={totalMaximum}
                    label={dataPoint.label}
                />
            ))}
        </div>
    )
}

export default Chart;