import {createAction} from "redux-actions";
import type from './type'


// login success
export const loginSuccess = createAction(
    type.LOGIN_SUCCESS, (accountId) => ({accountId})
);

// login fail
export const loginFail = createAction(
    type.LOGIN_FAIL, errorMessage => errorMessage
)