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
<details>
  <summary>접기/펼치기</summary>

```
📦Final
 ┣ 📂Back
 ┃ ┗ 📂emgnavi
 ┃ ┃ ┣ 📂gradle
 ┃ ┃ ┃ ┗ 📂wrapper
 ┃ ┃ ┃ ┃ ┣ 📜gradle-wrapper.jar
 ┃ ┃ ┃ ┃ ┗ 📜gradle-wrapper.properties
 ┃ ┃ ┣ 📂src
 ┃ ┃ ┃ ┣ 📂main
 ┃ ┃ ┃ ┃ ┣ 📂java
 ┃ ┃ ┃ ┃ ┃ ┗ 📂com
 ┃ ┃ ┃ ┃ ┃ ┃ ┗ 📂emginfo
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┗ 📂emgnavi
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📂aed
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┗ 📂vo
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┗ 📜Aed.java
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📂common
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📂exception
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜CustomException.java
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜ErrorCode.java
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜ErrorResponse.java
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┗ 📜GlobalExceptionController.java
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📂pagenation
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜Criteria.java
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┗ 📜PaginationInfo.java
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📂parsing
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📂controller
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┗ 📜ParsingController.java
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┗ 📂mapper
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┗ 📜ParsingMapper.java
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📂success
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜SuccessCode.java
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┗ 📜SuccessResponse.java
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜AppConfig.java
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜SessionController.java
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┗ 📜TimeConfig.java
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📂email
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┗ 📂service
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📂impl
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┗ 📜EmailServiceImpl.java
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┗ 📜EmailService.java
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📂favorite
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📂controller
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┗ 📜FavoriteController.java
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📂model
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📂dto
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜FavoriteDTO.java
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┗ 📜FavoritePageDTO.java
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📂mapper
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┗ 📜FavoriteMapper.java
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┗ 📂vo
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┗ 📜Favorite.java
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┗ 📂service
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📂Impl
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┗ 📜FavoriteServiceImpl.java
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┗ 📜FavoriteService.java
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📂hospital
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📂controller
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┗ 📜HospitalController.java
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📂mapper
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┗ 📜HospitalMapper.java
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📂service
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📂impl
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┗ 📜HospitalServiceImpl.java
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┗ 📜HospitalService.java
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┗ 📂vo
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┗ 📜Hospital.java
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📂map
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📂controller
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┗ 📜MapController.java
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📂mapper
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┗ 📜MapMapper.java
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📂service
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📂impl
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┗ 📜MapServiceImpl.java
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┗ 📜MapService.java
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┗ 📂vo
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┗ 📜GpsInfo.java
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📂medicine
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📂controller
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┗ 📜MedicineController.java
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📂mapper
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┗ 📜MedicineMapper.java
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📂service
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┗ 📜MedicineService.java
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┗ 📂vo
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┗ 📜Medicine.java
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📂medicine_review
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📂controller
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┗ 📜MedicineReviewController.java
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📂mapper
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┗ 📜MedicineReviewMapper.java
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📂service
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┗ 📜MedicineReviewService.java
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┗ 📂vo
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┗ 📜MedicineReviews.java
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📂notice
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📂controller
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜FileApiController.java
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┗ 📜NoticeController.java
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📂mapper
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┗ 📜NoticeMapper.java
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📂service
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📂impl
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┗ 📜noticeServiceImpl.java
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┗ 📜NoticeService.java
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┗ 📂vo
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜Notice.java
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┗ 📜NoticeImage.java
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📂pharmacy
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📂controller
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┗ 📜PharmacyController.java
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📂mapper
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┗ 📜PharmacyMapper.java
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📂service
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📂impl
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┗ 📜PharmacyServiceImpl.java
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┗ 📜PharmacyService.java
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┗ 📂vo
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┗ 📜Pharmacy.java
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📂report
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📂controller
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┗ 📜ReportController.java
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📂model
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📂dto
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜ReportActionDTO.java
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜ReportListDTO.java
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┗ 📜ReportPageDTO.java
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📂mapper
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┗ 📜ReportMapper.java
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┗ 📂vo
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┗ 📜Report.java
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┗ 📂service
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📂impl
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┗ 📜ReportServiceImpl.java
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┗ 📜ReportService.java
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📂review
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📂controller
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┗ 📜ReviewController.java
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📂dto
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜GetReviewListByRefNoResponse.java
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜GetReviewOneByNoResponse.java
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜PostReviewRequest.java
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┗ 📜UpdateReviewRequest.java
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📂mapper
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┗ 📜ReviewMapper.java
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📂service
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📂impl
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┗ 📜ReviewServiceImpl.java
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┗ 📜ReviewService.java
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┗ 📂vo
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┗ 📜Reviews.java
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📂stat
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📂controller
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┗ 📜StatController.java
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📂mapper
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┗ 📜StatMapper.java
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📂service
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📂impl
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┗ 📜StatServiceImpl.java
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┗ 📜StatService.java
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┗ 📂vo
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┗ 📜Stat.java
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📂support
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📂controller
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┗ 📜SupportController.java
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📂dto
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜GetSupportResponse.java
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜RequestSupportRequest.java
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┗ 📜ResponseSupportRequest.java
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📂mapper
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┗ 📜SupportMapper.java
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📂service
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📂impl
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┗ 📜SupportServiceImpl.java
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┗ 📜SupportService.java
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┗ 📂vo
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┗ 📜Support.java
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📂test
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📂controller
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┗ 📜TestController.java
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📂dto
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┗ 📜GetTestDataByIdResponse.java
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📂mapper
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┗ 📜TestMapper.java
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📂service
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📂impl
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┗ 📜TestServiceImpl.java
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┗ 📜TestService.java
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┗ 📂vo
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┗ 📜Test.java
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📂user
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📂controller
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┗ 📜UserController.java
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📂model
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📂dto
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜ChangePhoneRequest.java
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜LoginRequest.java
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜ResetPasswordRequest.java
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜UserIdRequest.java
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜UserInfoRequest.java
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜UserNicknameRequest.java
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜VerifyCodeRequest.java
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┗ 📜VerifyPhoneRequest.java
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📂mapper
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┗ 📜UserMapper.java
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┗ 📂vo
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜Token.java
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┗ 📜User.java
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┗ 📂service
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📂impl
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┗ 📜UserServiceImpl.java
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜EmailService.java
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┗ 📜UserService.java
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┗ 📜EmgnaviApplication.java
 ┃ ┃ ┃ ┃ ┗ 📂resources
 ┃ ┃ ┃ ┃ ┃ ┣ 📂mappers
 ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜favorite-mapper.xml
 ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜hospital-mapper.xml
 ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜map-mapper.xml
 ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜medicine-mapper.xml
 ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜notice-mapper.xml
 ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜parsing-mapper.xml
 ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜pharmacy-mapper.xml
 ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜report-mapper.xml
 ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜review-mapper.xml
 ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜review_medicine-mapper.xml
 ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜stat-mapper.xml
 ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜support-mapper.xml
 ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜test-mapper.xml
 ┃ ┃ ┃ ┃ ┃ ┃ ┗ 📜user-mapper.xml
 ┃ ┃ ┃ ┃ ┃ ┗ 📜application.yml
 ┃ ┃ ┃ ┗ 📂test
 ┃ ┃ ┃ ┃ ┗ 📂java
 ┃ ┃ ┃ ┃ ┃ ┗ 📂com
 ┃ ┃ ┃ ┃ ┃ ┃ ┗ 📂emginfo
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┗ 📂emgnavi
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┗ 📜EmgnaviApplicationTests.java
 ┃ ┃ ┣ 📜.gitignore
 ┃ ┃ ┣ 📜build.gradle
 ┃ ┃ ┣ 📜gradlew
 ┃ ┃ ┣ 📜gradlew.bat
 ┃ ┃ ┗ 📜settings.gradle
 ┣ 📂Front
 ┃ ┣ 📂.anima
 ┃ ┃ ┣ 📜.gitignore
 ┃ ┃ ┣ 📜conventions.json
 ┃ ┃ ┗ 📜workspace.json
 ┃ ┣ 📂public
 ┃ ┃ ┗ 📂img
 ┃ ┃ ┃ ┣ 📂admin
 ┃ ┃ ┃ ┃ ┣ 📂reviewAdmin
 ┃ ┃ ┃ ┃ ┃ ┣ 📜bg0_113.png
 ┃ ┃ ┃ ┃ ┃ ┣ 📜copyright (1) 10_11.png
 ┃ ┃ ┃ ┃ ┃ ┣ 📜file 10_117.png
 ┃ ┃ ┃ ┃ ┃ ┣ 📜Group 780_13.png
 ┃ ┃ ┃ ┃ ┃ ┣ 📜line0_114.png
 ┃ ┃ ┃ ┃ ┃ ┣ 📜Polygon 10_100.png
 ┃ ┃ ┃ ┃ ┃ ┣ 📜Polygon 10_101.png
 ┃ ┃ ┃ ┃ ┃ ┣ 📜Polygon.png
 ┃ ┃ ┃ ┃ ┃ ┣ 📜Rectangle 41560_80.png
 ┃ ┃ ┃ ┃ ┃ ┣ 📜Rectangle 41560_83.png
 ┃ ┃ ┃ ┃ ┃ ┣ 📜Rectangle 41560_86.png
 ┃ ┃ ┃ ┃ ┃ ┣ 📜Rectangle 41560_89.png
 ┃ ┃ ┃ ┃ ┃ ┣ 📜배경 제거 프로젝트 (1)0_7.png
 ┃ ┃ ┃ ┃ ┃ ┣ 📜별점 5개 30_118.png
 ┃ ┃ ┃ ┃ ┃ ┣ 📜별점 5개 30_125.png
 ┃ ┃ ┃ ┃ ┃ ┣ 📜별점 5개 40_51.png
 ┃ ┃ ┃ ┃ ┃ ┣ 📜별점 5개 50_120.png
 ┃ ┃ ┃ ┃ ┃ ┣ 📜별점 5개 60_123.png
 ┃ ┃ ┃ ┃ ┃ ┣ 📜별점 5개 70_126.png
 ┃ ┃ ┃ ┃ ┃ ┣ 📜별점 회색 100_129.png
 ┃ ┃ ┃ ┃ ┃ ┣ 📜별점 회색 20_119.png
 ┃ ┃ ┃ ┃ ┃ ┣ 📜별점 회색 40_121.png
 ┃ ┃ ┃ ┃ ┃ ┣ 📜별점 회색 50_122.png
 ┃ ┃ ┃ ┃ ┃ ┣ 📜별점 회색 50_124.png
 ┃ ┃ ┃ ┃ ┃ ┣ 📜별점 회색 80_127.png
 ┃ ┃ ┃ ┃ ┃ ┗ 📜별점 회색 90_128.png
 ┃ ┃ ┃ ┃ ┣ 📜Group 222.png
 ┃ ┃ ┃ ┃ ┗ 📜Group 223.png
 ┃ ┃ ┃ ┣ 📂aed
 ┃ ┃ ┃ ┃ ┣ 📜심폐소생술 방법.jpg
 ┃ ┃ ┃ ┃ ┗ 📜자동심장충격기 사용방법.jpg
 ┃ ┃ ┃ ┣ 📂footer
 ┃ ┃ ┃ ┃ ┣ 📜copyright.png
 ┃ ┃ ┃ ┃ ┣ 📜group.png
 ┃ ┃ ┃ ┃ ┗ 📜logo.png
 ┃ ┃ ┃ ┣ 📂header
 ┃ ┃ ┃ ┃ ┣ 📜background.png
 ┃ ┃ ┃ ┃ ┣ 📜line.png
 ┃ ┃ ┃ ┃ ┗ 📜logo.png
 ┃ ┃ ┃ ┣ 📂medicine
 ┃ ┃ ┃ ┃ ┣ 📜AlYak.png
 ┃ ┃ ┃ ┃ ┣ 📜bg0_274.png
 ┃ ┃ ┃ ┃ ┣ 📜bg0_629.png
 ┃ ┃ ┃ ┃ ┣ 📜bluebox.png
 ┃ ┃ ┃ ┃ ┣ 📜copyright (1) 10_260.png
 ┃ ┃ ┃ ┃ ┣ 📜copyright (1) 10_612.png
 ┃ ┃ ┃ ┃ ┣ 📜file 10_277.png
 ┃ ┃ ┃ ┃ ┣ 📜file 10_632.png
 ┃ ┃ ┃ ┃ ┣ 📜goldonestar.png
 ┃ ┃ ┃ ┃ ┣ 📜goldstarfifth.png
 ┃ ┃ ┃ ┃ ┣ 📜greyonestar.png
 ┃ ┃ ┃ ┃ ┣ 📜greystarfifth.png
 ┃ ┃ ┃ ┃ ┣ 📜Group 170_262.png
 ┃ ┃ ┃ ┃ ┣ 📜Group 170_614.png
 ┃ ┃ ┃ ┃ ┣ 📜image 440_435.png
 ┃ ┃ ┃ ┃ ┣ 📜line0_275.png
 ┃ ┃ ┃ ┃ ┣ 📜line0_630.png
 ┃ ┃ ┃ ┃ ┣ 📜Polygon 10_147.png
 ┃ ┃ ┃ ┃ ┣ 📜Polygon_10_146.png
 ┃ ┃ ┃ ┃ ┣ 📜Rectangle 41560_242.png
 ┃ ┃ ┃ ┃ ┣ 📜Rectangle 41560_248.png
 ┃ ┃ ┃ ┃ ┣ 📜Rectangle 41560_251.png
 ┃ ┃ ┃ ┃ ┣ 📜Rectangle 41560_594.png
 ┃ ┃ ┃ ┃ ┣ 📜Rectangle 41560_597.png
 ┃ ┃ ┃ ┃ ┣ 📜Rectangle 41560_600.png
 ┃ ┃ ┃ ┃ ┣ 📜Rectangle 41560_603.png
 ┃ ┃ ┃ ┃ ┣ 📜rectanglePagingBlue.svg
 ┃ ┃ ┃ ┃ ┣ 📜report.png
 ┃ ┃ ┃ ┃ ┣ 📜review.png
 ┃ ┃ ┃ ┃ ┣ 📜배경 제거 프로젝트 (1)0_256.png
 ┃ ┃ ┃ ┃ ┣ 📜배경 제거 프로젝트 (1)0_608.png
 ┃ ┃ ┃ ┃ ┣ 📜별점 5개 100_589.png
 ┃ ┃ ┃ ┃ ┣ 📜별점 5개 20_506.png
 ┃ ┃ ┃ ┃ ┣ 📜별점 5개 30_516.png
 ┃ ┃ ┃ ┃ ┣ 📜별점 5개 40_525.png
 ┃ ┃ ┃ ┃ ┣ 📜별점 5개 50_536.png
 ┃ ┃ ┃ ┃ ┣ 📜별점 5개 60_546.png
 ┃ ┃ ┃ ┃ ┣ 📜별점 5개 70_558.png
 ┃ ┃ ┃ ┃ ┣ 📜별점 5개 80_567.png
 ┃ ┃ ┃ ┃ ┣ 📜별점 5개 90_576.png
 ┃ ┃ ┃ ┃ ┣ 📜별점 회색 100_579.png
 ┃ ┃ ┃ ┃ ┣ 📜별점 회색 110_580.png
 ┃ ┃ ┃ ┃ ┣ 📜별점 회색 120_590.png
 ┃ ┃ ┃ ┃ ┣ 📜별점 회색 20_526.png
 ┃ ┃ ┃ ┃ ┣ 📜별점 회색 30_527.png
 ┃ ┃ ┃ ┃ ┣ 📜별점 회색 40_537.png
 ┃ ┃ ┃ ┃ ┣ 📜별점 회색 50_547.png
 ┃ ┃ ┃ ┃ ┣ 📜별점 회색 60_548.png
 ┃ ┃ ┃ ┃ ┣ 📜별점 회색 70_549.png
 ┃ ┃ ┃ ┃ ┣ 📜별점 회색 80_577.png
 ┃ ┃ ┃ ┃ ┗ 📜별점 회색 90_578.png
 ┃ ┃ ┃ ┣ 📂notice
 ┃ ┃ ┃ ┃ ┣ 📜image-52.png
 ┃ ┃ ┃ ┃ ┣ 📜image-54.png
 ┃ ┃ ┃ ┃ ┗ 📜image-55.png
 ┃ ┃ ┃ ┗ 📂user
 ┃ ┃ ┃ ┃ ┣ 📜black-check-box-with-white-check.png
 ┃ ┃ ┃ ┃ ┣ 📜button 1117_127.png
 ┃ ┃ ┃ ┃ ┣ 📜check (1)117_493.png
 ┃ ┃ ┃ ┃ ┣ 📜check 1117_496.png
 ┃ ┃ ┃ ┃ ┣ 📜check-mark (1) 1343_312.png
 ┃ ┃ ┃ ┃ ┣ 📜checked (1) 2324_219.png
 ┃ ┃ ┃ ┃ ┣ 📜eye.png
 ┃ ┃ ┃ ┃ ┣ 📜green.png
 ┃ ┃ ┃ ┃ ┣ 📜Group 189335_1114.png
 ┃ ┃ ┃ ┃ ┣ 📜Group 199397_54.png
 ┃ ┃ ┃ ┃ ┣ 📜Group 200397_50.png
 ┃ ┃ ┃ ┃ ┣ 📜Group 221397_73.png
 ┃ ┃ ┃ ┃ ┣ 📜kakaotalk86_33.png
 ┃ ┃ ┃ ┃ ┣ 📜n 186_30.png
 ┃ ┃ ┃ ┃ ┣ 📜padlock (1) 186_6.png
 ┃ ┃ ┃ ┃ ┣ 📜pink.png
 ┃ ┃ ┃ ┃ ┣ 📜rec (1) 1117_135.png
 ┃ ┃ ┃ ┃ ┣ 📜reload 1117_124.png
 ┃ ┃ ┃ ┃ ┣ 📜search (1) 186_36.png
 ┃ ┃ ┃ ┃ ┣ 📜smartphone 1101_3.png
 ┃ ┃ ┃ ┃ ┣ 📜smartphone 2177_1385.png
 ┃ ┃ ┃ ┃ ┣ 📜square 199_14.png
 ┃ ┃ ┃ ┃ ┣ 📜user 185_14.png
 ┃ ┃ ┃ ┃ ┗ 📜user.png
 ┃ ┣ 📂src
 ┃ ┃ ┣ 📂axios
 ┃ ┃ ┃ ┣ 📜Session.js
 ┃ ┃ ┃ ┗ 📜useAxios.js
 ┃ ┃ ┣ 📂pages
 ┃ ┃ ┃ ┣ 📂admin
 ┃ ┃ ┃ ┃ ┗ 📜AdminPage.jsx
 ┃ ┃ ┃ ┣ 📂common
 ┃ ┃ ┃ ┃ ┣ 📜dateUtil.js
 ┃ ┃ ┃ ┃ ┣ 📜StyledHTMLContent.jsx
 ┃ ┃ ┃ ┃ ┗ 📜StyledHTMLContentElipsis.jsx
 ┃ ┃ ┃ ┣ 📂hospital
 ┃ ┃ ┃ ┃ ┣ 📜HospitalDetail.jsx
 ┃ ┃ ┃ ┃ ┗ 📜HospitalSearch.jsx
 ┃ ┃ ┃ ┣ 📂map
 ┃ ┃ ┃ ┃ ┣ 📜GetAedMap.jsx
 ┃ ┃ ┃ ┃ ┣ 📜GetEmergencyMap.jsx
 ┃ ┃ ┃ ┃ ┣ 📜GetHospitalMap.jsx
 ┃ ┃ ┃ ┃ ┣ 📜GetPharmacyMap.jsx
 ┃ ┃ ┃ ┃ ┗ 📜GetSketchMap.jsx
 ┃ ┃ ┃ ┣ 📂medicine
 ┃ ┃ ┃ ┃ ┣ 📜MedicineDetail.jsx
 ┃ ┃ ┃ ┃ ┗ 📜MedicineSearch.jsx
 ┃ ┃ ┃ ┣ 📂notice
 ┃ ┃ ┃ ┃ ┣ 📜GetNoticeDetail.jsx
 ┃ ┃ ┃ ┃ ┣ 📜GetNoticeList.jsx
 ┃ ┃ ┃ ┃ ┣ 📜PostNotice.jsx
 ┃ ┃ ┃ ┃ ┣ 📜PutNotice.jsx
 ┃ ┃ ┃ ┃ ┗ 📜ToastUI.jsx
 ┃ ┃ ┃ ┣ 📂pharmacy
 ┃ ┃ ┃ ┃ ┣ 📜PharmacyDetail.jsx
 ┃ ┃ ┃ ┃ ┗ 📜PharmacySearch.jsx
 ┃ ┃ ┃ ┣ 📂report
 ┃ ┃ ┃ ┃ ┣ 📜ReportList.jsx
 ┃ ┃ ┃ ┃ ┗ 📜ReportPopup.jsx
 ┃ ┃ ┃ ┣ 📂stat
 ┃ ┃ ┃ ┃ ┣ 📜Chart.jsx
 ┃ ┃ ┃ ┃ ┗ 📜GetEmergencyStat.jsx
 ┃ ┃ ┃ ┣ 📂user
 ┃ ┃ ┃ ┃ ┣ 📂Favorite
 ┃ ┃ ┃ ┃ ┃ ┣ 📜FavHospital.jsx
 ┃ ┃ ┃ ┃ ┃ ┗ 📜FavPharmacy.jsx
 ┃ ┃ ┃ ┃ ┣ 📜ChangePasswordModal.jsx
 ┃ ┃ ┃ ┃ ┣ 📜FindEmail.jsx
 ┃ ┃ ┃ ┃ ┣ 📜FindEmailComplete.jsx
 ┃ ┃ ┃ ┃ ┣ 📜FindPw.jsx
 ┃ ┃ ┃ ┃ ┣ 📜FindPwSendMSG.jsx
 ┃ ┃ ┃ ┃ ┣ 📜Google.jsx
 ┃ ┃ ┃ ┃ ┣ 📜Kakao.jsx
 ┃ ┃ ┃ ┃ ┣ 📜LoginMain.jsx
 ┃ ┃ ┃ ┃ ┣ 📜Mypage.jsx
 ┃ ┃ ┃ ┃ ┣ 📜MypageCheckPw.jsx
 ┃ ┃ ┃ ┃ ┣ 📜MypageModifyInf.jsx
 ┃ ┃ ┃ ┃ ┣ 📜Naver.jsx
 ┃ ┃ ┃ ┃ ┣ 📜PhoneVerificationModal.jsx
 ┃ ┃ ┃ ┃ ┣ 📜RegisterAgree.jsx
 ┃ ┃ ┃ ┃ ┣ 📜RegisterComplete.jsx
 ┃ ┃ ┃ ┃ ┣ 📜RegisterMain.jsx
 ┃ ┃ ┃ ┃ ┣ 📜RegisterPage.jsx
 ┃ ┃ ┃ ┃ ┣ 📜RegisterVerify.jsx
 ┃ ┃ ┃ ┃ ┣ 📜ResetPw.jsx
 ┃ ┃ ┃ ┃ ┣ 📜SocialComplete.jsx
 ┃ ┃ ┃ ┃ ┗ 📜SocialMypageModifyInf.jsx
 ┃ ┃ ┃ ┣ 📜Header.jsx
 ┃ ┃ ┃ ┣ 📜Index.jsx
 ┃ ┃ ┃ ┣ 📜PageNotFound.jsx
 ┃ ┃ ┃ ┗ 📜Test.jsx
 ┃ ┃ ┣ 📜App.jsx
 ┃ ┃ ┣ 📜index.css
 ┃ ┃ ┣ 📜main.jsx
 ┃ ┃ ┣ 📜ScrollToTop.jsx
 ┃ ┃ ┗ 📜UserContext.jsx
 ┃ ┣ 📜.gitignore
 ┃ ┣ 📜eslint.config.js
 ┃ ┣ 📜index.html
 ┃ ┣ 📜localhost+1-key.pem
 ┃ ┣ 📜localhost+1.pem
 ┃ ┣ 📜package-lock.json
 ┃ ┣ 📜package.json
 ┃ ┣ 📜postcss.config.js
 ┃ ┣ 📜README.md
 ┃ ┣ 📜tailwind.config.js
 ┃ ┗ 📜vite.config.js
 ┣ 📂img
 ┃ ┣ 📜emgMap.gif
 ┃ ┣ 📜github_flow.png
 ┃ ┣ 📜notice.gif
 ┃ ┣ 📜stat.gif
 ┃ ┗ 📜working_period.jpg
 ┗ 📜README.md
```

</details>

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
  ### [아이디찾기]
  - 회원가입 할 때 등록한 휴대폰 번호로 아이디를 찾을 수 있습니다.<br><br>
  ![image](https://github.com/user-attachments/assets/172ebb5e-3a06-4b3d-bc44-19a867e39aef)<br><br><br><br>
  - 위와 동일한 본인인증 로직을 거쳐 본인인증을 진행합니다.
  - 존재하지 않는 휴대폰 번호 입력? -> 해당 휴대폰번호 등록된 아이디가 없다는 창<br><br>
  ![image](https://github.com/user-attachments/assets/3cf7b37b-b69f-4dba-bcbb-7587e96b7322)<br><br><br><br>
  - 올바른 인증번호 입력 후 다음 페이지로 넘어가면 가입한 이메일의 두번째 세번째 글자가 마스킹 처리되어 출력됩니다.<br><br>
  ![image](https://github.com/user-attachments/assets/41efdfb2-3ee1-459b-a17a-70bb75636b1c)<br><br><br><br>
  ### [비밀번호찾기]
  - 회원가입 할 때 등록한 아이디로 비밀번호 재설정을 할 수 있습니다.<br><br>
  ![image](https://github.com/user-attachments/assets/a77b341e-edd4-4a38-998c-244702c69b18)<br><br><br><br>
  - 존재하지 않는 아이디 입력? -> 해당 아이디를 찾을 수 없다는 창
  - 데이터베이스에 존재하는 아이디 입력? -> 비밀번호 재설정 링크가 해당 이메일로 전송<br><br>
  ![image](https://github.com/user-attachments/assets/74dc78ad-b2de-4a34-954d-50055ef5163b)<br><br><br><br>
  - 비밀번호 재설정 버튼을 통해 재설정 페이지로 이동 가능합니다.<br><br>
  ![image](https://github.com/user-attachments/assets/2fa3c46c-6b73-4afc-851a-6c23aef436c8)<br><br><br><br>
  - 회원가입과 동일한 비밀번호 유효성 체크 후 확인을 누르면 비밀번호가 변경됩니다. <br><br>
  ![image](https://github.com/user-attachments/assets/e38fab4e-c049-449d-9e59-a1b8aba4f304)<br><br><br><br>
  ### [소셜로그인]
  - 네이버, 카카오, 구글 SNS 계정을 이용한 회원가입이 가능합니다.
  ![image](https://github.com/user-attachments/assets/8e60a795-71ff-430b-a0bd-bc5329467a61)
  ![image](https://github.com/user-attachments/assets/70bf77f4-2b11-4199-98e5-6dc7370acd23)
  ![image](https://github.com/user-attachments/assets/89418b60-86b4-42f9-a714-4f3c4edc5d88)
  ![image](https://github.com/user-attachments/assets/5be5c508-5c8c-4f22-aac8-ceb6020a1e12)
  ![image](https://github.com/user-attachments/assets/84cffd0f-054c-4344-9fd8-1caad554183f)<br><br><br><br>
  - 소셜을 통한 최초 로그인 시 닉네임 등록이 필수이며 이때도 중복확인이 필요합니다.
  - 소셜계정을 통한 회원가입 완료 후 로그인을 하면 바로 로그인이 가능합니다.<br><br>
  ![image](https://github.com/user-attachments/assets/8eef4f79-897b-4f21-9ec7-e83fd00d97d5)<br><br><br><br>
  ### [마이페이지]
  - 로그인 시 헤더가 로그인/회원가입 에서 마이페이지/로그아웃으로 변경됩니다. 마이페이지를 클릭하면 이동할 수 있습니다.<br><br>
  ![image](https://github.com/user-attachments/assets/00d4188f-6ea0-442d-ad30-233caf9bc5e0)<br><br><br><br>
  - 일반 회원이 회원정보 수정페이지를 클릭하면 비밀번호 확인을 해야합니다.
  - 비밀번호 불일치? -> 비밀번호가 일치하지 않는다는 창
  - 비밀번호 일치? -> 회원정보 수정페이지로 이동<br><br>
  ![image](https://github.com/user-attachments/assets/b2403ad7-0b21-4b9c-9ddc-40683ef6c80d)<br><br><br><br>
  - 회원은 비밀번호, 닉네임, 이름, 주소, 마케팅활용동의 여부를 수정할 수 있습니다.<br><br>
  ![image](https://github.com/user-attachments/assets/57f653fc-d92f-4fd4-a777-7989b7f09384)<br><br><br><br>
  - 비밀번호 변경버튼 클릭 시 현재 비밀번호, 새로운 비밀번호, 비밀번호 확인을 입력해야합니다.
  - 회원가입과 동일하게 유효성에 따른 우측에 체크가 표시됩니다.
  - 현재 비밀번호 틀릴 시? -> 현재 비밀번호가 일치하지 않는다는 창
  - 유효성에 맞지 않은 비밀번호 입력 시? -> 비밀번호를 다시 한번 확인해달라는 창
  - 비밀번호가 일치하지 않을 시 -> 비밀번호가 일치하지 않는다는 창<br><br>
  ![image](https://github.com/user-attachments/assets/28178f58-70a1-4e1e-b20b-926184761cca)<br><br><br><br>
  - 휴대폰 번호도 회원가입과 동일한 본인인증 절차를 거친 뒤 다음 버튼을 누르면 수정페이지에서 바로 휴대폰 번호가 변경된 것을 확인할 수 있습니다.<br><br>
  ![image](https://github.com/user-attachments/assets/17f6a413-e988-41f1-83a7-2f0a76500ad6)<br><br><br><br>
  - 소셜로그인 회원이 회원정보 수정페이지를 클릭하면 비밀번호 확인 절차 없이 바로 수정페이지로 이동하게 됩니다.
  - 소셜로그인 회원은 해당 SNS계정에서 받아온 정보만이 화면에 표시됩니다.
  - 비밀번호 변경하기가 없습니다.
  - 카카오와 네이버는 이름, 휴대폰번호, 성별이 표시되지만 구글은 이름과 성별만 출력됩니다.
  - 소셜 회원은 닉네임과 주소만 수정 가능합니다.<br><br>
  ![image](https://github.com/user-attachments/assets/5761d6a3-dd80-458a-b09c-42e607f6cced)<br><br><br><br>
  ### [최신의료뉴스]
  - 네이버 검색 api를 이용하여 특정 키워드에 맞는 실시간 뉴스를 제공합니다.
  - 자세히 보기 클릭 시 해당 기사의 원문 링크로 이동합니다.<br><br>
  ![Honeycam 2024-10-22 19-15-26](https://github.com/user-attachments/assets/9cc44809-b88f-4705-882b-c940e2206baa)<br><br><br><br>

  


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
