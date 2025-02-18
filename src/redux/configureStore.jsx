import { combineReducers, configureStore } from "@reduxjs/toolkit";
import userSlice from "./modules/userSlice"
import thunk from "redux-thunk";
import chatSlice from "./modules/chatSlice";
import friendSlice from "./modules/friendSlice";


const middlewares = [thunk];

// 리듀서 통합
const rootReducer = combineReducers({
    userSlice,
    chatSlice,
    friendSlice,
});

// 스토어 연결
const store = configureStore({
    reducer: rootReducer,

    middlewart: [...middlewares],
});

export default store;
