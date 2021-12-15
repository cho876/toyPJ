package com.example.thymeleafPJ.controller;

import java.util.HashMap;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.servlet.ModelAndView;

import com.example.thymeleafPJ.constant.ReqMap;
import com.example.thymeleafPJ.vo.MemberVo;


@Controller
@RequestMapping(ReqMap.MAIN_PATH)
public class MainController {
	
	protected final Logger log = LoggerFactory.getLogger(this.getClass());

	@RequestMapping(value="/index")
	public String index(Model model) {
		log.info("main called");
		
		return "main/main";
	}

	@RequestMapping(value="/modal")
	public String modal(Model model) {
		log.info("modal called");

		model.addAttribute("isButton", true);
		return "main/modal";
	}
	
	@GetMapping(value="/getNextScenario")
	public ModelAndView getNextScenario(@RequestParam String btnNo, ModelAndView mav) {

		HashMap<String,String> res = new HashMap<>();
		
		log.info("getNextScenario called");
		log.info("btnNo: " + btnNo);

		mav.setViewName("main/main");
		mav.addObject("result", "success");
		mav.addObject("isButton", true);
		return mav;
	}
}
