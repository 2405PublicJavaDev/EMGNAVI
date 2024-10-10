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
            alert('[망함] 서버가 터졌다!');
        } finally {
            setLoading(false);
        }
    };

    return { response, error, loading, fetchData };
}

export default useAxios;
