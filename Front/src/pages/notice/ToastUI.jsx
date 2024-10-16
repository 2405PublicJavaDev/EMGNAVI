import { Editor } from "@toast-ui/react-editor";
import "@toast-ui/editor/dist/toastui-editor.css";
import "@toast-ui/editor/dist/toastui-editor-viewer.css";

import { useRef, useState, useEffect, useContext } from "react";

import { UserContext } from "../../UserContext";

const ToastUI = ({ initialValue = "" }) => {

    const { userId } = useContext(UserContext);

    const [initialValueState, setInitialValueState] = useState(initialValue); // initialValue 값을 상태값으로 관리

    // Editor DOM 선택용
    const editorRef = useRef(null);
    const titleRef = useRef(null);

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

        fetch(`/api/notice/post`, {
            method: 'POST',
            headers: {
                'Content-type': 'application/json',
            },
            body: JSON.stringify({
                writerId: userId,
                noticeTitle: titleRef.current?.value,
                noticeContents: editorRef.current?.getInstance().getHTML(),
                noticeMarkdown: editorRef.current?.getInstance().getMarkdown(),
            }),
        })
            .then(response => response.json())
            .then(data => {
                console.log('data: ' + data);
                if (data === 1) {
                    //성공 처리
                    console.log('DB입력 성공');
                    alert('공지사항 등록 성공');
                    window.location.href = 'https://127.0.0.1:3000/notice/getNoticeList';
                } else {
                    console.log('DB입력 실패');
                    alert('공지사항 등록 실패');
                }
            })
            .catch(error => {
                console.error('Error fetching notice data:', error);
            });
    };

    return (
        <>
            <div className="mb-[16px]">
                <div className="w-[67px] h-[25px] text-[24px] font-['Inter'] font-bold flex justify-center mb-[16px]"><span className="text-[#000]">제목 </span><span className="text-[#f00]">*</span></div>
                <input id="noticeTitle" ref={titleRef} type="text" className="w-[1246px] h-[50px] border-[1px] border-solid border-[#d9d9d9] rounded-[5px] text-[24px] font-['Inter'] font-medium text-[#7d899c] pl-[16px]" placeholder="제목 입력" />
            </div>

            <Editor
                placeholder="내용을 입력해주세요."
                previewStyle="vertical" // 미리보기 스타일 지정
                height="350px" // 에디터 창 높이
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
                    addImageBlobHook(blob, callback) {  // 이미지 업로드 로직 커스텀
                        console.log(blob);
                        console.log(callback);
                    }
                }
                }
            /* end of hooks */
            />
            <br />
            <div className="flex space-x-4">
                <button onClick={handleRegisterBtn} className="w-[200px] h-[45px] bg-[#f3f5f9] border-[1px] border-solid border-[#e3e9ef] rounded-[5px] text-[24px] font-['Inter'] font-medium text-[#000]">취소</button>
                <button onClick={handleRegisterBtn} className="w-[200px] h-[45px] bg-[#0b2d85] rounded-[5px] text-[24px] font-['Inter'] font-medium text-[#fff] text-center">등록</button>
            </div>
        </>
    );
};

export default ToastUI;