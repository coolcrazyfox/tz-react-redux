import React from 'react';
import s from "../../styles/Main.module.css";
import Card from "./Card";
import {Link} from "react-router-dom";

const CardPage = () => {
    return (
        <div  className={s.main_form}>
            <div className={s.main_box}>
                <div className={s.title}>Карточка студента</div>
                <div className={s.box_info}>
                    <Card/>
                </div>
                <div className={s.box_container}>
                    <Link to='/redact'>
                        <button className={s.btn}>Редактировать</button>
                    </Link>
                </div>
            </div>

        </div>
    );
};

export default CardPage;
