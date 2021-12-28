package com.example.thymeleafPJ.controller;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.thymeleafPJ.constant.ReqMap;
import com.example.thymeleafPJ.core.base.BaseController;
import com.example.thymeleafPJ.service.BugService;
import com.example.thymeleafPJ.vo.MsgVo;

@RestController
@RequestMapping(ReqMap.API_PATH)
public class ApiController extends BaseController{
	
	@Autowired
	BugService bugService;
	
	@PostMapping("/sendMessage")
	public HashMap<String, Object> sendMessage(@RequestBody MsgVo msgVo){
		HashMap<String, Object> res = new HashMap<>();
		log.info(msgVo.toString());

		if(msgVo.getBtnNo().equals("1001")) {
			res.put("msg","무슨 오류인지 말씀해주세요.");
			res.put("type","text");
		}else {
			List<Map<String,Object> > btnList = new ArrayList<>();

			Map<String,Object> map = new HashMap<>();
			map.put("btnNo","1111");
			map.put("btnNm", "test1");
			btnList.add(map);

			map.put("btnNo","2222");
			map.put("btnNm", "test2");
			btnList.add(map);
			
			res.put("msg",btnList);
			res.put("type","button");			
		}
		
		res.put("result", "success");
		
		return res;
	}
}
