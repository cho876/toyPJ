package com.example.react_toyPJ.api.service;

import java.util.List;
import java.util.concurrent.ExecutionException;

import org.springframework.web.bind.annotation.RequestBody;

import com.example.react_toyPJ.api.dao.UserDAO;
import com.example.react_toyPJ.api.vo.User;

public interface UserService {
	List<User> getUsers() throws ExecutionException, InterruptedException;
	User getUserByID(String userID) throws ExecutionException, InterruptedException;
	
	void addUser(User user) throws ExecutionException, InterruptedException;
	void editUser(User user) throws ExecutionException, InterruptedException;
	void deleteUser(String userID) throws ExecutionException, InterruptedException;
}
