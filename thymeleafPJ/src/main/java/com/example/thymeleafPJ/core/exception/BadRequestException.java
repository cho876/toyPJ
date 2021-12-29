package com.example.thymeleafPJ.core.exception;

import com.example.thymeleafPJ.core.annotation.CustomException;

@CustomException
public class BadRequestException extends RuntimeException {

	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;
	
	public BadRequestException() {
		super();
	}
	
	public BadRequestException(String message) {
		super(message);
	}

}
