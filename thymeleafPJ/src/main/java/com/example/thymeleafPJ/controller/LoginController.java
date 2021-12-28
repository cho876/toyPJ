package com.example.thymeleafPJ.controller;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;

import com.example.thymeleafPJ.constant.ReqMap;
import com.example.thymeleafPJ.core.base.BaseController;
import com.example.thymeleafPJ.vo.MemberVo;

@Controller
@RequestMapping(ReqMap.LOGIN_PATH)
public class LoginController extends BaseController {

	@RequestMapping(value = "/index")
	public String login(Model model) {
		log.info("login called");

		MemberVo memberVo = new MemberVo("kwonnee", "qwerty11");

		log.info("userId : " + memberVo.getUserId());
		log.info("userPw : " + memberVo.getUserPw());

		model.addAttribute("test", "hello world");
		model.addAttribute("member", memberVo);

		return "login/login";
	}
}
