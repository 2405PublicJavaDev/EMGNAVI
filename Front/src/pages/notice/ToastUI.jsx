import { Editor } from "@toast-ui/react-editor";
import "@toast-ui/editor/dist/toastui-editor.css";
import "@toast-ui/editor/dist/toastui-editor-viewer.css";

import { useRef, useState, useEffect, useContext } from "react";

import { UserContext } from "../../UserContext";
import { useNavigate } from "react-router-dom";

const ToastUI = ({ initialValue = "", notice = null }) => {

    const { userId } = useContext(UserContext);

    const [initialValueState, setInitialValueState] = useState(initialValue); // initialValue 값을 상태값으로 관리

    // Editor DOM 선택용
    const editorRef = useRef(null);
    const titleRef = useRef(null);

    const navigate = useNavigate();

    useEffect(() => {
        if (editorRef.current) {
            editorRef.current.getInstance().focus();
            if (initialValue === "") {
                editorRef.current.getInstance().reset();
            } else {
                editorRef.current.getInstance().setMarkdown(initialValue); // cursor를 초기값의 뒤에 위치시킴
                setInitialValueState(initialValue);
            }
        }
    }, [initialValue]);

    // 등록 버튼 핸들러
    const handleRegisterBtn = () => {
        // 입력창에 입력한 내용을 MarkDown 형태로 취득
        console.log(editorRef.current?.getInstance().getMarkdown());
        // 입력창에 입력한 내용을 HTML 태그 형태로 취득
        console.log(editorRef.current?.getInstance().getHTML());
        // 공지제목 input 태그에 입력한 내용을 취득
        console.log('title' + titleRef.current?.value);
        console.log('uid' + userId);

        const url = notice ? `/api/notice/put` : `/api/notice/post`;

        const body = notice
            ? JSON.stringify({
                noticeId: notice.noticeId, // 수정할 때 공지사항의 id 추가
                writerId: userId,
                noticeTitle: titleRef.current?.value,
                noticeContents: editorRef.current?.getInstance().getHTML(),
                noticeMarkdown: editorRef.current?.getInstance().getMarkdown(),
                noticeDate: notice.noticeDate, // 기존 등록일 사용
            })
            : JSON.stringify({
                writerId: userId,
                noticeTitle: titleRef.current?.value,
                noticeContents: editorRef.current?.getInstance().getHTML(),
                noticeMarkdown: editorRef.current?.getInstance().getMarkdown(),
            });

        fetch(url, {
            method: 'POST',
            headers: {
                'Content-type': 'application/json',
            },
            body: body,
        })
            .then(response => response.json())
            .then(data => {
                console.log('data: ' + data);
                if (data === 1) {
                    //성공 처리
                    console.log('DB입력 성공');
                    alert('공지사항 등록 성공');
                    window.location.href = '/notice/getNoticeList';
                } else {
                    console.log('DB입력 실패');
                    alert('공지사항 등록 실패');
                }
            })
            .catch(error => {
                console.error('Error fetching notice data:', error);
            });
    };

    const handleCancelBtn = () => {
        if (window.confirm("작성을 취소하시겠습니까?")) {
            navigate("/notice/getNoticeList");
        }
    }

    return (
        <>
            <div className="mb-[16px]">
                <div className="w-[67px] h-[25px] text-[24px] font-['Inter'] font-bold flex justify-center mb-[16px]"><span className="text-[#000]">제목 </span><span className="text-[#f00]">*</span></div>
                <input id="noticeTitle" ref={titleRef} type="text" className="w-[1246px] h-[50px] border-[1px] border-solid border-[#d9d9d9] rounded-[5px] text-[24px] font-['Inter'] font-medium text-[#7d899c] pl-[16px]" placeholder="제목 입력"
                    defaultValue={notice ? notice.noticeTitle : ""} />
            </div>

            <Editor
                placeholder="내용을 입력해주세요."
                previewStyle="vertical" // 미리보기 스타일 지정
                height="500px" // 에디터 창 높이
                initialEditType="wysiwyg" // 초기 입력모드 설정(디폴트 markdown)
                initialValue={initialValueState}
                toolbarItems={[
                    // 툴바 옵션 설정
                    ["heading", "bold", "italic", "strike"],
                    ["hr", "quote"],
                    ["ul", "ol", "task", "indent", "outdent"],
                    ["table", "image", "link"],
                    ["code", "codeblock"],
                ]}
                ref={editorRef}
                useCommandShortcut={true} // 키보드 입력 컨트롤 방지
                previewHighlight={false} //미리보기 강조 표시 제거
                /* start of hooks */
                hooks={{
                    // addImageBlobHook(blob, callback) {  // 이미지 업로드 로직 커스텀
                    //     console.log(blob);
                    //     console.log(callback);
                    // }
                    async addImageBlobHook(blob, callback) {  // 이미지 업로드 로직 커스텀
                        try {
                            /*
                            * 1. 에디터에 업로드한 이미지를 FormData 객체에 저장
                            *    (이때, 컨트롤러 uploadEditorImage 메서드의 파라미터인 'image'와 formData에 append 하는 key('image')값은 동일해야 함)
                            */
                            const formData = new FormData();
                            formData.append('image', blob);

                            // 2. FileApiController - uploadEditorImage 메서드 호출
                            const response = await fetch('/api/tui-editor/image-upload', {
                                method: 'POST',
                                body: formData,
                            });

                            // 3. 컨트롤러에서 전달받은 디스크에 저장된 파일명
                            const filename = await response.text();
                            console.log('서버에 저장된 파일명 : ', filename);

                            // 4. addImageBlobHook의 callback 함수를 통해, 디스크에 저장된 이미지를 에디터에 렌더링
                            const imageUrl = `/api/tui-editor/image-print?filename=${filename}`;
                            callback(imageUrl, 'image alt attribute');

                        } catch (error) {
                            console.error('업로드 실패 : ', error);
                        }
                        console.log(blob);
                        console.log(callback);
                    }
                }
                }
            /* end of hooks */
            />
            <br />
            <div className="flex space-x-4">
                <button onClick={handleCancelBtn} className="w-[200px] h-[45px] bg-[#f3f5f9] border-[1px] border-solid border-[#e3e9ef] rounded-[5px] text-[24px] font-['Inter'] font-medium text-[#000]">취소</button>
                <button onClick={handleRegisterBtn} className="w-[200px] h-[45px] bg-[#0b2d85] rounded-[5px] text-[24px] font-['Inter'] font-medium text-[#fff] text-center">등록</button>
            </div>
        </>
    );
};

export default ToastUI;