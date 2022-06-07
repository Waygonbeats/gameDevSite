import { useState } from "react";
import  responceRegistration  from "../../store/slices/userSlice";

export const RegistrationForm = ({ title, handleClick }) => {
    const [email, setEmail] = useState("");
    const [password, setPass] = useState("");
  
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
        <button onClick={()=>(responceRegistration(email, password))}>{title}</button>
        
      </div>
    );
  };