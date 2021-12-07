import axios from 'axios';

const API_BASE_URL = "http://localhost:8090/kwonnee/";

class ApiComp{
	sendToSlack(data){
		return axios.post(API_BASE_URL+"/sendToSlack",data);
	}
} export default new ApiComp;