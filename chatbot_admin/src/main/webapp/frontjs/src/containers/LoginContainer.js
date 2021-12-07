import React from "react";
import {connect} from 'react-redux';
import {useHistory} from "react-router-dom";


import Login from "../components/Login";

import {loginApi} from '../store/api/userApi';
import {loginFail, loginSuccess} from "../store/modules/main/action";


const LoginContainer = ({isLoginPage, loginSuccess, loginFail}) => {
    let history = useHistory();

	// Callback login api
    const loginSubmit = async (id, password) => {
        var response = await loginApi(id, password);
		
        if (response.data === 1) {
			loginSuccess(id);
            alert("로그인에 성공하셨습니다. 게시판으로 이동합니다.");
            history.push("/board");
        } else {
            loginFail("로그인 실패");
            alert("로그인에 실패했습니다.");
        }
    }

    return <Login
        handleClick={loginSubmit}
        isLoginPage={isLoginPage}
    />;
}

// store's state <> local state mapping
const mapStateToProps = state => ({
    errorMessage: state.main.errorMessage,
    isLoginPage: state.main.isLoginPage
})

// action dispatch
const mapDispatchToProps = dispatch => ({
    loginSuccess: (accountId) => dispatch(loginSuccess(accountId)),
    loginFail: (errorMessage) => dispatch(loginFail(errorMessage))
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(LoginContainer);
