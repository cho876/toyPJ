package com.example.thymeleafPJ.vo;

import java.util.Date;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

@Getter
@Setter
@ToString
public class MsgVo {
	
	private String empNo;
	private String message;
	private Date regDtt;
}
