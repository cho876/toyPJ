package com.example.admin_chatbot.service.login;

import java.util.HashMap;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.admin_chatbot.repository.login.UserMapper;


@Service
public class MemberService {

    @Autowired
    private UserMapper userMapper;

    public int selectMember(HashMap<String,String> map) {
    	return userMapper.selectMember(map);
    }
}