import $api from "../http/index";

export default function UserService(){
   const fetchUsers=()=>{
       return $api.get('/users')

   }
} 