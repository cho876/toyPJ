package com.example.thymeleafPJ.service.impl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.thymeleafPJ.dao.BugDao;
import com.example.thymeleafPJ.service.BugService;
import com.example.thymeleafPJ.vo.MsgVo;

@Service
public class BugServiceImpl implements BugService {
	
	@Autowired
	BugDao bugDao;
	
	@Override
	public void insertMsg(MsgVo msgVo) {
		bugDao.insertMsg(msgVo);
	}
}
