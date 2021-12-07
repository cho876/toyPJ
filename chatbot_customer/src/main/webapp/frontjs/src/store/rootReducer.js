import {combineReducers, createStore} from "redux";

import main from './modules/main/reducer'

const rootReducer = combineReducers({
    main,
});

export default rootReducer;
