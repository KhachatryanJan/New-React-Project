import { combineReducers } from "redux";

const reducers=combineReducers(
    {
        doctors: doctorReducer
    }
)

export default reducers