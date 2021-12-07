import axios from 'axios';

const DOMAIN = "http://localhost:8070/chatbot";

export async function loginApi(accountId, password) {
    return await axios.post(DOMAIN+'/onLogin',
                {user_id: accountId, user_pw: password});
}