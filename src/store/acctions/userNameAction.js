
import { userName } from "../types"
function user_Name(user){
    console.log(user);
    
    return{
        type:userName.USER_NAME,
        data:{
           user
        }
    }

}


export {user_Name}