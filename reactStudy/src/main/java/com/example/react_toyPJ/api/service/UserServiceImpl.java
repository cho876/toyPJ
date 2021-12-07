package com.example.react_toyPJ.api.service;

import com.example.react_toyPJ.api.vo.User;

import java.util.List;
import java.util.concurrent.ExecutionException;

import javax.annotation.Resource;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.RequestBody;

import com.example.react_toyPJ.api.dao.UserDAO;

@Service
public class UserServiceImpl implements UserService{

	@Autowired
	UserDAO userDAO;

	@Override
	public List<User> getUsers() throws ExecutionException, InterruptedException{
		return userDAO.getUsers();
	}

	@Override
	public User getUserByID(String userID) throws ExecutionException, InterruptedException{
		return userDAO.getUserByID(userID);
	}
	
	@Override
	public void addUser(User user) throws ExecutionException, InterruptedException{
		userDAO.addUser(user);
	}
	
	@Override
	public void editUser(User user) throws ExecutionException, InterruptedException{
		userDAO.editUser(user);
	}
	
	@Override
	public void deleteUser(String userID) throws ExecutionException, InterruptedException{
		userDAO.deleteUser(userID);
	}
}
