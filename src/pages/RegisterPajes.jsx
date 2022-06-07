import React from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { RegistrationForm } from "../components/Forms/RegistrationForm";
import { useDispatch } from "react-redux";
import userSlice from "../store/slices/userSlice";


export const RegisterPajes = (title, handleClick) => {

  return (
    <div>
      <h1>Регистрация</h1>
      <RegistrationForm title="Зарегистрироваться"  />
      <p>
        Или <Link to="/login"> вернуться</Link>
      </p>
      
    </div>
  );
};
