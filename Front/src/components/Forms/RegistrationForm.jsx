import { useContext } from "react";
import { useState } from "react";
import  {Context}  from '../../index';
export const RegistrationForm = ({ title, handleClick }) => {
    const [email, setEmail] = useState("");
    const [password, setPass] = useState("");
    const {store} = useContext(Context)
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
        <button onClick={()=>(store.registration(email, password))}>{title}</button>
        
      </div>
    );
  };