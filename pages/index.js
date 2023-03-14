import Head from "next/head";
import Image from "next/image";
import Wall from "../Components/Wall";
import css from "../styles/Home.module.scss";

import { useContext } from "react";
import { LoginContext } from "../context/LoginContext";
import Navbar from "../Components/Navbar";
import Tendencies from "../Components/Tendencies";

export default function Home() {
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

    console.log(darkMode);

    return (
        <div
            className={
                darkMode
                    ? `${css.global_container} ${css.darkMode}`
                    : `${css.global_container} ${css.lightMode}`
            }
        >
            <Head>
                <title>Clone twitter</title>
                <meta
                    name="description"
                    content="Generated by create next app"
                />
                <link rel="icon" href="/favicon.ico" />
            </Head>

         
                <Navbar/>
                <Wall />
                <Tendencies/>
           

            
        </div>
    );
}