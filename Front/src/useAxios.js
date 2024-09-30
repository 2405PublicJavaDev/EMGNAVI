import { useState, useEffect } from 'react';
import axios from 'axios';

axios.defaults.baseURL = '';

const useAxios = (uri) => {
    const [response, setResponse] = useState('');
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(true);

    const fetchData = async () => {
        await axios.request(uri)
            .then(response => {
                setResponse(response);
            })
            .catch(error => {
                setError(error);
            })
            .finally(() => {
                setLoading(false);
            });
    };

    useEffect(() => {
        fetchData(uri);
    }, [uri]);

    return { response, error, loading };
}

export default useAxios;