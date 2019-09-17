package com.markerud.recipes.security;

import static javax.servlet.http.HttpServletResponse.SC_ACCEPTED;

import java.io.IOException;

import javax.servlet.Filter;
import javax.servlet.FilterChain;
import javax.servlet.ServletException;
import javax.servlet.ServletRequest;
import javax.servlet.ServletResponse;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.core.annotation.Order;
import org.springframework.stereotype.Component;

@Component
@Order(1)
public class CORSFilter implements Filter {

	private static final Logger log = LoggerFactory.getLogger(CORSFilter.class);

	@Override
	public void doFilter(ServletRequest servletRequest, ServletResponse servletResponse, FilterChain chain)
			throws IOException, ServletException {

		log.debug("==================== CORSFilter entered ====================");

		HttpServletRequest request = (HttpServletRequest) servletRequest;
		HttpServletResponse response = (HttpServletResponse) servletResponse;

		response.addHeader("Access-Control-Allow-Origin", "http://localhost:3000");
		response.addHeader("Access-Control-Allow-Methods", "OPTIONS, POST");
		response.addHeader("Access-Control-Allow-Headers",
				"Content-Type, token, Access-Control-Allow-Headers, Authorization, X-Requested-With");

		if (request.getMethod().contentEquals("OPTIONS")) {
			response.setStatus(SC_ACCEPTED);
			return;
		}

		chain.doFilter(request, response);
	}

}
