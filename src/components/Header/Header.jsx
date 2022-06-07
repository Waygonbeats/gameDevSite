import React from "react";
import { ButtonAboutUs } from "../Buttons/ButtonAboutUs";
import { ButtonsGames } from "../Buttons/ButtonsGames";
import { ButtonContacts } from "../Buttons/ButtonContacts";
import { ButtonsVacancies } from "../Buttons/ButtonVacancies";
import "./HeaderStyle.css";
import { Games } from "../../pages/Games";
import { Aboutus } from "../../pages/Aboutus";
import { Contacts } from "../../pages/Contacts";
import { Vacancies } from "../../pages/Vacancies";
import { Routes, Route, Link } from "react-router-dom";
import { ButtonLogin } from "../Buttons/ButtonLogin";
import { Login } from "../../pages/Login";
import { RegisterPajes } from "../../pages/RegisterPajes";
export const Header = () => {
  return (
    <>
      <div className="header">
        <div className="img">
          <img src="images/Atari_logo.svg.png" alt="Картинка" />
        </div>
        <div className="btnCont">
          <div className="buttonPoz">
            <Link to="/games">
              <ButtonsGames />
            </Link>
            <Link to="/aboutus">
              <ButtonAboutUs />
            </Link>
            <Link to="/contacts">
              <ButtonContacts />
            </Link>
            <Link to="/vacancies">
              <ButtonsVacancies />
            </Link>
            <Link to="/login">
              <ButtonLogin />
            </Link>
          </div>
        </div>
      </div>

      <Routes>
        <Route path="/games" element={<Games />} />
        <Route path="/aboutus" element={<Aboutus />} />
        <Route path="/contacts" element={<Contacts />} />
        <Route path="/vacancies" element={<Vacancies />} />
        <Route path="/login" element={<Login />} />
         <Route path="/register" element={<RegisterPajes/>} />
   
      </Routes>
    </>
  );
};
