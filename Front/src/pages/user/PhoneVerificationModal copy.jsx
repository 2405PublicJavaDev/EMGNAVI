// 메시지 SDK 불러오기
const msgModule = require('coolsms-node-sdk').default

// 인증을 위해 발급받은 본인의 API Key를 사용합니다.
const apiKey = 'NCSY6JZLRXVWS3BX'
const apiSecret = 'RDC9PGPKKGCSIQSWT4IFHK0NNO1IOVW1'
const messageService = new msgModule(apiKey, apiSecret);

// 메시지 구성
const message = {
    // 문자 내용 (최대 2,000Bytes / 90Bytes 이상 장문문자)
    text: '[쿨에스엠에스 문자 테스트] Hello world!',
    // 수신번호 (문자 받는 이)
    to: '01053248588',
    // 발신번호 (문자 보내는 이)
    from: '01053248588'
}
// 메시지 목록 그룹에 담기 (배열)
const messageGroup = [message]

// 메시지 그룹 발송 요청
messageService.sendMany(messageGroup).then(console.log).catch(console.error)