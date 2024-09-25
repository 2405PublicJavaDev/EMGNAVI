import { useEffect, useState, EventHandler, ReactNode } from 'react'
import axios from "axios"
import { useNavigate, useParams } from 'react-router-dom';

const Index = () => {

    const { id } = useParams();

    const [test, setTest] = useState('');

    useEffect(() => {
        async function fetchData() {
            const response = await axios.get(`/api/test/${id}`);
            setTest(response.data.data);
        }

        fetchData();
    }, []);

    return (
        <>
            <div className="flex items-center justify-center h-screen bg-gray-100">
                <div className="text-center">
                    <h1 className="text-6xl font-extrabold text-black mb-4">{test}</h1>
                </div>
            </div >
        </>
    )
}

export default Index