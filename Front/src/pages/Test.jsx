import { useEffect, useState, EventHandler, ReactNode } from 'react'
import axios from "axios"
import { useNavigate, useParams } from 'react-router-dom';
import useAxios from '../axios/useAxios';

const Test = () => {

    const { no } = useParams();

    const { response, error, loading, setConfig } = useAxios();

    useEffect(() => {
        setConfig({
            method: 'GET',
            url: `/api/test/${no}`,
        });
    }, []);


    const button = () => {
        setConfig({
            method: 'POST',
            url: `/api/test`,
            data: {
                data: 'a'
            },
        });
    }

    return (
        <>
            <div className="flex items-center justify-center h-screen bg-gray-100">
                {loading && (
                    <p>Loading...</p>
                )}
                {error && (
                    <>
                        <p>{error.status}</p>
                        <p>{error.error}</p>
                        <p>{error.message}</p>
                        <p>에러 코드 : {error.code}</p>
                    </>
                )}
                {!loading && !error && (
                    <div className="text-center">
                        <h1 className="text-6xl font-extrabold text-black mb-4">{response.data}</h1>
                    </div>

                )}
                {/* <button onClick={button}>Test</button> */}
            </div >
        </>
    )
}

export default Test