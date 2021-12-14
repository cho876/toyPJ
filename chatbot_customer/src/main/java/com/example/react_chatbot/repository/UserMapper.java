package com.example.react_chatbot.repository;

import java.util.HashMap;

import org.apache.ibatis.annotations.Mapper;

@Mapper
public interface UserMapper {
    int selectMember(HashMap<String,String> map);

}
