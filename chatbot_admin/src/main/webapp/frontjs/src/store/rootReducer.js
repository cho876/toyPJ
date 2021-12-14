import {combineReducers, createStore} from "redux";

import board from './modules/board/reducer'
import main from './modules/main/reducer'

const rootReducer = combineReducers({
    main,
    board
});

export default rootReducer;
