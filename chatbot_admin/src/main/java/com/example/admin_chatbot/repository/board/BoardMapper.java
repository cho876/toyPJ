package com.example.admin_chatbot.repository.board;

import java.util.HashMap;
import java.util.List;

import org.apache.ibatis.annotations.Mapper;

import com.example.admin_chatbot.vo.board.BoardVo;
import com.example.admin_chatbot.vo.board.MailVo;
import com.example.admin_chatbot.vo.board.SearchVo;

@Mapper
public interface BoardMapper {
	List<BoardVo> getAllBoardList(HashMap<String,Integer> map);	    
	void updateBoardById(BoardVo boardVo);
	List<BoardVo> getBoardByLocation(SearchVo searchVo);	    
	List<BoardVo> getBoardByMessage(SearchVo searchVo);	    
	List<BoardVo> getBoardByEmail(SearchVo searchVo);	  
	List<BoardVo> insertMailHistory(MailVo mailVo);
}
