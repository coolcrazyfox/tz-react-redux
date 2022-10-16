import React, {Fragment, useEffect, useState} from 'react';
import s from '../../styles/FormPage.module.css'
import {Link} from "react-router-dom";
import {useForm} from "react-hook-form";

import {useDispatch} from "react-redux";
import {BiError} from "react-icons/bi";
import {MdError} from "react-icons/md";
import {setBirthDay, setFirstName, setLastName, setResume} from "../features/user/userSlice";



const UserPage = () => {
    //react-hook-form
    const {
        register,
        formState:{
            errors,
            isValid
        },

        // reset,
        handleSubmit,
    }= useForm({
        mode:"onBlur"
    })


    //init state
    const [name, setName] = useState('')
    const [surname, setSurName] = useState('')
    const [birth_year, setBirthYear] = useState('')
    const [portfolio, setPortfolio] = useState('')
    //handler functions
    const onNameChanged = e => setName(e.target.value)
    const onSurNameChanged = e => setSurName(e.target.value)
    const onBirthYearChanged = e => setBirthYear(e.target.value)
    const onPortfolioChanged = e => setPortfolio(e.target.value)
    const onSavePostClicked = () => {
        if (name && surname && birth_year && portfolio) {
            dispatch( setFirstName(name))
            dispatch( setLastName(surname))
            dispatch( setBirthDay(birth_year))
            dispatch( setResume(portfolio))
            setName('')
            setSurName('')
            setBirthYear('')
            setPortfolio('')
        }
    }
    const onSubmit = (data)=>{
        alert(`Your form ${data.name} was submit`)
        // alert(JSON.stringify(data))
        // data.preventDefault()
        // reset() //reset inputs
    }
    //dispatch
    const dispatch=useDispatch()

    return (
        <Fragment>
            <section className={s.form}>
                <form className={s.main_container} onSubmit={handleSubmit(onSubmit)}>
                    <h1>Создать</h1>
                    <div className={s.input_form}>
                        <label htmlFor="">Имя:
                            <input
                                {...register('name',
                                    {
                                        // required : true,
                                        required : 'Поле "Имя" обязательно для заполнения',
                                        minLength:{
                                            value: 2,
                                            message:'Минимальное количество символов 2'
                                        }
                                    })}
                                type="text"
                                placeholder={'Имя'}
                                onChange={onNameChanged}
                            />
                            {errors?.name && <span className={s.span_error}><BiError/></span>}

                            <div className={s.span_error}>

                                {/*{errors?.name && <p>Поле "Имя" обязательно для заполнения</p>}*/}
                                {errors?.name && <p ><MdError style={{marginRight:"5px"}}/>{errors?.name?.message || 'Error!!!'}</p>}
                            </div>
                        </label>
                        {/*<p>Имя*/}
                        {/*    <input type="text" placeholder={"Имя"} value={name} onChange={onNameChanged}/>*/}
                        {/*</p>*/}
                    </div>
                    <div className={s.input_form}>
                        <label htmlFor="">Фамилия:
                            <input
                                {...register('Surname',
                                    {
                                        required : 'Поле "Фамилия" обязательно для заполнения',
                                        minLength:{
                                            value: 2,
                                            message:'Минимальное количество символов 2'
                                        }
                                    })}
                                type="text"
                                placeholder={'Фамилия'}
                                onChange={onSurNameChanged}
                            />
                            {errors?.Surname && <span className={s.span_error}><BiError /></span>}

                            <div className={s.span_error}>

                                {errors?.Surname && <p><MdError style={{marginRight:"5px"}}/>{errors?.Surname?.message || 'Error!!!'}</p>}
                            </div>
                        </label>
                        {/*<p>Фамилия*/}
                        {/*    <input type="text" placeholder={"Фамилия"} value={surname} onChange={onSurNameChanged}/>*/}
                        {/*</p>*/}

                    </div>
                    <div className={s.input_form}>
                        <label htmlFor="">Год рождения:
                            <input
                                {...register('Birthday',
                                    {
                                        required : 'Поле "Год рождения" обязательно для заполнения',

                                        min:{
                                            value:1922,
                                            message:'Дружище да ты прям -- Коннор Маклауд, но поставь годик так: 1922 -- и все будет ОК)))'
                                        },
                                        max:{
                                            value:2004,
                                            message:'Пользователь должен быть совершеннолетним, но не динозавром ( Пример: 1922)'
                                        },
                                        minLength:{
                                            value: 4,
                                            message:'Поле "Год рождения" не корректно ( Пример: 1922) '
                                        },


                                    })}
                                type="number"
                                placeholder={'Год рождения'}
                                onChange={onBirthYearChanged}
                            />
                            {errors?.Birthday && <span className={s.span_error}><BiError /></span>}

                            <div className={s.span_error}>

                                {errors?.Birthday && <p><MdError style={{marginRight:"5px"}}/>{errors?.Birthday?.message || 'Error!!!'}</p>}
                            </div>
                        </label>
                        {/*<p>Год рождения*/}
                        {/*    <input type="number" placeholder={"Год рождения"} value={birth_year} onChange={onBirthYearChanged}/>*/}
                        {/*</p>*/}

                    </div>
                    <div className={s.input_form}>
                        <label htmlFor="">Портфолио:
                            <input
                                {...register('Portfolio',
                                    {
                                        required : 'Поле "Portfolio" обязательно для заполнения',
                                        minLength:{
                                            value: 18,
                                            message:'Поле "Portfolio" должно быть ссылкой на GitHub (https://github.com)'
                                        },
                                        pattern: /github.com/

                                    })}
                                type="text"
                                placeholder={'Портфолио'}
                                onChange={onPortfolioChanged}
                            />
                            {errors?.Portfolio && <span className={s.span_error}><BiError/></span>}
                            <div className={s.span_error}>

                                {errors?.Portfolio && <p><MdError style={{marginRight:"5px"}}/>{errors?.Portfolio?.message || 'Поле "Портфолио" должно быть ссылкой на GitHub'}</p>}
                            </div>
                        </label>
                        {/*<p>Портфолио*/}
                        {/*    <input type="text" placeholder={"Портфолио"} value={portfolio} onChange={onPortfolioChanged}/>*/}
                        {/*</p>*/}

                    </div>
                    <Link to='/card'>
                        <button className={!isValid? s.btn_disabled :s.btn}
                                type={"submit"}
                                disabled={!isValid}
                                onClick={onSavePostClicked}>
                            Создать
                        </button>
                    </Link>
                </form>
            </section>
        </Fragment>
    );
};

export default UserPage;
