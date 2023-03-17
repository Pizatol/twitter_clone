

import React from 'react'
import css from '../styles/pages/Messages_page.module.scss'
import { useContext } from "react";
import { LoginContext } from "../context/LoginContext";

import Navbar from "../Components/Navbar";
import Wall_message from '../Components/Wall_message'
import Tendencies from '../Components/Tendencies';



export default function Messages_page() {

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

  return (
	 <div
	  className={
                darkMode
                    ? `${css.global_container} ${css.darkMode}`
                    : `${css.global_container} ${css.lightMode}`
            }
	 >
		<Navbar/>
		<Wall_message/>
		<Tendencies/>
	 </div>
  )
}
