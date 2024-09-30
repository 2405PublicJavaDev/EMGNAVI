import { useState, useEffect } from 'react';
import axios from 'axios';

const useAxios = (config) => {
    const { url, method = 'GET', data = null } = config;
    const [response, setResponse] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);

    const fetchData = async () => {
        try {
            const res = await axios({method, url, data});
            setResponse(res.data);
        } catch (err) {
            console.log(err);
            setError(err);
        } finally {
            setLoading(false);
        }
    };

    return { response, error, loading, fetchData };
}

export default useAxios;