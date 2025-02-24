import { combineReducers } from "redux";
import doctorReducer from "./doctorInfo";
const reducers=combineReducers(
    {
        doctors: doctorReducer
    }
)

export default reducers