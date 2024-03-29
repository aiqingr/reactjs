import React from 'react';

import ChartBar from './ChartBar';
import './Chart.css'

const Chart = props => {
    const dataPointsValues = props.dataPoints.map(dataPoint => dataPoint.value);
    const totalMaxValue = Math.max(...dataPointsValues);

    return <div className='chart'>
        {props.dataPoints.map(dataPoint => 
            <ChartBar 
                value={dataPoint.value}
                key={dataPoint.label}
                maxValue={totalMaxValue}
                label={dataPoint.label}
            />
        )}
    </div>
}

export default Chart;