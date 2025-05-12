package com.banking.survey.config;

import io.swagger.v3.oas.models.OpenAPI;
import io.swagger.v3.oas.models.info.Info;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class OpenApiConfig {

    @Bean
    public OpenAPI customOpenAPI() {
        return new OpenAPI()
                .info(new Info()
                        .title("Banking Survey Service API")
                        .version("1.0.0")
                        .description("This API allows managing surveys for banking services such as mobile banking, customer support, and more."));
    }
}

// http://localhost:8080/swagger-ui.html
