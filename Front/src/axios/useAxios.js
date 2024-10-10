import { useState, useEffect } from 'react';
import axios from 'axios';

const useAxios = () => {
    const [response, setResponse] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);

    const fetchData = async (config, callback) => {
        try {
            const res = await axios(config);
            setResponse(res.data.data);
            if (res.data.status == 200 || res.data.status == 201) {
                if (callback) callback(res.data);
            } else {
                alert(`${res.data.status} | ${res.data.error}\n${res.data.message}\n에러코드 ${res.data.code}`);
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
            alert('[망함] 서버가 터졌다!');
        } finally {
            setLoading(false);
        }
    };

    return { response, error, loading, fetchData };
}

export default useAxios;
