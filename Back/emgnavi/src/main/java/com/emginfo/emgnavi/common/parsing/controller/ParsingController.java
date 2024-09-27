package com.emginfo.emgnavi.common.parsing.controller;

import com.emginfo.emgnavi.common.parsing.mapper.ParsingMapper;
import com.emginfo.emgnavi.hospital.vo.Hospital;
import com.emginfo.emgnavi.medicine.vo.Medicine;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.util.UriComponentsBuilder;
import org.w3c.dom.Document;
import org.w3c.dom.Element;
import org.w3c.dom.Node;
import org.w3c.dom.NodeList;

import javax.xml.parsers.DocumentBuilderFactory;
import java.net.URI;

@RestController
public class ParsingController {

    private ParsingMapper parsingMapper;

    public ParsingController() {}
    @Autowired
    public ParsingController(ParsingMapper parsingMapper) { this.parsingMapper = parsingMapper; }

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

    @GetMapping("/hospital")
    public void insertHospital() {
        try {
            for (int i = 1; i <= 104; i++) {
                String apiUri = "http://apis.data.go.kr/B552657/ErmctInfoInqireService";
                String serviceKey = "W6TT%2BejriLxb1mRvG%2BbfWclxEsMYG3PV9Bv3TvLLonZDzqY1LGcJFzUyClCIoMWNh9IKvQlw6C9%2BkLxHxH8mpQ%3D%3D";

                // URI 빌드
                URI uri = URI.create(UriComponentsBuilder.fromHttpUrl(apiUri)
                        .path("/getEgytBassInfoInqire")
                        .queryParam("serviceKey", serviceKey)
                        .queryParam("numOfRows", 1000)
                        .queryParam("pageNo", i)
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

                    Hospital hospital = new Hospital();
                    hospital.setHpid(getTagValue("hpid", element));
                    hospital.setDutyName(getTagValue("dutyName", element));
                    hospital.setDutyAddr(getTagValue("dutyAddr", element));
                    hospital.setDutyTel1(getTagValue("dutyTel1", element));
                    hospital.setErTel(getTagValue("dutyTel3", element));
                    hospital.setHvec(getTagValue("hvec", element));
                    hospital.setHvoc(getTagValue("hvoc", element));
                    hospital.setHvcc(getTagValue("hvcc", element));
                    hospital.setHvncc(getTagValue("hvncc", element));
                    hospital.setHvccc(getTagValue("hvccc", element));
                    hospital.setHvicc(getTagValue("hvicc", element));
                    hospital.setHvgc(getTagValue("hvgc", element));
                    hospital.setDutyHayn(getTagValue("dutyHayn", element));
                    hospital.setDutyHano(getTagValue("dutyHano", element));
                    hospital.setDutyinf(getTagValue("dutyinf", element));
                    hospital.setDutyMaping(getTagValue("dutyMaping", element));
                    hospital.setDutyEryn(getTagValue("dutyEryn", element));
                    hospital.setDutyTime1C(getTagValue("dutyTime1C", element));
                    hospital.setDutyTime2C(getTagValue("dutyTime2C", element));
                    hospital.setDutyTime3C(getTagValue("dutyTime3C", element));
                    hospital.setDutyTime4C(getTagValue("dutyTime4C", element));
                    hospital.setDutyTime5C(getTagValue("dutyTime5C", element));
                    hospital.setDutyTime6C(getTagValue("dutyTime6C", element));
                    hospital.setDutyTime7C(getTagValue("dutyTime7C", element));
                    hospital.setDutyTime8C(getTagValue("dutyTime8C", element));
                    hospital.setDutyTime1S(getTagValue("dutyTime1S", element));
                    hospital.setDutyTime2S(getTagValue("dutyTime2S", element));
                    hospital.setDutyTime3S(getTagValue("dutyTime3S", element));
                    hospital.setDutyTime4S(getTagValue("dutyTime4S", element));
                    hospital.setDutyTime5S(getTagValue("dutyTime5S", element));
                    hospital.setDutyTime6S(getTagValue("dutyTime6S", element));
                    hospital.setDutyTime7S(getTagValue("dutyTime7S", element));
                    hospital.setDutyTime8S(getTagValue("dutyTime8S", element));
                    hospital.setMKioskTy25(getTagValue("mKioskTy25", element));
                    hospital.setMKioskTy1(getTagValue("mKioskTy1", element));
                    hospital.setMKioskTy2(getTagValue("mKioskTy2", element));
                    hospital.setMKioskTy3(getTagValue("mKioskTy3", element));
                    hospital.setMKioskTy4(getTagValue("mKioskTy4", element));
                    hospital.setMKioskTy5(getTagValue("mKioskTy5", element));
                    hospital.setMKioskTy6(getTagValue("mKioskTy6", element));
                    hospital.setMKioskTy7(getTagValue("mKioskTy7", element));
                    hospital.setMKioskTy8(getTagValue("mKioskTy8", element));
                    hospital.setMKioskTy9(getTagValue("mKioskTy9", element));
                    hospital.setMKioskTy10(getTagValue("mKioskTy10", element));
                    hospital.setMKioskTy11(getTagValue("mKioskTy11", element));
                    hospital.setWgs84Lon(getTagValue("wgs84Lon", element));
                    hospital.setWgs84Lat(getTagValue("wgs84Lat", element));
                    hospital.setDgidIdName(getTagValue("dgidIdName", element));
                    hospital.setHpbdn(getTagValue("hpbdn", element));
                    hospital.setHpccuyn(getTagValue("hpccuyn", element));
                    hospital.setHpcuyn(getTagValue("hpcuyn", element));
                    hospital.setHperyn(getTagValue("hperyn", element));
                    hospital.setHpgryn(getTagValue("hpgryn", element));
                    hospital.setHpicuyn(getTagValue("hpicuyn", element));
                    hospital.setHpnicfuyn(getTagValue("hpnicfuyn", element));
                    hospital.setHpopyn(getTagValue("hpopyn", element));

                    System.out.println(hospital);

                    parsingMapper.insertHospital(hospital);
                }
            }
        } catch (Exception e) {
            e.printStackTrace();
        }
    }

    @GetMapping("/medicine")
    public void insertMedicine() {
        try {
            for (int i = 1; i <= 48; i++) {
                String apiUri = "http://apis.data.go.kr/1471000/DrbEasyDrugInfoService";
                String serviceKey = "%2FbBMEVIxHPhh7DOBXrAUSJr9Cn846n4bikhHHJWPEJV67mgm9xLcdtDcX3iVJAfiEIRyAe6I0GmhrKOcyeXwLg%3D%3D";

                // URI 빌드
                URI uri = URI.create(UriComponentsBuilder.fromHttpUrl(apiUri)
                        .path("/getDrbEasyDrugList")
                        .queryParam("ServiceKey", serviceKey)
                        .queryParam("numOfRows", 100)
                        .queryParam("pageNo", i)
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

                    Medicine medicine = new Medicine();
                    medicine.setItemSeq(getTagValue("itemSeq", element));
                    medicine.setEntpName(getTagValue("entpName", element));
                    medicine.setItemName(getTagValue("itemName", element));
                    medicine.setEfcyQesitm(getTagValue("efcyQesitm", element));
                    medicine.setUseMethodQesitm(getTagValue("useMethodQesitm", element));
                    medicine.setAtpnWarnQesitm(getTagValue("atpnWarnQesitm", element));
                    medicine.setAtpnQesitm(getTagValue("atpnQesitm", element));
                    medicine.setIntrcQesitm(getTagValue("intrcQesitm", element));
                    medicine.setSeQesitm(getTagValue("seQesitm", element));
                    medicine.setDepositMethodQesitm(getTagValue("depositMethodQesitm", element));
                    medicine.setOpenDe(getTagValue("openDe", element));
                    medicine.setUpdateDe(getTagValue("updateDe", element));

                    parsingMapper.insertMedicine(medicine);
                }
            }
        } catch (Exception e) {
            e.printStackTrace();
        }
    }
}