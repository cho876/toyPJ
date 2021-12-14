import axios from 'axios';

const API_BASE_URL = "http://localhost:8070/chatbot";


class ApiComp{
	sendBug(data){
		return axios.post(API_BASE_URL+"/sendBug",data);
	}
	
	getBtn(code){
		return axios.get(API_BASE_URL+"/getBtn?btnno="+code);
	}
} export default new ApiComp;