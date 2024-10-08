import { useState, useEffect } from 'react';
import axios from 'axios';

const useAxios = (config) => {
    const [response, setResponse] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);

    const fetchData = async () => {
        try {
            const res = await axios(config);
            setResponse(res.data.data);
            return res.data.status;
        } catch (err) {
            setError(err);
        } finally {
            setLoading(false);
        }
    };

    return { response, error, loading, fetchData };
}

export default useAxios;
