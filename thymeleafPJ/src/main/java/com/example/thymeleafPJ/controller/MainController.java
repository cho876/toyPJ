package com.example.thymeleafPJ.controller;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;

import com.example.thymeleafPJ.constant.ReqMap;
import com.example.thymeleafPJ.vo.MemberVo;


@Controller
@RequestMapping(ReqMap.MAIN_PATH)
public class MainController {
	
	protected final Logger log = LoggerFactory.getLogger(this.getClass());

	@RequestMapping(value="/index")
	public String login(Model model) {
		log.info("main called");
		
		
		model.addAttribute("test", "hello world");		
		return "main/main";
	}
}
