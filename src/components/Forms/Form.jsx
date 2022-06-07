import { useState} from "react";
import { useDispatch } from "react-redux";
import responceLogin  from "../../store/slices/userSlice";


export const Form = ({ title }) => {
    const [email, setEmail] = useState("");
    const [password, setPass] = useState("");
  const dispatch = useDispatch()
  
    return (
      <div>
        <input
          placeholder="Почта..."
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <br />
        <input
          placeholder="Пароль..."
          type="password"
          value={password}
          onChange={(e) => setPass(e.target.value)}
        /><br/>
        <button onClick={()=>dispatch(responceLogin(email, password))}>{title}</button>
        
      </div>
    );
  };