import { useState, useEffect } from 'react';
import axios from 'axios';

const useAxios = () => {
    const [config, setConfig] = useState(null);
    const [response, setResponse] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);
    
    const fetchData = async () => {
        try {
            const res = await axios(config);
            setResponse(res.data);
        } catch (err) {
            setError(err);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        if (config) {
            fetchData();
        }
    }, [config]);

    return { response, error, loading, setConfig };
}

export default useAxios;