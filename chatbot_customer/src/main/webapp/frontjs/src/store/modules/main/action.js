import {createAction} from "redux-actions";
import type from './type'


// Login success
export const loginSuccess = createAction(
    type.LOGIN_SUCCESS, (accountId) => ({accountId})
);

// Login fail
export const loginFail = createAction(
    type.LOGIN_FAIL, errorMessage => errorMessage
)