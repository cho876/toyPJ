import React, {useEffect} from "react";
import {connect} from 'react-redux';
import {changePage, clickRow, closeModal, modifyData, keywordSearch, changeShowAllContents, searchTypeSelectorChange} from "../store/modules/board/action";
import Board from "../components/Board";
import ContentsModal from "../components/ContentsModal";
import Topbar from "../components/Topbar";

const BoardContainer = ({pageNumber, pageSize, selectedData, isModalOpen, modalData, isWriteModal, isSearch, keyword, boardId, searchType,
                            changePage, clickRow, closeModal, modifyData, keywordSearch, changeShowAllContents, searchTypeSelectorChange}) => {


    useEffect(() => {
        changePage(pageNumber, pageSize);
    }, [])

    const columns = [
        {title: '문의사항', field: 'message'},
        {title: '작성자', field: 'email'},
        {title: '버그경로', field: 'location'},
        {title: '처리상태', field: 'status'},
        {title: '등록일자', field: 'regdt'},
    ]

	// Paging
    const handleChangePageNumber = (pageNumber) => {
        changePage(pageNumber, pageSize, searchType, keyword, isSearch);
    };
	
	// change page size
    const handleChangePageSize = (pageSize) => {
        changePage(pageNumber, pageSize, searchType, keyword, isSearch);
    };

	// modify data in modal
    const handleModify = (updatedData) => {
        modifyData(modalData.id, updatedData, selectedData.slice(0));
        closeModal();
    }

    return (
        <div>
            <Topbar
                title="버그 문의게시판"
            />
            <Board
                key={boardId}
                pageNumber={pageNumber}
                pageSize={pageSize}
                searchType={searchType}
                handleChangeSearchTypeSelect={searchTypeSelectorChange}
                keywordInStore={keyword}
                handleChangePageNumber={handleChangePageNumber}
                handleChangePageSize={handleChangePageSize}
                handleRowClick={clickRow}
                handleSearch={keywordSearch}
                handleShowAllContentsButton={changeShowAllContents}
                columns={columns}
                selectedData={selectedData}
            />
            { isModalOpen ?
            <ContentsModal
                isModalOpen={isModalOpen}
                modalData={modalData}
                isSearch={isSearch}
                keyword={keyword}
                handleClose={closeModal}
                handleSave={handleModify}
                isWriteModal={isWriteModal}
            />
            : null}
        </div>
    );
}

// store's state <> local state mapping
const mapStateToProps = state => ({
    pageNumber : state.board.pageNumber,
    pageSize : state.board.pageSize,
    selectedData : state.board.selectedData,
    isModalOpen: state.board.isModalOpen,
    modalData: state.board.modalData,
    isWriteModal: state.board.isWriteModal,
    isSearch: state.board.isSearch,
    keyword: state.board.keyword,
    boardId: state.board.boardId,
    searchType: state.board.searchType
})

// action dispatch
const mapDispatchToProps = dispatch => ({
    changePage : (pageNumber, pageSize, searchType, keyword, isSearch) => dispatch(changePage(pageNumber, pageSize, searchType, keyword, isSearch)),
    clickRow: (rowData) => dispatch(clickRow(rowData)),
    closeModal: () => dispatch(closeModal()),
    modifyData: (id, updatedData, allData) => dispatch(modifyData(id, updatedData, allData)),
    changeShowAllContents: (pageSize) => dispatch(changeShowAllContents(pageSize)),
    keywordSearch: (pageSize, searchType, keyword) => dispatch(keywordSearch(pageSize, searchType, keyword)),
    searchTypeSelectorChange: (value) => dispatch(searchTypeSelectorChange(value)),
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(BoardContainer)
