import {userName} from "../types"

function userNameReducers(state={user:null},action){
    console.log(state);
    
    switch (action.type){
        case userName.USER_NAME:
            return {...state,user:action.data,isAuthorized:true}
        default:
            return state
    }

}


export default userNameReducers