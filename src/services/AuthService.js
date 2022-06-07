import $api from "../http/index";

export default function AuthService(){
    const login =async(email, password)=>{
       console.log(email, password)
       return $api.post('/login',{email, password})
    }

    const registration=async (email, password)=>{
        return $api.post('/registration',{email, password})
     }

     const logout=async()=>{
        return $api.post('/logout')
     }
} 