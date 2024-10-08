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
// import { useRecoilState } from "recoil";
// import { urlState } from "../../src/recoilState";

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
);

function Chart() {
    // const [rootUrl, setRootUrl] = useRecoilState(urlState);
    const [chatData, setChatData] = useState([
        { "x": "2024-10-01", "y": 45 },
        { "x": "2024-10-02", "y": 38 },
        { "x": "2024-10-03", "y": 50 },
        { "x": "2024-10-04", "y": 60 },
        { "x": "2024-10-05", "y": 47 },
        { "x": "2024-10-06", "y": 42 },
        { "x": "2024-10-07", "y": 55 }
    ]);

    // useEffect(() => {
    //     const fetchData = async () => {
    //         try {
    //             const response = await fetch(
    //                 `${rootUrl}/admin/dashboard/lastweek`
    //             );
    //             const json = await response.json();
    //             setChatData(json.data);
    //         } catch (error) {
    //             console.log("Error :", error);
    //         }
    //     };
    //     fetchData();
    //     console.log(chatData);
    // }, []);

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
    if (chatData.length > 0) {
        labels = chatData.map((data) => data.x);
    }

    const data = {
        labels,
        datasets: [
            {
                label: "잔여 응급병상",
                data: chatData.map((data) => data.y),
                borderColor: "rgb(255, 99, 132)",
                backgroundColor: "rgba(255, 99, 132, 0.5)",
            },
        ],
    };
    return (
        <div>
            {chatData.length > 0 && <Line options={options} data={data} />}
        </div>
    );
}

export default Chart;