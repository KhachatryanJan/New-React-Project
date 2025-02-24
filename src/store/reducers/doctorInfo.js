import doc from "../../DoctorInfrometion/DoctorInfrometion.json"
import { doctorTypes } from "../types";


function doctorReducer(state=doc,action){
    console.log(state);
    console.log(action.type);
    
    switch(action.type){
        case doctorTypes.DRAW_DOCTOR:
            return[...state,action.doctor]
        default:
            return state
    }
}

export default doctorReducer