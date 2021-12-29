package com.example.thymeleafPJ.controller;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;

import com.example.thymeleafPJ.constant.ReqMap;
import com.example.thymeleafPJ.core.base.BaseController;
import com.example.thymeleafPJ.core.exception.BadRequestException;

@Controller
@RequestMapping(ReqMap.MAIN_PATH)
public class MainController extends BaseController {

	protected final Logger log = LoggerFactory.getLogger(this.getClass());

	@RequestMapping(value = "/index")
	public String index(Model model) throws Exception {
		log.info("main called");

		return "main/main";
	}

	@RequestMapping(value = "/modal")
	public String modal(Model model) throws Exception {
		log.info("modal called");
		model.addAttribute("isButton", true);
		return "main/modal";
	}
}
