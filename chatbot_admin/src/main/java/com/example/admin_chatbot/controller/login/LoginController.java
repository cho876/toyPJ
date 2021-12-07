package com.example.admin_chatbot.controller.login;

import java.util.HashMap;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.example.admin_chatbot.service.login.MemberService;



@RequestMapping(value="/admin")
@RestController
public class LoginController {
	
	@Autowired
	private MemberService memberService;

	@RequestMapping(value="/onLogin", method= {RequestMethod.POST})
	public int onLogin(@RequestBody HashMap<String,String> param) {
		HashMap<String,String> map = new HashMap<String,String>();
		
		System.out.println("== onLogin");
		System.out.println("user_id: " + param.get("user_id"));
		System.out.println("user_pw: " + param.get("user_pw"));

		map.put("user_id", param.get("user_id"));
		map.put("user_pw", param.get("user_pw"));
		
		int ret = memberService.selectMember(map);

		return ret;
	}
}
