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
 ## 김만규: 의약품/약국 정보 시스템 개발
  - 의약품 조회 페이지: 의약품 정보 검색 및 목록 제공 시스템 개발, 실시간 자동완성 검색 기능 구현
  - 의약품 상세 페이지: 의약품의 상세 정보(효능, 사용법, 주의사항 등) 제공 및 리뷰 시스템 구현
  - 약국 조회 페이지: 약국 정보 검색 및 목록 제공 시스템 개발, 즐겨찾기 기능 통합 구현
  - 약국 상세 페이지: 약국 상세 정보, 위치 정보, 운영 정보 제공 및 리뷰 시스템 구현
 ## 김덕영: AED 정보 및 지도, 즐겨찾기 기능, 리뷰 신고 및 회원 정지 처리 기능
  - AED 정보 : GeoLocation을 사용하여 사용자의 현 위치를 파악하고, 주변에 설치된 AED(자동 심장 충격기) 위치 정보를 지도에 표시하여 제공하는 서비스 개발
  - 회원 신고 : 리뷰를 신고할 수 있으며, 관리자가 작성자 또는 신고자에 대해 회원 정지 처리를 할 수 있는 서비스 개발.
  - 즐겨찾기 기능 : 회원이 병원, 약국을 즐겨찾기에 등록하거나 삭제할 수 있으며, 마이페이지에서 조회할 수 있는 서비스 개발.
 ## 양희준: 병원 지도, 리뷰, 문의
  - 병원 지도 : GeoLocation으로 사용자의 현 위치를 통해 주변 병원을 지도에 마커 형태로 띄우고 사이드바에 목록 구현
  - 리뷰 : 등록/조회/수정/삭제가 가능한 리뷰 서비스를 공통적으로 사용 가능하도록 구현
  - 문의 : 응급 네비에 문의할 수 있는 서비스 개발

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
  
## 3. 김덕영
### [AED 지도]
- KakaoMap API를 사용해 지도를 구현하고, GeoLocation API를 통해 사용자의 현재 위치를 마커로 표시합니다.
- 사용자는 현재 위치를 기준으로 설정된 검색 반경 내에서 AED 정보를 확인할 수 있습니다.
- AED 사용 방법과 심폐소생술 방법을 팝업창을 통해 확인하고, 다운로드할 수 있습니다.
- 받아온 AED 정보는 지도에 마커와 인포윈도우로 표시되며, 사이드바에는 리스트 형태로 노출됩니다.
![AED 지도](https://github.com/user-attachments/assets/1153cbf7-3192-48af-83b7-0f929ccf4dd6)
### [즐겨찾기]
- 병원과 약국 리스트에서 즐겨찾기를 등록하거나 삭제할 수 있습니다.
- 병원과 약국의 상세 페이지에서도 즐겨찾기 등록 및 삭제가 가능합니다.
- 마이페이지에서 병원과 약국의 즐겨찾기 리스트를 각각 조회할 수 있습니다.
- 즐겨찾기 페이지에서는 등록된 기관의 상세 정보로 이동할 수 있습니다.
- 즐겨찾기 페이지에서 단일 또는 다중 항목을 선택하여 즐겨찾기를 삭제할 수 있습니다.	
 ![즐겨찾기](https://github.com/user-attachments/assets/b84d1238-1522-4da1-931c-23ded3e5f88f)
### [신고]
- 사용자는 신고 사유를 선택하거나 작성하여 리뷰를 신고할 수 있습니다.
- 관리자는 회원 신고 리스트에서 신고된 리뷰의 정보를 확인할 수 있습니다.
- 관리자는 접수된 신고에 대해 작성자 또는 신고자를 회원 정지 처리할 수 있으며, 신고 상태는 '처리 완료'로 변경됩니다.
- '처리 완료' 상태인 신고 항목에서는 정지된 회원과 정지 해제 날짜를 확인할 수 있습니다.
- 작성자가 정지된 경우, 정지 해제 날짜까지 로그인이 불가능하며 해당 리뷰는 숨김 처리됩니다.
- 신고자가 정지된 경우, 정지 해제 날짜까지 로그인이 불가능합니다.
- ![신고](https://github.com/user-attachments/assets/d7d65f06-f549-4875-aa07-4d08493b8045)

<br><br><br>

## 4. 김만규
### [의약품 조회 페이지]
- 의약품 정보 검색 및 표시 기능 구현
  - 제품명/업체명 기준으로 검색할 수 있는 검색바 구현
  - 실시간 자동완성 기능 (2글자 이상 입력 시 작동)
  - 키보드 방향키로 자동완성 결과 탐색 가능
- 페이지네이션 구현
  - 한 페이지당 10개의 항목 표시
  - 직관적인 페이지 이동 버튼 제공
  - 현재 페이지 하이라이트 표시
- 반응형 테이블 레이아웃
  - 업체명, 제품명, 공개일자 등 주요 정보 표시
  - 클릭 시 상세 페이지로 이동
  ![의약품 조회 페이지](https://github.com/user-attachments/assets/a98cdd9a-7d46-4245-9a58-f01cd54a3c86)
### [의약품 상세 페이지]
- 상세 정보 표시 섹션
  - 제품 이미지 및 기본 정보 표시
  - 효능, 사용법, 주의사항, 보관법 등 상세 정보 제공
- 리뷰 시스템 구현
  - 별점 기반 평가 기능
  - 로그인 사용자만 리뷰 작성 가능
  - 리뷰 작성/수정/삭제 기능
  - 리뷰 신고 기능 통합
- 리뷰 목록 관리
  - 페이지네이션된 리뷰 목록 제공
  - 리뷰 상세보기 기능
  - 작성자 정보 표시
  ![의약품 상세 페이지](https://github.com/user-attachments/assets/ef32f379-721d-4821-844f-481fc1bf21a7)
### [약국 조회 페이지]
- 약국 정보 검색 및 표시 기능
  - 약국명/주소 기준 검색 시스템
  - 실시간 자동완성 기능 구현
  - 키보드 네비게이션 지원
- 즐겨찾기 기능 통합
  - 즐겨찾기 등록/해제 가능
  - 즐겨찾기된 약국 우선 표시
  - 로그인 상태에 따른 기능 제한
- 목록 표시 및 관리
  - 기관명, 위치, 전화번호 정보 제공
  - 페이지네이션 구현
  - 반응형 디자인 적용
  ![약국 조회 페이지](https://github.com/user-attachments/assets/e1b96413-9f2b-4715-8b78-6921234c26e4)
### [약국 상세 페이지]
- 약국 상세 정보 제공
  - 기본 정보 (이름, 주소, 전화번호)
  - 운영 정보 및 위치 정보 표시
- 카카오맵 연동
  - 실제 위치 지도 표시
  - 위도/경도 정보 제공
- 리뷰 시스템
  - 별점 평가 시스템 구현
  - 리뷰 CRUD 기능
  - 신고 시스템 통합
- 즐겨찾기 기능
  - 즐겨찾기 등록/해제 버튼
  - 로그인 상태에 따른 기능 제한
  - 즐겨찾기 상태 실시간 반영
  ![약국 상세 페이지](https://github.com/user-attachments/assets/b8bb346f-dfc5-4772-8efa-45697254af3e)

<br><br><br>

## 5. 양희준
- 아래의 이미지를 클릭하면 유튜브로 넘어가집니다.<br>
[![Video Label](http://img.youtube.com/vi/M-3MTPG_Q-4/0.jpg)](https://youtu.be/M-3MTPG_Q-4)

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

## 엄은지
  ### 좋았던 점(Keep)
- 프론트엔드 작업에서 Tailwind CSS를 사용하여 피그마로 정성들여 디자인한 페이지를 예상보다 빠른 시간 안에 그대로 구현할 수 있었습니다. 효율적이면서도 예쁜 결과물을 얻을 수 있어 만족스러웠습니다.
- 학원 수업에서 자주 다뤘던 회원관리 기능을 맡아 휴대폰 본인인증, 비밀번호 재설정, 소셜 로그인, 유효성 검증 등 처음부터 목표했던 모든 기능을 성공적으로 구현해 낼 수 있었습니다.
- 마지막으로, 리액트의 useAxios, Tailwind, props와 같은 생소한 기술들을 프로젝트를 진행하면서 점점 익히게 되었고, 이를 통해 완전히 새로운 분야에 대한 지식을 쌓을 수 있었던 점이 좋았습니다.

### 아쉬웠던 점(Problem)
- 새로운 기술을 배우기 전까지의 과정이 힘들었습니다. 처음 피그마 디자인을 Tailwind CSS로 변환할 때, 익숙한 CSS 방식이 아니라서 기본적인 너비 조정조차 쉽지 않았고, Tailwind 공식 문서와 ChatGPT에 많이 의존할 수밖에 없었습니다. 리액트를 처음 접했을 때도 마찬가지로 손을 댈 수가 없었고, 특히 백엔드와 프론트엔드 서버로 나누어 데이터를 주고받는 방식 자체를 이해하지 못해 아무 메소드도 스스로 만들 수 없었습니다. 프로젝트 시작 전에 새롭게 구현할 기능에 대해 사전공부를 못한 것이 아쉬움으로 남습니다.
- 전체적인 기능 구현, 특히나 소셜 로그인 구현에서 정말 좌절감을 많이 느꼈습니다. 처음 기능구현을 시작했을 때, 데이터 전송 문제로 약 일주일 이상 아무 진전을 이루지 못했고, 의욕이 사라져 손을 놓고 있었던 시기도 있었습니다. 결국 팀원과 구글링의 도움으로 useEffect와 useAxios의 사용법을 이해하고 하나씩 로직을 짜기 시작했습니다. 모든 기능을 끝낸 후 소셜 로그인을 다시 시도했을 때 새롭게 작성한 코드 때문에 기존 기능들이 실행되지 않아 멘탈이 무너졌습니다. 이 과정에서 멘탈관리를 잘하지 못한 점이 아쉽습니다.
- 리팩토링을 하지 못한 점이 아쉬웠습니다. 시간 부족도 있었지만, 애초에 제 능력도 부족해서 코드 리팩토링을 하지 못한 점이 아쉬움으로 남습니다. 중복되는 로직이 많았는데, 이를 컴포넌트로 분리했다면 더 깔끔한 코드를 만들 수 있었을 것입니다. 이런 부분을 개선하지 못한 것이 아쉬움으로 남았습니다.

### 기대되는 점(Try)
- 현재 작성한 리액트 코드를 타임리프로 새롭게 변환하여 코드를 더 오래 기억하고 이해하고 싶습니다.
- 또한, 스프링 시큐리티와 OAuth를 적용해보려는 계획도 있습니다. 회원관리와 관련된 기능을 수행하면서 보안의 중요성을 깨닫게 되었고, 이러한 기능들을 통해 보안을 강화하여 사용자 정보를 안전하게 보호하고 신뢰를 구축할 수 있는 기반을 마련하고 싶습니다.
  
## 김덕영
  ### 프로젝트를 통해 배운 점
  - 다양한 어노테이션을 익히고, 이전에 사용했던 어노테이션에 대해 더 명확하게 이해하고 비지니스 계층을 복습하게 되었습니다.
  - 기능을 구현하면서 Postman과 InteliJ 프로그램을 사용하게 되었고, 그 사용법을 익히게 되었습니다.
  - React 공부를 하면서 다양한 라이브러리 사용법을 익히고 공공테이터와 카카오 지도 API를 활용하여 기능을 구현해 볼 수 있어 다양한 학습을 할 수 있었습니다.
  ### 어려웠던 점
  - 지도, 공공데이터, React 등 기능 구현에 필요한 기술들을 공부했지만, 바로 적용하는 것이 쉽지 않았습니다. 완벽히 숙지하지 않은 상태에서 진행하게 되어 어려웠던 것 같습니다.
  - 즐겨찾기 기능과 신고 기능이 다른 팀원들과 연관된 기능이었으나 해당 기능에 대해 초반에 개발 일정을 세세하게 고려하지 않아 기능 개발 기간을 균일하게 사용하지 못했습니다.
  ### 개선할 수 있는 점
  - 다른 기능과 관련된 기능을 구현할 때 초기 단계에서 일정을 체계적으로 계획하고 지속적으로 일정을 관리한다면, 주어진 기간 내에 완성도 높은 기능을 구현할 수 있을 것 같습니다.
  - 새로운 기술을 사용하기 전에 충분한 학습을 한 후에 적용한다면, 기능 구현 시 가독성 높은 코드를 작성할 수 있을 것 같습니다.

## 김만규
  ### React와 현대적 웹 개발 경험
  - React를 실무에서 처음 사용하면서 컴포넌트 기반 개발의 장점과 다양한 라이브러리의 활용성을 직접 경험할 수 있었음
  - 실제 서비스 구현 과정에서 사용자 경험을 고려한 UI/UX 설계의 중요성을 깨달음
  - 상세 페이지 구현을 통해 데이터 연동과 상태 관리의 실전 경험 획득
  ### 기술적 도전과 학습
  - React의 핵심 개념(useState, Props 등)과 Tailwind CSS에 대한 사전 학습 부족으로 개발보다 학습에 더 많은 시간이 소요됨
  - 새로운 기술 스택 도입 시 사전 테스트의 중요성을 인식하게 됨
  - 복잡한 상세 페이지 구현 과정에서 컴포넌트 재사용성의 중요성 체득
  ### 협업 과정에서의 교훈
  - 팀원 간 의사소통 미숙으로 인한 비효율 발생
  - 코딩 스타일과 네이밍 컨벤션의 불일치로 인한 코드 통합 과정의 어려움 경험
  - 협업에서 명확한 의사소통과 문서화의 중요성을 체득
  ### 향후 개선 방향
  - React와 관련 기술들에 대한 심화 학습 계획
  - 효율적인 의사소통 방법과 협업 툴 활용 능력 개선
  - 차기 프로젝트에서는 사전 계획과 설계에 더 많은 시간 투자 예정
  - 컴포넌트 설계 시 재사용성과 유지보수성을 더욱 고려한 설계 계획

## 양희준
  - 관성적으로 쓰던 Interface를 정말로 써야 하는지 고민하고 어떻게 하면 DTO를 효율적으로 사용할 수 있는지 등의 다양한 고민을 할 수 있었던 프로젝트였습니다.
  - 전역으로 응답을 처리하면서 스스로 실무에서 써도 될 정도다라고 판단하게 될 만큼 되게 잘 만들었던 뿌듯한 기억도 남게 되었습니다.
  - 다른 팀원들이 리액트에 익숙하지 않았기 때문에 기술 도입 이전에 사전 학습을 통해 미리 익히는 것이 중요하다는 것을 깨닫게 되었습니다.
