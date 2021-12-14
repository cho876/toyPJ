package com.example.slack.vo;

public class SendVo {
	private String webhookUrl;
	private String userName;
	private String department;
	private String service;
	private String request;
	
	public String getWebhookUrl() {
		return webhookUrl;
	}
	public void setWebhookUrl(String webhookUrl) {
		this.webhookUrl = webhookUrl;
	}
	public String getUserName() {
		return userName;
	}
	public void setUserName(String userName) {
		this.userName = userName;
	}
	public String getDepartment() {
		return department;
	}
	public void setDepartment(String department) {
		this.department = department;
	}
	public String getRequest() {
		return request;
	}
	public void setRequest(String request) {
		this.request = request;
	}
	public String getService() {
		return service;
	}
	public void setService(String service) {
		this.service = service;
	}
	
	@Override
	public String toString() {
		return "SendVo - webhooUrl: " + webhookUrl+", userName: " + userName +", department: " + department +", service: "+service+", request: " + request;
	}
}
