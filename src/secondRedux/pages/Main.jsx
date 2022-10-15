import React from 'react';
import s from "../../styles/Main.module.css";
import {Link} from "react-router-dom";

const Main = () => {
    return (
        <div className={s.main_form}>

            <div className={s.main_box}>
                <div className={s.title}>Карточка студента</div>
                <div className={s.information}> No data</div>
                <div className={s.box_container}>
                    <Link to='/user'>
                            <button className={s.btn}>Добавить</button>

                    </Link>
                </div>
            </div>

        </div>
    );
};

export default Main;
