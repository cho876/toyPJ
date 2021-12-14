package com.example.react_chatbot.repository;

import java.util.HashMap;
import java.util.List;

import org.apache.ibatis.annotations.Mapper;

import com.example.react_chatbot.vo.BtnVo;
import com.example.react_chatbot.vo.MsgVo;

@Mapper
public interface ChatMapper {
    void insertMsg(MsgVo msgVo);
    int selectMember(HashMap<String,String> map);
    List<BtnVo> getChildBtn(String btnNo);
    int countChildBtn(String btnNo);
    HashMap<String,Object> getAnswer(String btnNo);
}