package com.example.thymeleafPJ.core.config;

import javax.sql.DataSource;

import org.apache.ibatis.session.ExecutorType;
import org.apache.ibatis.session.SqlSessionFactory;
import org.apache.ibatis.type.JdbcType;
import org.mybatis.spring.SqlSessionFactoryBean;
import org.mybatis.spring.SqlSessionTemplate;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.boot.context.properties.ConfigurationProperties;
import org.springframework.boot.jdbc.DataSourceBuilder;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.core.io.support.PathMatchingResourcePatternResolver;

@Configuration
public class DataSourceConfig {

	@Bean(name = "chatTalkDataSource")
	@ConfigurationProperties(prefix = "spring.datasource.chattalk")
	public DataSource chatTalkDataSource() {
		return DataSourceBuilder.create().build();
	}
	
	@Bean(name = "chatTalkSqlSessionFactory")
	public SqlSessionFactory chatTalkSqlSessionFactory(@Qualifier("chatTalkDataSource") DataSource dataSource) throws Exception {
		SqlSessionFactoryBean sqlSessionFactoryBean = new SqlSessionFactoryBean();
		sqlSessionFactoryBean.setDataSource(dataSource);
		sqlSessionFactoryBean.setMapperLocations(new PathMatchingResourcePatternResolver().getResources("classpath:mybatis/mapper/chattalk/**/*.xml"));
		sqlSessionFactoryBean.setTypeAliasesPackage("**.vo");
		
		// MyBatis 추가 설정
		org.apache.ibatis.session.Configuration configuration = new org.apache.ibatis.session.Configuration();
		configuration.setJdbcTypeForNull(JdbcType.NULL); // insert 시 Java null을 jdbcType.NULL 로 자동 인식
		sqlSessionFactoryBean.setConfiguration(configuration);
		
		return sqlSessionFactoryBean.getObject();
	}
	
	@Bean(name = "chatTalkSqlSessionTemplate")
	public SqlSessionTemplate chatTalknSqlSessionTemplate(SqlSessionFactory chatTalkSqlSessionFactory) throws Exception {
		return new SqlSessionTemplate(chatTalkSqlSessionFactory);
	}
	
	@Bean(name = "chatTalkBatchSqlSessionTemplate")
	public SqlSessionTemplate chatTalkBatchSqlSessionTemplate(SqlSessionFactory chatTalkSqlSessionFactory) throws Exception {
		return new SqlSessionTemplate(chatTalkSqlSessionFactory, ExecutorType.BATCH);
	}
}