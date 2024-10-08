package com.emginfo.emgnavi.map.controller;

import com.emginfo.emgnavi.common.parsing.controller.ParsingController;
import com.emginfo.emgnavi.common.success.SuccessCode;
import com.emginfo.emgnavi.common.success.SuccessResponse;
import com.emginfo.emgnavi.hospital.vo.Hospital;
import com.emginfo.emgnavi.map.service.MapService;
import com.emginfo.emgnavi.map.vo.GpsInfo;
import com.emginfo.emgnavi.medicine.vo.Medicine;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.util.UriComponentsBuilder;
import org.w3c.dom.Document;
import org.w3c.dom.Element;
import org.w3c.dom.Node;
import org.w3c.dom.NodeList;

import javax.xml.parsers.DocumentBuilderFactory;
import java.net.URI;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Objects;

//@RestController 를 사용했기 때문에 자동으로 return값(객체)를 JSON 형식으로 변환시켜서 보냄
@RestController
@CrossOrigin(origins = "https://127.0.0.1:3000")
//프로젝트에서 백엔드는 api 서버이기 때문에 URL 제일 앞단에 /api를 붙여준다
@RequestMapping("/api")
public class MapController {

    @Autowired
    private MapService mapService;

    private String getTagValue(String tag, Element element) {
        if (element != null) {
            NodeList nodeList = element.getElementsByTagName(tag);
            if (nodeList.getLength() > 0) {
                Node node = nodeList.item(0).getFirstChild();
                if (node != null) {
                    return node.getNodeValue();
                }
            }
        }
        return null;
    }

    @GetMapping("/map/getAroundEmgRoom")
    public SuccessResponse getAroundEmgRoomList(double latitude, double longitude, double distance) {
        GpsInfo gpsInfo = new GpsInfo(latitude, longitude, distance);

        Map<String, String> emgMap = new HashMap<>();  // OpenAPI로 가져온 응급실 현황값을 저장하는 HashMap
        try {
            String apiUri = "http://apis.data.go.kr/B552657/ErmctInfoInqireService";
            String serviceKey = "bkyQSu0fwVtExz5TuFT2Zeu3ngU83%2BLjvwFWuoeyBdqJjPwpsiTsnSo8TWgU8uIYxEqv58b7fKmUQm7s8X8VTg%3D%3D";

            // URI 빌드
            URI uri = URI.create(UriComponentsBuilder.fromHttpUrl(apiUri)
                    .path("/getEmrrmRltmUsefulSckbdInfoInqire")
                    .queryParam("ServiceKey", serviceKey)
                    .queryParam("numOfRows", 500)
                    .build()
                    .toUriString());

            Document document = DocumentBuilderFactory
                    .newInstance()
                    .newDocumentBuilder()
                    .parse(uri.toString());

            document.getDocumentElement().normalize();

            NodeList nodeList = document.getElementsByTagName("item");

            for (int j = 0; j < nodeList.getLength(); j++) {
                Node node = nodeList.item(j);
                Element element = (Element) node;

                emgMap.put(getTagValue("hpid", element), getTagValue("hvec", element));

            }
        } catch (Exception e) {
            e.printStackTrace();
        }

        List<Hospital> hospitals = mapService.getAroundEmgRoomList(gpsInfo);

        for (Hospital hospital : hospitals) {
            String hvec = emgMap.get(hospital.getHpid());
            hospital.setHvec(Objects.requireNonNullElse(hvec, "정보없음"));
        }



//      ##Return값 작성 예시##
//      SuccessResponse(
//            SuccessCode.[RESOURCE_FOUND,REGISTER_SUCCESS],    ##SuccessCode enum 객체에서 동작에 어울리는 메시지를 선택하면 된다(현재 등록 완료, 조회 성공 2가지가 있음)
//            hospitals   ##요청을 보낸 웹 페이지로 보낼 데이터. SuccessResponse 객체의 필드로 저장되며 SuccessResponse째로 JSON 변환되어 요청 보냈던 페이지로 리턴
//      )
        return new SuccessResponse(SuccessCode.RESOURCE_FOUND, hospitals);
    }

}

