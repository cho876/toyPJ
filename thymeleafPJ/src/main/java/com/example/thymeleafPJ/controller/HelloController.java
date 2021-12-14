package com.example.thymeleafPJ.controller;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller("/")
public class HelloController {
	
	@RequestMapping(value="/hello")
	public String hello(Model model) {
		System.out.println("hello called");
		
		model.addAttribute("test", "hello world");
		return "hello";
	}
}
