import { doctorTypes } from "../types"

function drawdoctor(id){
    return{
       type: doctorTypes.DRAW_DOCTOR,
       doctor:{
        id
       }
    
}
}

export default drawdoctor