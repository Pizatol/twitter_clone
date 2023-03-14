import React from "react";
import { useContext } from "react";
import { LoginContext } from "../context/LoginContext";
import css from '../styles/Components/Navbar.module.scss'
import Image from "next/image";


import logoIconDark from '../public/icons/logoIconDark.svg'
import logoIconLight from '../public/icons/logoIconLight.svg'


export default function Navbar() {
    const {
        user,
        setUser,
        formOn,
        setFormOn,
        userName,
        setUserName,
        darkMode,
        setDarkMode,
    } = useContext(LoginContext);

    const toggleDarkMode = () => {
        setDarkMode(!darkMode);
    };

    return (
        <div
            className={
                darkMode
                    ? `${css.global_container} ${css.darkMode}`
                    : `${css.global_container} ${css.lightMode}`
            }
        >

		  {darkMode ? (
            <Image
           className={css.logo}
           src={logoIconLight}
            alt='logo icon'
           />
          ) : (
            <Image
           className={css.logo}
           src={logoIconDark}
           
            alt='logo icon'
           />
          )}
           

            {darkMode ? (
                <button onClick={toggleDarkMode}>Light</button>
            ) : (
                <button onClick={toggleDarkMode}>Dark</button>
            )}
        </div>
    );
}
