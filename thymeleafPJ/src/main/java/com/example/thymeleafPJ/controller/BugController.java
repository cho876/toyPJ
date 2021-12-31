package com.example.thymeleafPJ.controller;

import java.time.LocalDateTime;
import java.time.ZoneId;
import java.util.Date;
import java.util.HashMap;

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
@RequestMapping(ReqMap.BUG_PATH)
public class BugController extends BaseController{
	
	@Autowired
	BugService bugService;


	@PostMapping("/sendBug")
	public HashMap<String, Object> sendBug(
			@RequestBody MsgVo msgVo) throws Exception {
		HashMap<String, Object> res = new HashMap<>();
		
		log.info("==== sendBug ====");
		log.info("POST Parameter-msgVo: " + msgVo.toString());
		log.info("curDate: " + Date.from(LocalDateTime.now().atZone(ZoneId.systemDefault()).toInstant()));
		
		bugService.insertMsg(msgVo);
		
		return res;
	}
}
