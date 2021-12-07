import type from './type'
import {get, update, getForSearch,sendEmail} from "../../api/boardApi";
import {getData} from "../../../helper/boardHelper";

// 게시판 화면 reload
export const changePage = (pageNumber, pageSize, searchType, keyword, isSearch) => dispatch => {

    const requestApi = (isSearch && keyword.trim() != "" ?
        getForSearch(pageNumber + 1, pageSize, searchType, keyword) : get(pageNumber + 1, pageSize));

    return requestApi.then(response => {
	const resCnt = response.data.length;
        const selectedData = getData(pageNumber, resCnt, pageSize, response);
        dispatch({
        	type: type.CHANGE_PAGE,
            payload: {
                pageNumber: pageNumber,
                pageSize: pageSize,
                selectedData: selectedData
            }
        })
    })
}

// keyword 검색 func
export const keywordSearch = (pageSize, searchType, keyword) => dispatch => {
    const pageNumber = 0;
    return getForSearch(pageNumber + 1, pageSize, searchType, keyword)
        .then(response => {
			const resCnt = response.data.length;
			const selectedData = getData(pageNumber, resCnt, pageSize, response);
			dispatch({
				type: type.KEYWORD_SEARCH,
				payload: {
					keyword: keyword,
					pageNumber: pageNumber,
					pageSize: pageSize,
					selectedData: selectedData
				}
			})
        })
}

// 전체글 보기 func
export const changeShowAllContents = (pageSize) => dispatch => {
    const pageNumber = 0;

    return get(pageNumber + 1, pageSize)
        .then(response => {
			const resCnt = response.data.length;
			const selectedData = getData(pageNumber, resCnt, pageSize, response);
			dispatch({
				type: type.CHANGE_SHOWING_ALL_CONTENTS,
				payload: {
				pageNumber: pageNumber,
				pageSize: pageSize,
				selectedData: selectedData
				}
			})
        })
}

// 특정 row click func
export const clickRow = (rowData) => ({
    type: type.CLICK_ROW,
    payload: rowData
})

// modal 닫기 func
export const closeModal = () => ({
    type: type.CLOSE_MODAL,
})

// modal 글 수정 func
export const modifyData = (id, updatedData, allData) => dispatch => {
    return update(updatedData)
        .then(response => {
			allData.forEach(function (element) {
				if (element.id == id) {
                        for (var key in updatedData) {
                            element[key] = updatedData[key];
                        }

						if(element.status == '003'){
							element.status = "처리완료";
						}else if(element.status =='002'){
							element.status = "처리진행중";
						}else{
							element.status = "접수";
						}
					return;
				}
			})
            dispatch({
                type: type.MODIFY_DATA,
                payload: allData,
            })
        })
		.then(	// 글 수정 완료 후, mail 알림
			sendEmail(updatedData)
		)
}

// keyword type 변경 func
export const searchTypeSelectorChange = (value) => ({
    type: type.SEARCH_TYPE_SELECTOR_CHANGE,
    payload: value
})
