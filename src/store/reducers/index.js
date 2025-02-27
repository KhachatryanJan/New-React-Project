import { combineReducers } from "redux";
import doctorReducer from "./doctorInfo";
import  userNameReducers  from "./usreNameReducers";
const reducers=combineReducers(
    {
        doctors: doctorReducer,
        user:userNameReducers 
    }
)

export default reducers