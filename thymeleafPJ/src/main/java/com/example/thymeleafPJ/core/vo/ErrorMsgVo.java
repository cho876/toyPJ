package com.example.thymeleafPJ.core.vo;

import java.time.LocalDateTime;
import java.util.Arrays;
import java.util.HashMap;
import java.util.Map;

import org.springframework.http.HttpStatus;

import lombok.Getter;

@Getter
public class ErrorMsgVo {

	private LocalDateTime timestamp;
	private int status;
	private String error;
	private String message;
	private String usable;
	private String path;
	private Map<String, String[]> parameters;
	private String body;
	
	public ErrorMsgVo(HttpStatus status, String message, String usable, String path, Map<String, String[]> parameters, String body) {
		this.timestamp = LocalDateTime.now();
		this.status = status.value();
		this.error = status.toString();
		this.message = message;
		this.usable = usable;
		this.path = path;
		this.parameters = parameters;
		this.body = body;
	}
	
	public Map<String, String> getParameters() {
		
		Map<String, String> map = new HashMap<String, String>();
		
		for(Map.Entry<String, String[]> entry : parameters.entrySet()) {
			String key = entry.getKey();
			String[] value = entry.getValue();
			
			map.put(key, Arrays.toString(value));			
		}
		
		return map;
	}
}
