import { useState } from 'react';
import axios from 'axios';

const useAxios = () => {
    const [response, setResponse] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);

    const fetchData = async (config, callback) => {
        setLoading(true);
        setError(null);
        try {
            const res = await axios(config);
            // console.log("API Response:", res); // 응답 로깅
            setResponse(res.data);
            if (res.status >= 200 && res.status < 300) {
                if (callback) callback(res.data);
            } else {
                throw new Error(`HTTP error! status: ${res.status}`);
            }
        } catch (err) {
            // console.error("API Error:", err); // 에러 로깅
            setError(err);
            if (err.response) {
                // 서버 응답이 있는 경우
                // alert(`Error: ${err.response.status}\n${err.response.data.message || 'Unknown error'}`);
            } else if (err.request) {
                // 요청이 이루어졌으나 응답이 없는 경우
                // alert('No response received from server. Please try again later.');
            } else {
                // 요청 설정 중 오류가 발생한 경우
                // alert('Error setting up the request. Please try again.');
            }
        } finally {
            setLoading(false);
        }
    };

    return { response, error, loading, fetchData };
}

export default useAxios;