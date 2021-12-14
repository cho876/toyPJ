package com.example.admin_chatbot.vo.board;

public class MailVo {
	private String toAddr;
	private String subject;
	private String contents;
	private String snddt;
	
	public String getToAddr() {
		return toAddr;
	}
	public void setToAddr(String toAddr) {
		this.toAddr = toAddr;
	}
	public String getSubject() {
		return subject;
	}
	public void setSubject(String subject) {
		this.subject = subject;
	}
	public String getContents() {
		return contents;
	}
	public void setContents(String contents) {
		this.contents = contents;
	}
	public String getSnddt() {
		return snddt;
	}
	public void setSnddt(String snddt) {
		this.snddt = snddt;
	}
	
	
}

