import { useState, useEffect } from 'react';
import axios from 'axios';

const useAxios = (config) => {
    const [response, setResponse] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);
    
    const fetchData = async () => {
        setLoading(true);
        try {
            const res = await axios(config);
            if (res.data.status == 200 || res.data.status == 201) {
                setResponse(res.data.data);
            } else {
                setError(res.data);
            }
        } catch (err) {
            setError(err);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchData();
    }), [];

    return { response, error, loading };
}

export default useAxios;