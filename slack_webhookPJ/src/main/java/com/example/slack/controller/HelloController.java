package com.example.slack.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
public class HelloController {

	@RequestMapping(value="/hello") 
	public String main() throws Exception {  
		System.out.println("called main");
		return "hello"; 
	} 
}
