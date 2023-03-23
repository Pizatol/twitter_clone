import React from "react";
import css from "../styles/Components/AddTweet.module.scss";
import { useContext } from "react";
import { LoginContext } from "../context/LoginContext";

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

				<div className={css.txt_part}>
					<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae quasi ratione facilis illum esse consequatur sapiente nemo rem ipsam officiis!</p>

				</div>

				<div className={css.bottom_part}>
					<div>
						logos
					</div>
					<div>
						<button>Tweeter</button>
					</div>
				</div>


		  </div>
    );
}
