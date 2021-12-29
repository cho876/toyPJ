package com.example.thymeleafPJ.core.advice;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.http.converter.HttpMessageNotReadableException;
import org.springframework.validation.BindException;
import org.springframework.web.HttpRequestMethodNotSupportedException;
import org.springframework.web.bind.MethodArgumentNotValidException;
import org.springframework.web.bind.MissingServletRequestParameterException;
import org.springframework.web.bind.ServletRequestBindingException;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestControllerAdvice;
import org.springframework.web.method.annotation.MethodArgumentTypeMismatchException;
import org.springframework.web.multipart.support.MissingServletRequestPartException;

import com.example.thymeleafPJ.core.annotation.CustomException;
import com.example.thymeleafPJ.core.exception.BadRequestException;
import com.example.thymeleafPJ.core.exception.ConflictException;
import com.example.thymeleafPJ.core.exception.ForbiddenException;
import com.example.thymeleafPJ.core.exception.NotFoundException;
import com.example.thymeleafPJ.core.vo.ErrorMsgVo;


@RestControllerAdvice("com.example.thymeleafPJ")
public class ExceptionHandlerAdvice {
	
	// 400 Bad Request
	@ResponseStatus(HttpStatus.BAD_REQUEST)
	@ExceptionHandler({
		BadRequestException.class
		, MissingServletRequestParameterException.class
		, MissingServletRequestPartException.class
		, ServletRequestBindingException.class
		, HttpMessageNotReadableException.class
		, MethodArgumentNotValidException.class
		, MethodArgumentTypeMismatchException.class
		, BindException.class
	})
	protected ResponseEntity<ErrorMsgVo> badRequestException(HttpServletRequest req, HttpServletResponse res,
			Exception exception) {

		exception.printStackTrace();

		ErrorMsgVo error = new ErrorMsgVo(HttpStatus.BAD_REQUEST, exception.getMessage(),
				this.isCustomException(exception), req.getRequestURI(), req.getParameterMap(),
				(String) req.getAttribute("requestBody"));
		return ResponseEntity.badRequest().body(error);
	}
	
	// 403 Forbidden
	@ResponseStatus(HttpStatus.FORBIDDEN)
	@ExceptionHandler(ForbiddenException.class)
	protected ResponseEntity<ErrorMsgVo> forbiddenExceptionHandler(HttpServletRequest req, HttpServletResponse res, Exception exception) {
		
		ErrorMsgVo error = new ErrorMsgVo(
				HttpStatus.FORBIDDEN, exception.getMessage(), this.isCustomException(exception), req.getRequestURI(), req.getParameterMap(), (String)req.getAttribute("requestBody"));
		return ResponseEntity.status(HttpStatus.FORBIDDEN).body(error);
	}
	
	// 404 Not Found
	@ResponseStatus(HttpStatus.NOT_FOUND)
	@ExceptionHandler(NotFoundException.class)
	protected ResponseEntity<ErrorMsgVo> notFoundException(HttpServletRequest req, HttpServletResponse res, Exception exception) {

		exception.printStackTrace();
		
		ErrorMsgVo error = new ErrorMsgVo(
				HttpStatus.NOT_FOUND, exception.getMessage(), this.isCustomException(exception), req.getRequestURI(), req.getParameterMap(), (String)req.getAttribute("requestBody"));
		return ResponseEntity.status(HttpStatus.NOT_FOUND).body(error);		
	}
	
	// 405 METHOD_NOT_ALLOWED
	@ResponseStatus(HttpStatus.METHOD_NOT_ALLOWED)
	@ExceptionHandler(HttpRequestMethodNotSupportedException.class)
	protected ResponseEntity<ErrorMsgVo> notSupportedException(HttpServletRequest req, HttpServletResponse res, Exception exception) {

		exception.printStackTrace();
		
		ErrorMsgVo error = new ErrorMsgVo(
				HttpStatus.METHOD_NOT_ALLOWED, exception.getMessage(), this.isCustomException(exception), req.getRequestURI(), req.getParameterMap(), (String)req.getAttribute("requestBody"));
		return ResponseEntity.status(HttpStatus.METHOD_NOT_ALLOWED).body(error);		
	}
	
	// 409 Conflict
	@ResponseStatus(HttpStatus.CONFLICT)
	@ExceptionHandler(ConflictException.class)
	protected ResponseEntity<ErrorMsgVo> conflictException(HttpServletRequest req, HttpServletResponse res, Exception exception) {
		
		exception.printStackTrace();
		
		ErrorMsgVo error = new ErrorMsgVo(
				HttpStatus.CONFLICT, exception.getMessage(), this.isCustomException(exception), req.getRequestURI(), req.getParameterMap(), (String)req.getAttribute("requestBody"));
		return ResponseEntity.status(HttpStatus.CONFLICT).body(error);		
	}
	
	// 500 Internal Server Error
	@ResponseStatus(HttpStatus.INTERNAL_SERVER_ERROR)
	@ExceptionHandler(Exception.class)
	protected ResponseEntity<ErrorMsgVo> exceptionHandler(HttpServletRequest req, HttpServletResponse res, Exception exception) throws Exception {

		exception.printStackTrace();
		
		ErrorMsgVo error = new ErrorMsgVo(
				HttpStatus.INTERNAL_SERVER_ERROR, exception.getMessage(), "N", req.getRequestURI(), req.getParameterMap(), (String)req.getAttribute("requestBody"));

		return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(error);
	}
	
	private String isCustomException(Exception exception) {
		CustomException ce = exception.getClass().getAnnotation(CustomException.class);
		if(ce != null) return "Y";
		return "N";
	}
}
