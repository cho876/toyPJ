package com.example.thymeleafPJ.service.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.thymeleafPJ.dao.MessageDao;
import com.example.thymeleafPJ.service.MessageService;
import com.example.thymeleafPJ.vo.AnsVo;
import com.example.thymeleafPJ.vo.BtnVo;
import com.example.thymeleafPJ.vo.MsgVo;

@Service
public class MessageServiceImpl implements MessageService {
	
	@Autowired
	private MessageDao messageDao;
	
	@Override
	public List<MsgVo> getAllMsgs() {
		return messageDao.getAllMsgs();
	}

	@Override
	public List<BtnVo> getChildBtn(String btnNo) {
		return messageDao.getChildBtn(btnNo);
	}

	@Override
	public String getChildBtnYn(String btnNo) {
		return messageDao.getChildBtnYn(btnNo);
	}

	@Override
	public AnsVo getAnswer(String btnNo) {
		return messageDao.getAnswer(btnNo);
	}
}
