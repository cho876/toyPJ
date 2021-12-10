package com.example.admin_chatbot.service.board;

import java.util.HashMap;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.admin_chatbot.repository.board.BoardMapper;
import com.example.admin_chatbot.vo.board.BoardVo;
import com.example.admin_chatbot.vo.board.MailVo;
import com.example.admin_chatbot.vo.board.SearchVo;

@Service
public class BoardService {

    @Autowired
    private BoardMapper boardMapper;

    public List<BoardVo> getAllBoardList(HashMap<String,Integer> map) {
    	return boardMapper.getAllBoardList(map);
    }
    
    public void updateBoardById(BoardVo boardVo) {
    	boardMapper.updateBoardById(boardVo);
    }
    
    public List<BoardVo> getBoardByLocation(SearchVo searchVo) {
    	return boardMapper.getBoardByLocation(searchVo);
    }
    
    public List<BoardVo> getBoardByMessage(SearchVo searchVo) {
    	return boardMapper.getBoardByMessage(searchVo);
    }
    
    public List<BoardVo> getBoardByEmail(SearchVo searchVo) {
    	return boardMapper.getBoardByEmail(searchVo);
    }
    public List<BoardVo> insertMailHistory(MailVo mailVo) {
    	return boardMapper.insertMailHistory(mailVo);
    }
}
