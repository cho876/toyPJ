package com.example.thymeleafPJ.controller;

import java.util.HashMap;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.example.thymeleafPJ.constant.ReqMap;
import com.example.thymeleafPJ.service.BugService;
import com.example.thymeleafPJ.vo.MsgVo;

@RestController
@RequestMapping(ReqMap.API_PATH)
public class ApiController {
	
	@Autowired
	BugService bugService;
	
	Logger logger = LoggerFactory.getLogger(this.getClass());
	
	@PostMapping("/sendMessage")
	public HashMap<String, String> sendMessage(@RequestBody MsgVo msgVo){
		HashMap<String, String> res = new HashMap<>();
		
		logger.info("in sendMessage");

		System.out.println(msgVo.toString());
		
		res.put("result", "success");
		res.put("msg","무슨 오류인지 말씀해주세요.");
		
		return res;
	}
}
