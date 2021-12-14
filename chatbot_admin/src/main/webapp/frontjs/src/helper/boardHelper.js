import {BOARD_PAGE_SIZE} from '../static/constant';

export const getData = (pageNumber, resCnt, pageSize, response) => {
    let prevFakeData = createPrevFakeData(pageSize * pageNumber);	// 가상 10개 Arr 생성(prev page)
    let nextFakeData = createNextFakeData(pageSize);	// 가상의 10개 Arr 생성(next page)
    const realData = response.data;

    if (isFirstPage(pageNumber)) {
        if (realData.length === 0){
            return new Array();
        }
        if (resCnt < BOARD_PAGE_SIZE) {
            return realData;
        }
        return realData.concat(nextFakeData);
    } else if (resCnt < BOARD_PAGE_SIZE) {
        return prevFakeData.concat(realData);
    } else {
        return prevFakeData.concat(realData).concat(nextFakeData);
    }
}

const createPrevFakeData = size => {
    let fakeData = Array.apply(null, new Array(size));
    return fakeData.map((currentValue, index) => setFakeData(index));
}


const createNextFakeData = size => {
    let fakeData = Array.apply(null, new Array(size));
    return fakeData.map((currentValue, index) => setFakeData(index));
}

const setFakeData = id => {
    let fakeData = new Object();
    fakeData.tableData = {id: id};
    return fakeData;
}

const isFirstPage  = pageNumber => {
    return pageNumber == 0;
}
