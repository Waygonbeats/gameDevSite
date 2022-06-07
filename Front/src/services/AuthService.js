import axios from "axios";
import $api from "../http/index";

export default class AuthService{
    static async login(email, password){
    console.log(email ,password)
      /*  return $api.post('/login',{email, password}) */
      return await axios.get("/zx").then(result=> console.log(result))
    }
   
    static async registration(email, password){
  
        return $api.post('/registration',{email, password})
     }

    static async logout(){
        return $api.post('/logout')
     }
} 