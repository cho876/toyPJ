package com.example.thymeleafPJ.core.exception;

import com.example.thymeleafPJ.core.annotation.CustomException;

@CustomException
public class NotFoundException extends RuntimeException {

	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;
	
	public NotFoundException() {
		super();
	}
	
	public NotFoundException(String message) {
		super(message);
	}
	
}
