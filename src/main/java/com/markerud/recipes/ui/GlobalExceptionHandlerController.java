package com.markerud.recipes.ui;

import static com.markerud.recipes.ViewConstants.ERROR_PAGE;
import static org.springframework.http.HttpStatus.NOT_FOUND;

import javax.persistence.EntityNotFoundException;

import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.ResponseStatus;

@ControllerAdvice
public class GlobalExceptionHandlerController {

	@ExceptionHandler(EntityNotFoundException.class)
	@ResponseStatus(NOT_FOUND)
	public String onEntityNotFoundException() {
		return ERROR_PAGE;
	}

}
