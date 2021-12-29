package com.example.thymeleafPJ.core.exception;

import com.example.thymeleafPJ.core.annotation.CustomException;

@CustomException
public class ForbiddenException extends RuntimeException {

	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;

	public ForbiddenException() {
		super();
	}
	
	public ForbiddenException(String message) {
		super(message);
	}
}
