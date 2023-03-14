import React from "react";
import css from "../styles/Components/Tendencies.module.scss";
import { useContext } from "react";
import { LoginContext } from "../context/LoginContext";

export default function Tendencies() {
    const { darkMode, setDarkMode } = useContext(LoginContext);

    return (
        <div>
            <div
                className={
                    darkMode
                        ? `${css.global_container} ${css.darkMode}`
                        : `${css.global_container} ${css.lightMode}`
                }
            >
                <div>
                    <p>Tendance dans la catégorie France</p>
                    <h3>Michel</h3>
                    <h4>1657 Tweets</h4>
                </div>
					
					 
            </div>
        </div>
    );
}
