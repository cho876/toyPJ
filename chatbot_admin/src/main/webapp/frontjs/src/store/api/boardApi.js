import axios from 'axios';

const DOMAIN = "http://localhost:8071/admin";

// For get all board list
export function get(pageNumber, pageSize) {
    return axios.get(DOMAIN+'/getAllBoardList?page='+pageNumber+'&size='+pageSize);
}

// For update board data by id
export function update(updatedData) {
    return axios.post(DOMAIN+'/updateBoardById', updatedData);
}

// For get specific board data by type
export function getForSearch(pageNumber, pageSize, searchType, keyword) {
    return axios.get(DOMAIN+"/getBoardBySearch?page="+pageNumber+"&size="+pageSize+"&type="+searchType+"&keyword="+keyword);
}

// For send Email by id
export function sendEmail(updatedData) {
    return axios.post(DOMAIN+"/sendEmail",updatedData);
}
