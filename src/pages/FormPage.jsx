import React, {Fragment, useState} from 'react';
import s from '../styles/FormPage.module.css'
import {useDispatch} from "react-redux";
import {postAdded} from "../testRedux/features/post/postsSlice";
import {Link} from "react-router-dom";
import {nanoid} from "@reduxjs/toolkit";


const FormPage = () => {
    const dispatch = useDispatch()
    const [name, setName] = useState('')
    const [surname, setSurName] = useState('')
    const [birth_year, setBirthYear] = useState('')
    const [portfolio, setPortfolio] = useState('')
    const onNameChanged = e => setName(e.target.value)
    const onSurNameChanged = e => setSurName(e.target.value)
    const onBirthYearChanged = e => setBirthYear(e.target.value)
    const onPortfolioChanged = e => setPortfolio(e.target.value)

    const onSavePostClicked = () => {
        if (name && surname && birth_year && portfolio) {
            dispatch(
                postAdded({
                    id:nanoid(),
                    name ,
                    surname ,
                    birth_year ,
                    portfolio
                })
            )
            setName('')
            setSurName('')
            setBirthYear('')
            setPortfolio('')
        }
    }
    return (
        <Fragment>
            <section className={s.form}>
                <form className={s.main_container}>
                    <h1>Создать</h1>
                    <div className={s.input_form}>
                        <p>Имя
                            <input type="text" placeholder={"Имя"} value={name} onChange={onNameChanged}/>
                        </p>

                    </div>
                    <div className={s.input_form}>
                        <p>Фамилия
                            <input type="text" placeholder={"Фамилия"} value={surname} onChange={onSurNameChanged}/>
                        </p>

                    </div>
                    <div className={s.input_form}>
                        <p>Год рождения
                            <input type="number" placeholder={"Год рождения"} value={birth_year} onChange={onBirthYearChanged}/>
                        </p>

                    </div>
                    <div className={s.input_form}>
                        <p>Портфолио
                            <input type="text" placeholder={"Портфолио"} value={portfolio} onChange={onPortfolioChanged}/>
                        </p>

                    </div>
                    <Link to='/'>
                        <button className={s.btn} type={'button'} onClick={onSavePostClicked}>Создать</button>
                    </Link>
                </form>


            </section>



        </Fragment>
    );
};

export default FormPage;
