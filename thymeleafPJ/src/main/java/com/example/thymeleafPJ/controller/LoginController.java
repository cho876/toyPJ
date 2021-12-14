package com.example.thymeleafPJ.controller;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;

import com.example.thymeleafPJ.vo.MemberVo;

@Controller("/")
public class LoginController {
	
	@RequestMapping(value="/login")
	public String login(Model model) {
		System.out.println("hello called");
		MemberVo memberVo = new MemberVo("kwonnee","qwerty11");
		
		System.out.println("member id: " + memberVo.getUserId());
		System.out.println("member pw: " + memberVo.getUserPw());
		
		model.addAttribute("test", "hello world");
		model.addAttribute("member",memberVo);
		
		return "login";
	}
}
