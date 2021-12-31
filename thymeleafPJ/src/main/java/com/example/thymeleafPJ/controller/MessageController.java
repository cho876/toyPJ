package com.example.thymeleafPJ.controller;


import java.util.HashMap;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.example.thymeleafPJ.constant.ReqMap;
import com.example.thymeleafPJ.core.base.BaseController;
import com.example.thymeleafPJ.service.MessageService;
import com.example.thymeleafPJ.vo.AnsVo;
import com.example.thymeleafPJ.vo.BtnVo;

@RestController
@RequestMapping(ReqMap.CHAT_PATH)
public class MessageController extends BaseController{
	
	@Autowired
	MessageService messageService;

	
	@GetMapping("/getNextBtn")
	public HashMap<String, Object> getNextBtn(
			@RequestParam(value = "btnNo", required = true) String btnNo) throws Exception {
		HashMap<String, Object> res = new HashMap<>();
		
		log.info("==== receiveChatTalk ====");
		log.info("Get Parameter-btnNo: " + btnNo);
		String childYn = messageService.getChildBtnYn(btnNo);
		log.info("childYn: " + childYn);
		
		if(childYn.equals("Y")) {
			List<BtnVo> btnList = messageService.getChildBtn(btnNo);
			res.put("type", "btn");
			res.put("btnList", btnList);
		}else {
			AnsVo ansVo = messageService.getAnswer(btnNo);
			res.put("type", "txt");
			res.put("ansVo", ansVo);
		}

		return res;
	}
}
