package com.example.thymeleafPJ.dao;

import java.util.List;

import org.springframework.stereotype.Repository;

import com.example.thymeleafPJ.core.base.BaseDao;
import com.example.thymeleafPJ.vo.AnsVo;
import com.example.thymeleafPJ.vo.BtnVo;
import com.example.thymeleafPJ.vo.MsgVo;

@Repository
public class MessageDao extends BaseDao {

	public List<MsgVo> getAllMsgs() {
		return chatTalkSqlSession.selectList("mapper.chattalk.msg.getAllMsgs");
	}

	public List<BtnVo> getChildBtn(String btnNo) {
		return chatTalkSqlSession.selectList("mapper.chattalk.msg.getChildBtn", btnNo);
	}

	public String getChildBtnYn(String btnNo) {
		return chatTalkSqlSession.selectOne("mapper.chattalk.msg.getChildBtnYn", btnNo);
	}
	
	public AnsVo getAnswer(String btnNo) {
		return chatTalkSqlSession.selectOne("mapper.chattalk.msg.getAnswer", btnNo);
	}
}
