import React from 'react';
import { Pie } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';

// Registering required components
ChartJS.register(ArcElement, Tooltip, Legend);

const PieChart = ({ data }) => {
    const chartData = {
        labels: data.labels,
        datasets: [
            {
                data: data.values,
                backgroundColor: [
                    '#F9D413',
                    '#144083',
                    '#C4D4FF',
                    '#FFF856',
                    '#9966FF',
                    '#FF9F40',
                ],
                hoverBackgroundColor: [
                    '#F9D413',
                    '#144083',
                    '#C4D4FF',
                    '#FFF856',
                    '#9966FF',
                    '#FF9F40',
                ]
            }
        ]
    };
    const chartOptions = {
        plugins: {
            legend: {
                labels: {
                    font: {
                        size: 10
                    }
                }
            },
            tooltip: {
                bodyFont: {
                    size: 12 
                }
            }
        }
    };

    return <Pie data={chartData} options={chartOptions} />;
};

export default PieChart;
