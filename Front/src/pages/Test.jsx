import { useEffect, useState, EventHandler, ReactNode } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import useAxios from '../axios/useAxios';

const Test = () => {

    const { no } = useParams();

    // 요청을 하나만 진행할 때
    const { response, error, loading, fetchData } = useAxios({
        method: 'GET',
        url: `/api/test/${no}`,
    });

    // 두 가지 요청이 필요할 때(update)
    const { response: response1, error: error1, loading: loading1, fetchData: fetchData1 } = useAxios({
        method: 'GET',
        url: `/api/test/${no}`,
    });
    const { response: response2, error: error2, loading: loading2, fetchData: fetchData2 } = useAxios({
        method: 'POST',
        url: `/api/test`,
        data: {
            data: '1'
        }
    });

    useEffect(() => {
        fetchData1();
    }, []);

    const button = async () => {
        const test = await fetchData();
        console.log(test);

        if (test == 200) {
            console.log("다음 동작 시작!");
        }
        // fetchData2();

        // console.log(response2.data);
    }

    return (
        <>
            <div className="flex items-center justify-center h-screen bg-gray-100">
                {loading1 && (
                    <p>Loading...</p>
                )}
                {error1 && (
                    <>
                        <p>{error1.status}</p>
                        <p>{error1.error}</p>
                        <p>{error1.message}</p>
                        <p>에러 코드 : {error1.code}</p>
                    </>
                )}
                {!loading1 && !error1 && (
                    <div className="text-center">
                        <h1 className="text-6xl font-extrabold text-black mb-4">{response1.data}</h1>
                    </div>

                )}
                <button onClick={button}>Test</button>
            </div >
        </>
    )
}

export default Test