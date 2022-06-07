import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { Form } from "../components/Forms/Form";
import userSlice from "../store/slices/userSlice";

export const Login = ({ title, handleClick }) => {
  const dispatch = useDispatch();

  const handleLogin = (email, password) => {
   userSlice.login(email, password)
  }
  return (
    <div>
      <h1>Login</h1>
      <Form title="Войти"  />
      <p>
        Или <Link to="/register"> зарегистрируйтесь</Link>
      </p>
    </div>
  );
};
