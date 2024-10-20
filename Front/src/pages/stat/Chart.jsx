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

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(
                    `${rootUrl}/api/stat/getEmergencyStat?searchType=${searchType}&statType=${statType}${keyword ? `&keyword=${keyword}` : ""}`
                );
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
                text: (searchType === 'dutyName' ? "" : "지역 ") + "잔여 응급병상 "+ (statType === 'DOW' ? "요일별" : statType === 'HOD' ? "시간별" : "요일 오전/오후별") + (searchType === 'dutyName' ? " 평균" : " 합계"),
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
                label: searchType === 'dutyName' ? "잔여 응급병상 평균" : "지역 응급병상 합계",
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