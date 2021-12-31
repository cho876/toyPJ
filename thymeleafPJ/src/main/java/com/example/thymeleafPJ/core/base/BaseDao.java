package com.example.thymeleafPJ.core.base;

import org.apache.ibatis.session.SqlSession;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;

public class BaseDao {

	protected final Logger log = LoggerFactory.getLogger(this.getClass());
	
	@Autowired
	@Qualifier("chatTalkSqlSessionTemplate")
	protected SqlSession chatTalkSqlSession;
	
	@Autowired
	@Qualifier("chatTalkBatchSqlSessionTemplate")
	protected SqlSession chatTalkBatchSqlSession;
}
