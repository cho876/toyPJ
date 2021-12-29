package com.example.thymeleafPJ.controller;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.HttpRequestMethodNotSupportedException;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.thymeleafPJ.constant.ReqMap;
import com.example.thymeleafPJ.core.base.BaseController;
import com.example.thymeleafPJ.core.exception.BadRequestException;
import com.example.thymeleafPJ.service.BugService;
import com.example.thymeleafPJ.vo.MsgVo;

@RestController
@RequestMapping(ReqMap.API_PATH)
public class ApiController extends BaseController{
	
	@Autowired
	BugService bugService;
	
	@PostMapping("/sendMessage")
	public HashMap<String, Object> sendMessage(@RequestBody MsgVo msgVo) throws Exception {
		HashMap<String, Object> res = new HashMap<>();
		log.info(msgVo.toString());

		if(msgVo.getBtnNo().equals("1001")) {
			res.put("msg","무슨 오류인지 말씀해주세요.");
			res.put("type","text");
		}else {
			List<Map<String,Object> > btnList = new ArrayList<>();

			Map<String,Object> map1 = new HashMap<>();
			map1.put("btnNo","1111");
			map1.put("btnNm", "경비 신청");
			btnList.add(map1);

			Map<String,Object> map2 = new HashMap<>();
			map2.put("btnNo","2222");
			map2.put("btnNm", "동호회 가입");
			btnList.add(map2);

			Map<String,Object> map3 = new HashMap<>();
			map3.put("btnNo","3333");
			map3.put("btnNm", "예산 조회");
			btnList.add(map3);
			
			Map<String,Object> map4 = new HashMap<>();
			map4.put("btnNo","4444");
			map4.put("btnNm", "거래처 번경");
			btnList.add(map4);
			
			Map<String,Object> map5 = new HashMap<>();
			map5.put("btnNo","5555");
			map5.put("btnNm", "PC/주변기기 신청");
			btnList.add(map5);
			
			Map<String,Object> map6 = new HashMap<>();
			map6.put("btnNo","6666");
			map6.put("btnNm", "주차장 신청");
			btnList.add(map6);
			
			Map<String,Object> map7 = new HashMap<>();
			map7.put("btnNo","7777");
			map7.put("btnNm", "명절선물 신청");
			btnList.add(map6);
			
			res.put("msg",btnList);
			res.put("type","button");			
		}
		
		res.put("result", "success");
		return res;
	}
}
