import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Index = () => {
    const [data, setData] = useState([]);

    // 백엔드에서 데이터 가져오기
    const fetchNews = async () => {
        try {
            const response = await axios.get('/api/news');
            setData(response.data.items); // items 배열이 포함된 경우
        } catch (error) {
            console.error('Error fetching news:', error);
        }
    };

    useEffect(() => {
        fetchNews(); // 컴포넌트가 렌더링되면 뉴스 데이터를 가져옴
    }, []);

    return (
        <div className="fixed top-4 right-4 bg-white shadow-lg rounded-lg p-4 w-80 z-50">
            <h1 className="text-lg font-bold text-center mb-2">병원 관련 뉴스</h1>
            {data.length > 0 ? (
                data.map((item, index) => (
                    <div key={index} className="mb-2">
                        <h2 className="text-sm font-semibold">{item.title}</h2>
                        <p className="text-xs text-gray-600">{item.description}</p>
                        <a href={item.link} target="_blank" rel="noopener noreferrer" className="text-xs text-blue-500 hover:underline">Read more</a>
                    </div>
                ))
            ) : (
                <p className="text-xs text-gray-500 text-center">Loading...</p>
            )}
        </div>

    );
};

export default Index;