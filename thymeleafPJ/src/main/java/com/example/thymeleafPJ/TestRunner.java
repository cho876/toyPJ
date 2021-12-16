package com.example.thymeleafPJ;

import java.sql.Connection;

import javax.sql.DataSource;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.ApplicationArguments;
import org.springframework.boot.ApplicationRunner;
import org.springframework.stereotype.Component;

import lombok.extern.slf4j.Slf4j;

@Slf4j
@Component
public class TestRunner implements ApplicationRunner{

	@Autowired
	DataSource dataSource;
	
	@Override
	public void run(ApplicationArguments args) throws Exception{
		Connection connection = dataSource.getConnection();
		log.info("url: " + connection.getMetaData().getURL());
		log.info("UserName: " + connection.getMetaData().getUserName());
	}

}
