package com.example.admin_chatbot.controller.board;

import java.text.SimpleDateFormat;
import java.util.Calendar;
import java.util.HashMap;
import java.util.List;

import javax.servlet.http.HttpServletRequest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.example.admin_chatbot.service.board.BoardService;
import com.example.admin_chatbot.util.CodeUtil;
import com.example.admin_chatbot.util.EmailUtil;
import com.example.admin_chatbot.vo.board.BoardVo;
import com.example.admin_chatbot.vo.board.MailVo;
import com.example.admin_chatbot.vo.board.SearchVo;


@RequestMapping(value="/admin")
@RestController
public class BoardController {

	@Autowired
	private EmailUtil emailUtil;
	
	@Autowired
	private BoardService boardService;

	@RequestMapping(value="/getAllBoardList", method= {RequestMethod.GET})
	public List<BoardVo> getAllBoardList(HttpServletRequest request) {
		
		HashMap<String,Integer> map = new HashMap<String,Integer>();
		
		System.out.println("== getAllBoardList");
		System.out.println("page: " + request.getParameter("page"));
		System.out.println("size: " + request.getParameter("size"));
		
		int page = Integer.parseInt(request.getParameter("page"));
		int size = Integer.parseInt(request.getParameter("size"));
		int curPage = (page-1) * size;
		
		System.out.println("curPage: " + curPage);
		System.out.println("size: " + size);
		
		map.put("page", curPage);
		map.put("size", size);
		
		List<BoardVo> list = null;
		
		list = boardService.getAllBoardList(map);

		for(BoardVo board : list) {
			String codeNm = CodeUtil.convertToCode(board.getStatus());
			board.setStatus(codeNm);
		}
		
		return list;
	}
	
	@RequestMapping(value="/updateBoardById", method= {RequestMethod.POST})
	public HashMap<String, String> updateBoardById(@RequestBody BoardVo boardVo) {
		HashMap<String, String> ret = new HashMap<String, String>();
		
		System.out.println("== updateBoardByID");
		System.out.println("id: " + boardVo.getId());
		System.out.println("comments: " + boardVo.getComments());
		System.out.println("message: " + boardVo.getMessage());
		System.out.println("status: " + boardVo.getStatus());
		
		
		SimpleDateFormat sdf = new SimpleDateFormat("yyyy-MM-dd hh:mm:ss");
		Calendar c = Calendar.getInstance();
		String strToday = sdf.format(c.getTime());
		
		boardVo.setModdt(strToday);
		
		boardService.updateBoardById(boardVo);
		return ret;
	}
	
	@RequestMapping(value="/sendEmail", method= {RequestMethod.POST})
	public HashMap<String, String> sendEmail(@RequestBody BoardVo boardVo) {
		HashMap<String, String> ret = new HashMap<String, String>();
		
		if(boardVo.getEmail().equals("noname")) {
			ret.put("result", "success");
			return ret;
		}

		System.out.println("== sendEmail");
		System.out.println("id: " + boardVo.getId());
		System.out.println("comments: " + boardVo.getComments());
		System.out.println("message: " + boardVo.getMessage());
		System.out.println("status: " + boardVo.getStatus());
		
		String subject = "[버그문의사항] 진행상황을 공유드립니다.";
		String content = "안녕하세요. 000입니다."
				+ "\n요청주신 버그사항에 대한 처리 상황을 공유드립니다."
				+"\n\n버그사항: " + boardVo.getMessage()
				+"\n처리상태: " + CodeUtil.convertToCode(boardVo.getStatus())
				+"\n담당자의견: " + boardVo.getComments()
				+"\n\n지속하여 처리상태가 변경되면 알려드리겠습니다."
				+"\n감사합니다.";
		
		emailUtil.sendEmail(boardVo.getEmail(), subject, content);

		SimpleDateFormat sdf = new SimpleDateFormat("yyyy-MM-dd hh:mm:ss");
		Calendar c = Calendar.getInstance();
		String strToday = sdf.format(c.getTime());
		
		MailVo mailVo = new MailVo();
		
		mailVo.setToAddr(boardVo.getEmail());
		mailVo.setSubject(subject);
		mailVo.setContents(content);
		mailVo.setSnddt(strToday);
		
		boardService.insertMailHistory(mailVo);
		
		ret.put("result", "success");
		return ret;
	}
	
	@RequestMapping(value="/getBoardBySearch", method= {RequestMethod.GET})
	public List<BoardVo> getBoardBySearch(HttpServletRequest request) {
		
		HashMap<String,Integer> map = new HashMap<String,Integer>();
		
		System.out.println("== getBoardBySearch");
		System.out.println("page: " + request.getParameter("page"));
		System.out.println("size: " + request.getParameter("size"));
		System.out.println("type: " + request.getParameter("type"));
		System.out.println("keyword: " + request.getParameter("keyword"));

		int page = Integer.parseInt(request.getParameter("page"));
		int size = Integer.parseInt(request.getParameter("size"));
		int curPage = (page-1) * size;

		SearchVo searchVo = new SearchVo();
		
		searchVo.setType(request.getParameter("type"));
		searchVo.setKeyword(request.getParameter("keyword"));
		searchVo.setSize(size);
		searchVo.setPage(curPage);
		
		List<BoardVo> list = null;

		if(searchVo.getType().equals("LOCATION")) {
			list=boardService.getBoardByLocation(searchVo);
		}else if(searchVo.getType().equals("MESSAGE")) {
			list=boardService.getBoardByMessage(searchVo);
		}else if(searchVo.getType().equals("EMAIL")){
			list=boardService.getBoardByEmail(searchVo);
		}
		
		for(BoardVo board : list) {
			String codeNm = CodeUtil.convertToCode(board.getStatus());
			board.setStatus(codeNm);
		}
		return list;
	}
}
