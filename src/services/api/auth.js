import api from "./api";



 export async function login(email){
    try{
        const res=await api.post("/user/auth/patient/sign_in", {email})
        return res.data
    }catch(error){
        console.log(error);
        
    }
  

}

export async function verify(email,otp){
    try{
        const res=await api.post("/user/auth/verify_otp", {email,otp})
        return res.data
    }catch(error){
        console.log(error);
        
    }
  

}