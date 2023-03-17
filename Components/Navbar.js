import React from "react";
import { useContext } from "react";
import { LoginContext } from "../context/LoginContext";
import css from "../styles/Components/Navbar.module.scss";
import Image from "next/image";
import Link from "next/link";

import logo_stack from "../public/icons/logo_stack.svg";
import home_dark from "../public/icons/home_dark.svg";
import home_light from "../public/icons/home_light.svg";
import message_dark from '../public/icons/message_dark.svg'
import message_light from '../public/icons/message_light.svg'

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
                <button
                    className={css.buttonDarkTempo}
                    onClick={toggleDarkMode}
                >
                    Light
                </button>
            ) : (
                <button
                    className={css.buttonDarkTempo}
                    onClick={toggleDarkMode}
                >
                    Dark
                </button>
            )}

            <Image
                src={logo_stack}
                alt="logo"
                // height="auto"
                width={100}
            />

{/* HOME BUTTON */}
            {darkMode ? (
                <Link href={"/"}>
                <div className={css.navigation_item_container}>

                    <Image
                        src={home_light}
                        alt="logo"
                        height={"auto"}
                        width={40}
                    />
                    <p>Home</p>
                </div>
                </Link>
            ) : (
                <Link href={"/"}>
                <div className={css.navigation_item_container}>
                    <Image
                        src={home_dark}
                        alt="logo"
                        height={"auto"}
                        width={40}
                    />
                    <p>Home</p>
                </div>
                </Link>
            )}

{/* MESSAGE BUTTON */}
            {darkMode ? (
                <Link href={"/messages_page"}>
                <div className={css.navigation_item_container}>

                    <Image
                        src={message_light}
                        alt="logo"
                        height={"auto"}
                        width={40}
                    />
                    <p>Message</p>
                </div>
                </Link>
            ) : (
                <Link href={"/messages_page"}>
                <div className={css.navigation_item_container}>
                    <Image
                        src={message_dark}
                        alt="logo"
                        height={"auto"}
                        width={40}
                    />
                    <p>Message</p>
                </div>
                </Link>
            )}

         
        </div>
    );
}
