import React from 'react';
import { Chart } from "react-google-charts";

const chartEvents = [
    {
        eventName: "select",
        callback({ chartWrapper }) {
            console.log("Selected ", chartWrapper.getChart().getSelection());
        }
    }
];
const data =
    [
        ['Task', 'Hours per Day'],
        ['Started', 11],
        ['Not Started', 2],
        ['Completed', 2],
        ['Waiting ', 2],
        ['Cancelled', 7],
    ];

const options = {
    title: 'Project Task Details',

};
const PieChart = () => {
    return (
<div className="" >
        <Chart
            width={'800px'}
            height={'500px'}
            chartType="PieChart"
            loader={<div>Loading Chart</div>}
            data={data}
            options={options}
            rootProps={{ 'data-testid': '1' }}
            chartEvents={chartEvents}

        />
        </div>
    );


}
export default PieChart;