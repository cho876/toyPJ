import axios from 'axios';

const API_BASE_URL = "http://localhost:8081/kwonnee/users";

class ApiService {
	
	getAllUsers(){
		return axios.get(API_BASE_URL+"/list");
	}
	
	getUserByID(userID){
		return axios.get(API_BASE_URL+"/list/"+userID);
	}
	
	deleteUserByID(userID){
		return axios.delete(API_BASE_URL+"/delete/"+userID);
	}
	
	addUser(user){
		return axios.post(API_BASE_URL+"/add/",user);
	}
	
	editUser(user){
		return axios.post(API_BASE_URL+"/edit/",user);
	}
}

export default new ApiService;