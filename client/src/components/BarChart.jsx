// BarChart.js
import React, { useEffect, useState } from 'react';
import { Bar } from 'react-chartjs-2';
import { getBarChartData } from '../api';

const BarChart = ({ selectedMonth }) => {
    const [chartData, setChartData] = useState({});
    console.log(chartData);
    
    useEffect(() => {
        const fetchBarChartData = async () => {
            try {
                const data = await getBarChartData(selectedMonth);
            
                const labels = Object.keys(data); 
                const datasets = [{
                    label: 'Number of Transactions',
                    data: Object.values(data),
                    backgroundColor: 'rgba(75, 192, 192, 0.6)',
                }];
                
                setChartData({ labels, datasets });
            } catch (error) {
                console.error("Error fetching bar chart data:", error);
            }
        };

        fetchBarChartData();
    }, [selectedMonth]);

    return (
        // <div>
        //     <h2>Bar Chart</h2>
        //     {chartData.labels ? (
        //         <Bar data={chartData} />
        //     ) : (
        //         <p>Loading chart data...</p>
        //     )}
        // </div>

        <div></div>
    );
};

export default BarChart;
