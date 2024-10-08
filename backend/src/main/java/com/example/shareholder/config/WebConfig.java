package com.example.shareholder.config;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.InterceptorRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@Configuration
public class WebConfig implements WebMvcConfigurer {

  @Autowired
  private ApiKeyInterceptor apiKeyInterceptor;

  @Override
  public void addInterceptors(InterceptorRegistry registry) {
    registry.addInterceptor(apiKeyInterceptor).addPathPatterns("/*");
  }

  // @Override
  // public void addCorsMappings(CorsRegistry registry) {
  //   registry.addMapping("/*")
  //       .allowedOriginPatterns("http://localhost:5073", "https://share-vault-f50c84o51.netlify.app")
  //       .allowedMethods("GET", "POST", "PUT", "DELETE", "PATCH", "OPTIONS")
  //       .allowCredentials(true);
  // }
}
