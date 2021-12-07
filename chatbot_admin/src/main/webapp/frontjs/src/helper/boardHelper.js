
export const getData = (pageNumber, pageSize, response) => {
    let prevFakeData = createPrevFakeData(pageSize * pageNumber);
    let nextFakeData = createNextFakeData(pageSize);
    const realData = setRealData(response.data);

    if (isFirstPage(pageNumber)) {
        if (realData.length === 0){
            return new Array();
        }
        if (response.data.totalPages === 1) {
            return realData;
        }
        return realData.concat(nextFakeData);
    } else if (isLastPage(pageNumber, response)) {
        return prevFakeData.concat(realData);
    } else {
        return prevFakeData.concat(realData).concat(nextFakeData);
    }
}

const setRealData = contents => {
    return contents;
}

const createPrevFakeData = size => {
    let fakeData = Array.apply(null, new Array(size)).map(Object.prototype.valueOf, new Object());
    return fakeData.map((currentValue, index) => setFakeData(index));
}


const createNextFakeData = size => {
    let fakeData = Array.apply(null, new Array(size)).map(Object.prototype.valueOf, new Object());
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

const isLastPage = (pageNumber, response) => {
    return pageNumber == response.data.totalPages - 1
}
