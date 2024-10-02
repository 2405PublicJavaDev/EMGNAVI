import axios from 'axios';

export const Session = async () => {
    try {
        const response = await axios.get('/api/session');
        return response.data;
    } catch (error) {
        console.error('Error fetching session data', error);
        return null;
    }
};
