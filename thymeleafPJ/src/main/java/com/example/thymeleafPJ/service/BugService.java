package com.example.thymeleafPJ.service;

import org.springframework.stereotype.Service;

import com.example.thymeleafPJ.vo.MsgVo;

@Service
public interface BugService {
	public void insertMsg(MsgVo msgVo);
}
