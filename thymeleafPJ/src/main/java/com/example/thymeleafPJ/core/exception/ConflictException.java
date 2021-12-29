package com.example.thymeleafPJ.core.exception;

import com.example.thymeleafPJ.core.annotation.CustomException;

@CustomException
public class ConflictException extends RuntimeException {

	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;
	
	public ConflictException() {
		super();
	}
	
	public ConflictException(String message) {
		super(message);
	}

}
