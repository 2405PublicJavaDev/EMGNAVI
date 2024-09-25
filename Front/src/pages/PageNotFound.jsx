import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const PageNotFound = () => {
    const navigate = useNavigate();

    useEffect(() => {
        navigate('/404', { replace: true });
    }, [navigate]);

    return (
        <div className="flex items-center justify-center h-screen bg-gray-100">
            <div className="text-center">
                <h1 className="text-6xl font-extrabold text-red-600 mb-4">404</h1>
                <p className="text-2xl font-medium text-gray-700 mb-8">페이지를 찾을 수 없습니다.</p>
                <p className="text-gray-500 mb-8">입력한 주소가 잘못되었거나, 페이지가 삭제되었을 수 있습니다.</p>
                <div className="self-stretch h-[146px] shrink-0 flex flex-col items-start justify-start gap-[13px]">
                    <button onClick={() => navigate('/')} className="self-stretch flex flex-row items-center justify-center p-[10px] bg-[#0090f9] rounded-[10px]">
                        <div className="text-[20px] leading-[20px] font-['Roboto'] font-bold text-[#fff] text-center whitespace-nowrap">홈으로 돌아가기</div>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default PageNotFound;
