

import React from 'react'
import css from '../styles/Components/Wall.module.scss'

import { useContext } from "react";
import { LoginContext } from "../context/LoginContext";
import AddTweet from './AddTweet';

export default function Wall() {

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
	 <div  className={
    darkMode
        ? `${css.global_container} ${css.darkMode}`
        : `${css.global_container} ${css.lightMode}`
}>
    <AddTweet/>

   </div>
  )
}
