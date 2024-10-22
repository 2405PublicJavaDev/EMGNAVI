- - -
**응급NAVI README**

### 프로젝트 명 : 응급NAVI
실시간으로 응급실 병상 가용 여부와 근처 병원, 약국, 제세동기 위치 등 중요한 의료 정보를 제공하는 웹 플랫폼입니다.
사용자는 응급 상황에서 가장 가까운 병원과 제세동기를 찾을 수 있으며, 실시간 사고 정보와 함께 신속한 대응이 가능하도록 돕습니다.
### 프로젝트 목표
- 응급 상황에서 실시간 의료 정보와 응급실 현황을 제공해, 사용자가 빠르게 필요한 정보를 얻을 수 있는 웹 플랫폼 개발
- 내 위치를 기반으로 인근 의료시설 및 약국에 대한 정보를 제공
- 사용자가 필요한 조건에 맞춰서 의료기관을  검색하거나 지도에서 간단하게 주변 정보를 조회
- 병원, 응급실 외에도 약국, 의약품, AED 등다양한 의료, 응급 관련 정보를 제공

- - -
# 1. 개발환경<br>
![GitHub](https://img.shields.io/badge/github-%23121011.svg?style=for-the-badge&logo=github&logoColor=white)
![Spring](https://img.shields.io/badge/spring_boot-%236DB33F.svg?style=for-the-badge&logo=spring&logoColor=white)
![Slack](https://img.shields.io/badge/Slack-4A154B?style=for-the-badge&logo=slack&logoColor=white)
![Intellij](https://img.shields.io/badge/IntelliJ-4A154B?style=for-the-badge&logo=intellijidea&logoColor=#000000)
![AWS](https://img.shields.io/badge/AWS-4A154B?style=for-the-badge&logo=amazonwebservices&logoColor=#232F3E)
<br>
![Trello](https://img.shields.io/badge/Trello-%23026AA7.svg?style=for-the-badge&logo=Trello&logoColor=white)
![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)
![React](https://img.shields.io/badge/React-%23323330.svg?style=for-the-badge&logo=react&logoColor=%#61DAFB)
![Oracle](https://img.shields.io/badge/Oracle-%23E34F26.svg?style=for-the-badge&logo=oracle&logoColor=%#61DAFB)
![Chart.js](https://img.shields.io/badge/Chartjs-FF6384.svg?style=for-the-badge&logo=chartdotjs&logoColor=white)
<br>
![HTML5](https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white)
![TAILWIND](https://img.shields.io/badge/tailwindcss-%231572B6.svg?style=for-the-badge&logo=tailwindcss&logoColor=#06B6D4)
![Kakao](https://img.shields.io/badge/Kakao-FFCD00?style=for-the-badge&logo=Kakao&logoColor=black)
![Naver](https://img.shields.io/badge/Naver-03C75A?style=for-the-badge&logo=Naver&logoColor=white)
![Google](https://img.shields.io/badge/Google-4285F4?style=for-the-badge&logo=google&logoColor=white)






# 2. 브랜치 전략
## Github Flow 방식
- 브랜치를 Main과 Develop으로 만들고 각자 작업 내용은 Develop에 Push 수행
- Deveop 브랜치에서 기능 구현이 완료되고 동작 검증이 되면 Main 브랜치에 Merge 수행
  ![github_flow](https://github.com/2405PublicJavaDev/EMGNAVI/blob/develop/img/github_flow.png?raw=true)
  
# 3. 프로젝트 구조


# 4. 프로젝트 역할 분담
 ## 김정욱: 응급실 정보, 응급실 지도, 응급실 통계, 공지사항 관리
  - 응급실 정보 : 공공 OpenAPI로 실시간 응급병상 정보 받아오는 기능 구현
  - 응급실 지도 : GeoLocation으로 사용자의 위치를 받아와서 사용자 주변의 응급실 운영 병원 정보를 지도 형태로 제공하는 서비스 개발
  - 응급실 통계 : 클라우드의 컴퓨팅 자원을 사용하여 매 시간 응급실 정보를 DB에 수집하는 기능 구현, 수집된 데이터를 그래프로 시각화 하여 제공하는 서비스 개발
  - 공지사항 관리 : 공지사항에 대한 CRUD 기능 구현
 ## 엄은지: 로그인, 회원가입, 소셜 로그인, 최신 의료 뉴스 제공
  - 로그인 : 휴대폰 본인인증으로 아이디를 찾고, 이메일로 비밀번호 재설정 링크를 받아서 로그인할 수 있는 기능 구현 
  - 회원가입 : 휴대폰 본인인증 및 각종 유효성 체크를 통하여 회원가입 기능 구현
  - 소셜 로그인 : 카카오, 네이버, 구글 로그인 기능 구현
  - 최신 의료 뉴스 제공 : 네이버 검색 api를 이용하여 특정 키워드별 실시간 네이버 의료 뉴스를 제공하는 기능 구현
 ## 김만규: 
  - 
 ## 김덕영: 
  - AED 정보 : GeoLocation을 사용하여 사용자의 현 위치를 파악하고, 주변에 설치된 AED(자동 심장 충격기) 위치 정보를 지도에 표시하여 제공하는 서비스 개발
  - 회원 신고 : 리뷰를 신고할 수 있으며, 관리자가 작성자 또는 신고자에 대해 회원 정지 처리를 할 수 있는 서비스 개발.
  - 즐겨찾기 기능 : 회원이 병원, 약국을 즐겨찾기에 등록하거나 삭제할 수 있으며, 마이페이지에서 조회할 수 있는 서비스 개발.
 ## 양희준: 
  - 

# 5. 개발 기간 및 작업 관리
   ![Development_period](https://github.com/2405PublicJavaDev/EMGNAVI/blob/develop/img/working_period.jpg?raw=true)<br>

# 6. 페이지별 기능
## 1. 김정욱
  ### [응급실 지도]
   - KakaoMap API로 지도를 구현했습니다.
   - GeoLocation API를 활용하여 사용자의 현재 위치를 마커로 표시합니다.
   - 검색 반경 설정을 통해 DB에서 반경 이내에 있으면서 응급실을 운영하는 병원 정보를 가져옵니다.
   - 공공 OpenAPI로 실시간 응급실 현황 정보를 가져옵니다.
   - 받아온 병원, 응급실 정보는 지도위의 마커, 사이드바의 리스트 형태로 출력됩니다.
   - 사이드바 에는 통계 그래프 컴포넌트를 활용하여 통계 시각화 자료도 함께 제공합니다.
   ![Emergency_Map](https://github.com/2405PublicJavaDev/EMGNAVI/blob/develop/img/emgMap.gif?raw=true)<br>
  ### [응급실 통계]
   - AWS EC2 서버에서 매 시간마다 실행되어 OpenAPI의 데이터를 DB에 저장하는 Java 프로젝트를 구현했습니다.
   - 검색 조건에 따라 그래프를 작성하는 컴포넌트를 구현했습니다.
   - 통계 페이지에서는 검색 조건을 입력받아 요일별, 요일 및 오전/오후, 시간별 그래프가 제공됩니다.
   - 병원 상세페이지 또는 응급실 지도 사이드바 에서는 입력값을 넣을 필요 없이 해당 병원의 요일별 통계 그래프가 출력됩니다.
   ![Emergency_Stat](https://github.com/2405PublicJavaDev/EMGNAVI/blob/develop/img/stat.gif?raw=true)<br>
  ### [공지사항 관리]
   - 공지사항 작성은 ToastUI Editor를 이용하여 이미지 추가 및 간단한 디자인을 입혀서 작성할 수 있습니다.
   - 작성된 데이터는 화면에 표시하기 위한 HTML 데이터, 이후에 수정할 때 ToastUI Editor에서 사용할 Markdown 데이터 2가지로 DB에 저장됩니다.
   - 이미지 업로드시 서버에 저장되며 별도의 이미지 테이블 없이 공지사항 본문의 HTML, Markdown 등에 기록된 경로에서 불러오게 됩니다.
   - 공지사항 수정은 Markdown 데이터를 불러와서 이전의 디자인을 그대로 가져와서 수정할 수 있게 구현했습니다.
   - 공지사항 목록에서는 제목, 작성자ID, 작성일, 3줄 이내로 줄여서 보여지는 공지 내용이 제공됩니다.
   - 공지사항 목록에서 제목, 작성자ID로 검색이 가능하며 검색 키워드 입력 시 입력창 하단에 자동완성 기능으로 기존에 작성된 공지 제목이나 작성자가 표시됩니다.
   ![Notice](https://github.com/2405PublicJavaDev/EMGNAVI/blob/develop/img/notice.gif?raw=true)<br>

  ## 2. 엄은지
  ### [회원가입]
  - 일반계정으로 회원가입 할 수 있습니다.<br><br>
  ![image](https://github.com/user-attachments/assets/a79ad365-f34d-4b25-bf78-6e5cb8771d4f) <br><br><br><br>
  - 모든 약관에 동의해야 다음 페이지로 넘어갈 수 있습니다. <br><br>
  ![image (5)](https://github.com/user-attachments/assets/01e09e15-6967-4387-97f6-865d6b7d2ea3) <br><br><br><br>
  - 휴대폰 본인인증 절차를 거쳐야 회원가입을 할 수 있습니다.<br><br>
  ![image](https://github.com/user-attachments/assets/7f749f22-41d9-403e-ba69-40f40cc05f5f) 
  ![image](https://github.com/user-attachments/assets/cd349412-1baf-4936-a873-2db25294ef79)<br><br><br><br>
  - 본인인증 유효성 체크
  - 유효하지 않은 휴대폰 번호 입력? -> 휴대폰 번호를 다시 한번 확인해달라는 창
  - 본인인증을 완료하지 않고 다음 버튼을 누르면? -> 본인인증을 완료해달라는 창
  - 잘못된 인증번호 입력? -> 인증번호를 다시 한번 확인해달라는 창<br><br>
  ![Honeycam 2024-10-22 18-25-09](https://github.com/user-attachments/assets/a551a3de-d856-4915-b2eb-54e46032c0f6) <br><br><br><br>
  - 올바른 인증번호 입력 후 다음 페이지로 넘어가면 앞에서 입력한 휴대폰 번호가 입력되어 있습니다.<br><br>
  ![Honeycam 2024-10-22 18-25-36](https://github.com/user-attachments/assets/83360d0e-06a4-4786-abb4-bbd1def6938c) <br><br><br><br>
  - 아이디는 이메일 형식으로 입력했을 때 우측에 체크표시가 뜨며 중복확인 버튼이 활성화됩니다.
  - 만약 중복된 아이디라면 원래 떠있던 체크표시가 사라지고 중복되지 않은 아이디라면 체크표시가 그대로 유지됩니다.<br><br>
  ![Honeycam 2024-10-22 18-29-58](https://github.com/user-attachments/assets/f9a4c3db-f41a-4a02-b6a8-3cc0b07002a5) <br><br><br><br>
  - 비밀번호는 영어, 숫자, 특수문자를 모두 포함한 8~16자리일 경우 우측에 체크표시가 뜨며 비밀번호 확인에서는 위에서 입력한 비밀번호와 일치하는 값일 때 체크표시가 활성화 됩니다.<br><br>
  ![Honeycam 2024-10-22 18-30-37](https://github.com/user-attachments/assets/309c7362-88bb-4d38-bb09-195561bb6cb1) <br><br><br><br>
  - 닉네임은 새로고침 버튼을 클릭 시 자동으로 랜덤생성되며 중복확인을 해야합니다.
  - 성별을 입력할 수 있습니다.
  - 주소를 다음주소검색 api를 활용하여 입력할 수 있습니다.
  - 마케팅활용동의 여부를 체크할 수 있습니다.<br><br>
  ![Honeycam 2024-10-22 18-32-30](https://github.com/user-attachments/assets/64992258-fc6a-4ed1-a589-6589e7dba3f3) 
  ![image](https://github.com/user-attachments/assets/3e6ccb69-d292-4177-b9f9-a37060e39421) <br><br><br><br>


# 7. 프로젝트 후기
## 김정욱
 ### 사전 학습의 필요성
 - 팀원의 의견 및 지원되는 강력한 기능 등으로 프론트엔드 기술로 교육 과정에서 짧게 배우고 넘어갔던 React 채택
 - 이전에 배웠던 언어나 라이브러리와 달리 비동기로 동작하기 때문에 개발하는데 시행착오를 많이 겪었음
 - 프로젝트 초반에 좀 더 시간을 내서 React를 공부 후 개발에 들어갔으면 훨씬 효율적 이었을 것 같다
 ### 브랜치 전략 개선
 - 각자 개발한 내용을 Develop 브랜치에 커밋하고 기능 개발 완료 및 검증 후 Main에 병합하는 Github Flow 를 채택
 - Github Flow는 병합 빈도가 적은편이고 병합 충돌 처리도 간단한 편이라 세미때 사용했던 Git Flow 전략보다는 편했다
 - 중간중간 Deveop 브랜치를 Main에 병합했어야 하는데 신경을 쓰지 않았더니 프로젝트 개발 완료 후에 병합하게 되어버렸다
 ### 팀원간 업무 스케줄 조정 필요
 - 먼저 구현해야 다른 사람이 다음 작업을 할 수 있는 기능이 일부 있었는데 이에 대한 조정이 잘 되지 않았던 것 같다
 - 팀원의 작업 상태를 확인하여 우선순위가 높은 업무를 먼저 할 수 있도록 조정해주는 노력이 필요했던 것 같다
 ### 코드 리팩토링의 필요성
 - 기간 내 맞춰 개발을 완료하느라 작성한 코드를 돌려 사용하면서 반복된 부분들이 있는데 개발이 끝나고 나니 아쉽다
 - 좀 더 명확하게 설계를 수행하고 작성된 설계 문서를 자주 확인하면서 개발했으면 개선될 수 있지 않았나 생각이 든다

## 이름
