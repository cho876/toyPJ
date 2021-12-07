package com.example.slack.controller;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.http.HttpEntity;
import org.springframework.http.HttpMethod;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.client.RestTemplate;

import com.example.slack.vo.SendVo;


@RequestMapping("/kwonnee")
@RestController
public class SlackController {
	
    @RequestMapping(value="/sendToSlack", method={RequestMethod.POST})
    public void send(@RequestBody SendVo sendVo){
    	System.out.println(">>>>>> send start");
    	
    	System.out.println(sendVo.toString());
    	
        RestTemplate restTemplate = new RestTemplate();

        Map<String,Object> request = new HashMap<String,Object>();
        request.put("username", "VOC 알리미");
        request.put("color", "#36a64f");
        request.put("pretext", "[업무 요청내역]");
        
        String message = "요청자: "+sendVo.getUserName() + 
        		"\n담당부서: " + sendVo.getDepartment() +
        		"\n요청서비스: " + sendVo.getService() +
        		"\n요청내용: " + sendVo.getRequest() +
        		"\nhttps://slack.com/intl/ko-kr/";
        
        Map<String,Object> attachMap = new HashMap<String,Object>();
        attachMap.put("value", message);
        attachMap.put("short", false);
        
        List<Map<String, Object>> listMap = new ArrayList<Map<String, Object>>(); 
        listMap.add(attachMap);
        request.put("fields", listMap);
        
        HttpEntity<Map<String,Object>> entity = new HttpEntity<Map<String,Object>>(request);

        restTemplate.exchange(sendVo.getWebhookUrl(), HttpMethod.POST, entity, String.class);
    }
}