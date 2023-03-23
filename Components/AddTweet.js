import React from "react";
import css from "../styles/Components/AddTweet.module.scss";
import { useContext } from "react";
import { LoginContext } from "../context/LoginContext";
import Button_glow from "./Buttons/Button_glow";
export default function AddTweet() {
    const { darkMode, setDarkMode } = useContext(LoginContext);

    return (
        <div
            className={
                darkMode
                    ? `${css.global_container} ${css.darkMode}`
                    : `${css.global_container} ${css.lightMode}`
            }
        >
            <div className={css.card_container}>
                <div
                    className={
                        darkMode
                            ? `${css.txt_part} ${css.darkMode}`
                            : `${css.txt_part} ${css.lightMode}`
                    }
                >
                    <textarea
                        className={
                            darkMode
                                ? `${css.input_text} ${css.darkMode}`
                                : `${css.input_text} ${css.lightMode}`
                        }
                        type="text"
                        placeholder="Write something"
                    />
                </div>

                <div className={css.bottom_part}>
                    <div>logo picture</div>
                    <div>
                        <Button_glow name={"Twetter"}/>
                    </div>
                </div>
            </div>
        </div>
    );
}
