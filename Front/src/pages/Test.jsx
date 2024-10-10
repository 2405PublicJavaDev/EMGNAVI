import { useEffect, useState, EventHandler, ReactNode } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import useAxios from '../axios/useAxios';

const Test = () => {

    const { no } = useParams();

    const { response, fetchData } = useAxios();

    useEffect(() => {
        fetchData(
            {
                method: 'GET',
                url: `/api/test/${no}`,
            },
        );
    }, []);

    const button = async () => {
        fetchData(
            {
                method: 'POST',
                url: `/api/test/2`,
                data: {
                    no,
                }
            },
            (data) => {
                console.log(data);
                if (data.status === 200) {
                    console.log("다음 동작!!!");
                }
            }
        );
    }

    return (
        <>
            {response && (
                <div className="flex items-center justify-center h-screen bg-gray-100">
                    <div className="text-center">
                        <h1 className="text-6xl font-extrabold text-black mb-4">{response.data}</h1>
                    </div>
                    <button onClick={button}>Test</button>
                </div >
            )}
        </>
    )
}

export default Test