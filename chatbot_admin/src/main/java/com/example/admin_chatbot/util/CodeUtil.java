package com.example.admin_chatbot.util;

public class CodeUtil {

	// convert Status's codeNo to codeNm
	public static String convertToCode(String code) {
		String codeNm = "";
		
		switch(code) {
		case "001":
			codeNm = "접수";
			break;
		case "002":
			codeNm = "처리진행중";
			break;
		case "003":
			codeNm = "처리완료";
			break;
		}
		
		return codeNm;
	}
}
