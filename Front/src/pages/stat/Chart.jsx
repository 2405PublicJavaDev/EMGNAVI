import React, { useEffect, useState } from "react";
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
);

function Chart({ searchType, statType, keyword }) {

    const rootUrl = "http://127.0.0.1:8888";

    const [chartData, setChartData] = useState([]);
    // const [chartData, setChartData] = useState([
    //     { "x": "2024-10-01", "y": 45 },
    //     { "x": "2024-10-02", "y": 38 },
    //     { "x": "2024-10-03", "y": 50 },
    //     { "x": "2024-10-04", "y": 60 },
    //     { "x": "2024-10-05", "y": 47 },
    //     { "x": "2024-10-06", "y": 42 },
    //     { "x": "2024-10-07", "y": 55 }
    // ]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(
                    `${rootUrl}/api/stat/getEmergencyStat?searchType=${searchType}&statType=${statType}${keyword ? `&keyword=${keyword}` : ""}`
                );
                // `http://127.0.0.1:8888/api/stat/getEmergencyStat?statType=APDW&hpid=A1100001`
                const json = await response.json();
                setChartData(json.data);
            } catch (error) {
                console.log("Error :", error);
            }
        };
        fetchData();
        console.log(chartData);
    }, []);

    const options = {
        responsive: true,
        plugins: {
            legend: {
                position: "top",
            },
            title: {
                display: true,
                text: "잔여 응급병상 요일별 평균",
            },
        },
    };

    let labels = [];
    if (chartData.length > 0) {
        labels = chartData.map((data) => data.x);
    }

    const data = {
        labels,
        datasets: [
            {
                label: "잔여 응급병상 평균",
                data: chartData.map((data) => data.y),
                borderColor: "rgb(255, 99, 132)",
                backgroundColor: "rgba(255, 99, 132, 0.5)",
            },
        ],
    };
    return (
        <div>
            {chartData.length > 0 && <Line options={options} data={data} />}
        </div>
    );
}

export default Chart;