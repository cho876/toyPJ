package com.example.react_chatbot.service;

import java.util.HashMap;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.react_chatbot.repository.ChatMapper;
import com.example.react_chatbot.vo.BtnVo;
import com.example.react_chatbot.vo.MsgVo;

@Service
public class ChatService {

    @Autowired
    private ChatMapper chatMapper;

    public void insertMsg(MsgVo msgVo) {
    	chatMapper.insertMsg(msgVo);
    }
    
    public List<BtnVo> getChildBtn(String btnNo) {
    	return chatMapper.getChildBtn(btnNo);
    }
    
    public int countChildBtn(String btnNo) {
    	return chatMapper.countChildBtn(btnNo);
    }
    
    public HashMap<String,Object> getAnswer(String btnNo) {
    	return chatMapper.getAnswer(btnNo);
    }
}