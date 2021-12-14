import {handleActions} from 'redux-actions'
import type from './type';

const initialState = {
    accountId : null,
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
        })
    }, initialState
);
