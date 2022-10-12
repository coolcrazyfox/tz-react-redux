import React from 'react';
import s from "../styles/Main.module.css";
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


                <Link to='/redact'>
                    <button className={s.btn}>Редактировать</button>
                </Link>
                {/*    {addButton<=1 ?  <div className={s.information}> No data</div> : renderedPosts}*/}
                {/*</div>*/}

                {/*{addButton>1 ? <div to='/form'> <button className={s.btn}>Изменить</button></div>: */}
                {/*}*/}



            </div>

        </div>
    );
};

export default CardPage;
