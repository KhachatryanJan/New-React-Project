import doc from "../../DoctorInfrometion/DoctorInfrometion.json"
import { doctorTypes } from "../types";


function doctorReducer(state={all:doc,drawable:null},action){
    console.log(state);
    console.log(action.type);
    
    switch(action.type){
        case doctorTypes.DRAW_DOCTOR:
            return {...state,drawable:action.doctor}
        default:
            return state
    }
}

export default doctorReducer