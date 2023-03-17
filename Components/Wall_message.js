
import React from 'react'
import css from '../styles/Components/Wall_message.module.scss'

import { useContext } from "react";
import { LoginContext } from "../context/LoginContext";



export default function Wall() {

  const {
    user,
    setUser,
    formOn,
    setFormOn,
    userName,
    setUserName,
    darkMode,

} = useContext(LoginContext);


  return (
	 <div  className={
    darkMode
        ? `${css.global_container} ${css.darkMode}`
        : `${css.global_container} ${css.lightMode}`
}>

	<h1>WALL MESSAGE</h1>
   </div>
  )
}
