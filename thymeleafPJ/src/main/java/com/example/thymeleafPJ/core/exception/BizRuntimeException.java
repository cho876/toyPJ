package com.example.thymeleafPJ.core.exception;

public class BizRuntimeException extends RuntimeException {
	
	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;
	private String errorCode;
	String errorMessage;
	String[] errorArgs;
	String errorReturnType="VIEW";
	
	public String getErrorMessage() {
		return errorMessage;
	}

	public void setErrorMessage(String errorMessage) {
		this.errorMessage = errorMessage;
	}

	public String[] getErrorArgs() {
		return errorArgs;
	}

	public void setErrorArgs(String[] errorArgs) {
		this.errorArgs = errorArgs;
	}

	public String getErrorReturnType() {
		return errorReturnType;
	}

	public void setErrorReturnType(String errorReturnType) {
		this.errorReturnType = errorReturnType;
	}

	public BizRuntimeException(){
		super();
	}
	
	public BizRuntimeException(String message){
		super(message);
	}
	
	public BizRuntimeException(Throwable cause){
		super(cause);
		if(cause instanceof BizRuntimeException){
			BizRuntimeException bizRuntimeException = (BizRuntimeException)cause;
			this.errorCode = bizRuntimeException.getErrorCode();
			this.errorMessage = bizRuntimeException.getErrorMessage();
			this.errorArgs = bizRuntimeException.getErrorArgs();
			this.errorReturnType = bizRuntimeException.getErrorReturnType();
		}
	}
	
	public BizRuntimeException(String message, Throwable cause){
		super(message, cause);
		if(cause instanceof BizRuntimeException){
			BizRuntimeException bizRuntimeException = (BizRuntimeException)cause;
			this.errorCode = bizRuntimeException.getErrorCode();
			this.errorMessage = bizRuntimeException.getErrorMessage();
			this.errorArgs = bizRuntimeException.getErrorArgs();
			this.errorReturnType = bizRuntimeException.getErrorReturnType();
		}
	}

	public String getErrorCode() {
		return errorCode;
	}

	public void setErrorCode(String errorCode) {
		this.errorCode = errorCode;
	}
	
}