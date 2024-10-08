package com.example.shareholder.config;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Component;
import org.springframework.web.servlet.HandlerInterceptor;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import org.springframework.lang.NonNull;

@Component
public class ApiKeyInterceptor implements HandlerInterceptor {

  @Value("${api.key}")
  private String apiKey;
  
  @Override
  public boolean preHandle(@NonNull HttpServletRequest request, @NonNull HttpServletResponse response, @NonNull Object handler) throws Exception {
    String apiKeyHeader = request.getHeader("Authorization");

    if (apiKeyHeader == null || !apiKeyHeader.equals("Bearer " + apiKey)) {
      response.setStatus(HttpServletResponse.SC_UNAUTHORIZED);
      return false;
    }
    return true;
  }
}
