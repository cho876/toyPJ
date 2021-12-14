import {handleActions} from 'redux-actions'
import type from './type';

const initialState = {
    accountId : "noname",
    errorMessage : null,
}

export default handleActions({
        [type.LOGIN_SUCCESS] : (state, action) => ({
            ...state,
            accountId: action.payload.accountId,
        }),
        [type.LOGIN_FAIL] : (state, action) => ({
            ...state,
            errorMessage: action.payload
        }),
    }, initialState
);
