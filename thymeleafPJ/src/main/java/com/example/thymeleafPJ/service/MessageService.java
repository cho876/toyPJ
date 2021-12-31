package com.example.thymeleafPJ.service;

import java.util.List;

import com.example.thymeleafPJ.vo.AnsVo;
import com.example.thymeleafPJ.vo.BtnVo;
import com.example.thymeleafPJ.vo.MsgVo;

public interface MessageService {
	public List<MsgVo> getAllMsgs();
	public List<BtnVo> getChildBtn(String btnNo);
	public String getChildBtnYn(String btnNo);
	public AnsVo getAnswer(String btnNo);

}
