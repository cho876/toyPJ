package com.example.thymeleafPJ.dao;

import org.springframework.stereotype.Repository;

import com.example.thymeleafPJ.core.base.BaseDao;
import com.example.thymeleafPJ.vo.MsgVo;

@Repository
public class BugDao extends BaseDao {
	
	public void insertMsg(MsgVo msgVo) {
		chatTalkSqlSession.selectOne("mapper.chattalk.bug.insertMsg", msgVo);
	}
}
