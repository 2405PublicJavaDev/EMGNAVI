import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import useAxios from "./path/to/useAxios"; // useAxios의 경로를 제대로 설정해주세요.

const Kakao = () => {
    const nav = useNavigate();
    const { fetchData, loading, error } = useAxios(); // destructuring 시 useAxios가 맞는지 확인
    
    useEffect(() => {
        const code = new URL(window.location.href).searchParams.get('code'); // URL에서 코드 가져오기

        if (code) {
            fetchData(
                {
                    method: 'GET',
                    url: `/api/kakao/callback?code=${code}`, // 백엔드 API로 코드 전송
                },
                (data) => {
                    if (data) {
                        console.log("서버 응답: ", data);
                        // 원하는 로직 실행, 예: 로그인 후 이동
                        nav('/somePath'); // 인증 성공 후 리다이렉트
                    } else {
                        console.log("오류 발생");
                    }
                }
            );
        } else {
            console.log("코드가 없습니다");
        }
    }, [fetchData, nav]); // useEffect에 종속성 추가

    return (
        <div>
            {loading ? <p>로딩 중...</p> : <p>로딩 완료</p>}
            {error && <p>에러 발생: {error.message}</p>}
        </div>
    );
};

export default Kakao;
