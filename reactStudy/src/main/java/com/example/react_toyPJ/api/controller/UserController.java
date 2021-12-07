package com.example.react_toyPJ.api.controller;

import java.util.List;
import java.util.concurrent.ExecutionException;

import javax.annotation.Resource;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.example.react_toyPJ.api.service.UserService;
import com.example.react_toyPJ.api.vo.User;


@RequestMapping(value="/kwonnee/users")
@RestController
public class UserController {
	
	@Autowired
	private UserService userService;
	
	@RequestMapping(value="/list")
	public List<User> getUsers() throws ExecutionException, InterruptedException{
		System.out.println("url : /kwonnee/users/list");
		List<User> userList = userService.getUsers();
		for(int i=0;i<userList.size();i++) {
			System.out.println(userList.get(i).toString());
		}
		return userList;
	}
	
	@RequestMapping(value="/list/{userID}")
	public User getUserByID(@PathVariable String userID) throws ExecutionException, InterruptedException{
		System.out.println("url : /kwonnee/users/list/"+userID);
		
		User userData = userService.getUserByID(userID);
		
		return userData;
	}
	
	@RequestMapping(value="/add", method= {RequestMethod.POST})
	public void addUser(@RequestBody User user) throws ExecutionException, InterruptedException{				
		System.out.println("url: /kwonnee/users/add");
		System.out.println("User info: " + user.toString());
		userService.addUser(user);
	}

	@RequestMapping(value="/edit", method= {RequestMethod.POST})
	public void editUser(@RequestBody User user) throws ExecutionException, InterruptedException{
		System.out.println("url: /kwonnee/users/edit");
		System.out.println("User info: " + user.toString());
				
		userService.editUser(user);
	}
	
	@RequestMapping(value="/delete/{userID}")
	public void deleteUser(@PathVariable String userID) throws ExecutionException, InterruptedException{
		System.out.println("url: /kwonnee/users/delete/" + userID);
				
		userService.deleteUser(userID);
	}
}
