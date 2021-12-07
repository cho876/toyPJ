
package com.example.react_chatbot.controller;

import java.text.SimpleDateFormat;
import java.util.Calendar;
import java.util.HashMap;
import java.util.List;

import javax.servlet.http.HttpServletRequest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.example.react_chatbot.service.MemberService;
import com.example.react_chatbot.service.ChatService;
import com.example.react_chatbot.vo.BtnVo;
import com.example.react_chatbot.vo.MsgVo;
import com.example.react_chatbot.vo.QnaVo;


@RequestMapping(value="/chatbot")
@RestController
public class ChatController {
	
	@Autowired
	private ChatService chatService;

	@Autowired
	private MemberService memberService;
	
	
	@RequestMapping(value="/sendBug", method= {RequestMethod.POST})
	public HashMap<String,String> sendBug(@RequestBody HashMap<String,String> param) {
		HashMap<String,String> map = new HashMap<String,String>();
		
		System.out.println(">>>>>>> sendBug Called");
		
		String senderId = param.get("senderId");
		String message = param.get("message");
		String location = param.get("location");
		String email = param.get("email");
		
		SimpleDateFormat sdf = new SimpleDateFormat("yyyy-MM-dd hh:mm:ss");
		Calendar c1 = Calendar.getInstance();
		String strToday = sdf.format(c1.getTime());

		
		MsgVo msgVo = new MsgVo();
		msgVo.setSenderId(senderId);
		msgVo.setMessage(message);
		msgVo.setLocation(location);
		msgVo.setEmail(email);
		msgVo.setReg_dt(strToday);		
		
		chatService.insertMsg(msgVo);
		
		map.put("message", "버그에 대한 접수가 완료되었습니다.");
		
		return map;
	}
	
	@RequestMapping(value="/getBtn", method= {RequestMethod.GET})
	public HashMap<String,Object> getBtn(HttpServletRequest request) {
		HashMap<String,Object> map = new HashMap<String,Object>();

		String btnNo = request.getParameter("btnno");
		
		List<BtnVo> btnList = null;
		HashMap<String,Object> res = new HashMap<String,Object>();
		
		System.out.println(">> btnNo: " + btnNo);
		int cnt = chatService.countChildBtn(btnNo);
		System.out.println(">> cnt: " + cnt);
		
		if(cnt > 0) {	// 아직 버튼형이 남았을 경우,
			btnList = chatService.getChildBtn(btnNo);
			map.put("flag", "btn");
			map.put("nextBtn", btnList);
		}else {
			System.out.println(">>> btnNo: " + btnNo);
			res = chatService.getAnswer(btnNo);

			map.put("flag", "str");
			map.put("ans", res.get("ANSNM"));
			map.put("msg", res.get("BTNNM"));
		}
		
		return map;
	}
	
	
	@RequestMapping(value="/onLogin", method= {RequestMethod.POST})
	public int onLogin(@RequestBody HashMap<String,String> param) {
		HashMap<String,String> map = new HashMap<String,String>();
		
		map.put("user_id", param.get("user_id"));
		map.put("user_pw", param.get("user_pw"));
		int ret = memberService.selectMember(map);

		return ret;
	}
}
