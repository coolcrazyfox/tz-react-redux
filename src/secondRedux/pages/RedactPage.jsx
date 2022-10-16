import React, {Fragment, useEffect, useState} from 'react';
import s from '../../styles/FormPage.module.css'
import {Link} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {setBirthDay, setFirstName, setLastName, setResume} from "../features/user/userSlice";
import {BiError} from "react-icons/bi";
import {MdError} from "react-icons/md";
import {useForm} from "react-hook-form";



const RedactPage = () => {

    //redux toolkit select state
    const firstName=useSelector(state=>state.user.first_name)
    const lastName = useSelector(state => state.user.surname)
    const birthday=useSelector(state=>state.user.birth_year)
    const resume=useSelector(state=>state.user.portfolio)
    //init state
    const [name, setName] = useState(firstName)
    const [surname, setSurName] = useState(lastName)
    const [birth_year, setBirthYear] = useState(birthday)
    const [portfolio, setPortfolio] = useState(resume)
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
            setName(firstName)
            setSurName(lastName)
            setBirthYear(birthday)
            setPortfolio(resume)
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
    //test
    // const onNameChanged = e => setName(e.target.value)
    // const onSurNameChanged = e => setSurName(e.target.value)
    // const onBirthYearChanged = e => setBirthYear(e.target.value)
    // const onPortfolioChanged = e => setPortfolio(e.target.value)
    // const onSavePostClicked = () => {
    //     if (name && surname && birth_year && portfolio) {
    //         dispatch(
    //             postAdded({
    //                 id:nanoid(),
    //                 name ,
    //                 surname ,
    //                 birth_year ,
    //                 portfolio
    //             })
    //         )
    //         setName('')
    //         setSurName('')
    //         setBirthYear('')
    //         setPortfolio('')
    //     }
    // }
    //
    // useEffect(()=>{
    //     let nameAsString = localStorage.getItem('name')
    //     let surnameAsString = localStorage.getItem('surname')
    //     let birth_yearAsString = localStorage.getItem('birth_year')
    //     let portfolioAsString = localStorage.getItem('portfolio')
    //     if(nameAsString && surnameAsString && birth_yearAsString  && portfolioAsString){
    //         let newName = JSON.parse(nameAsString)
    //         let newSurName = JSON.parse(surnameAsString)
    //         let newBirthYear = JSON.parse(birth_yearAsString)
    //         let newPortfolio = JSON.parse(portfolioAsString)
    //         setName(newName)
    //         setSurName(newSurName)
    //         setBirthYear(newBirthYear)
    //         setPortfolio(newPortfolio)
    //     }
    //
    // },[])
    // useEffect(()=>{
    //     localStorage.setItem('name', JSON.stringify(name))
    // }, [name])
    // useEffect(()=>{
    //     localStorage.setItem('surname', JSON.stringify(surname))
    // }, [ surname])
    // useEffect(()=>{
    //     localStorage.setItem('birth_year', JSON.stringify(birth_year))
    // }, [ birth_year])
    // useEffect(()=>{
    //     localStorage.setItem('portfolio', JSON.stringify(portfolio))
    // }, [ portfolio])
    return (
        <Fragment>
            <section className={s.form}>
                <form className={s.main_container} onSubmit={handleSubmit(onSubmit)}>
                    <h1>Редактировать</h1>
                    <div className={s.input_form}>
                        <label htmlFor="">Name:
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
                                placeholder={'Name'}
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
                        <label htmlFor="">Surname:
                            <input
                                {...register('Surname',
                                    {
                                        required : 'Поле "Surname" обязательно для заполнения',
                                        minLength:{
                                            value: 2,
                                            message:'Минимальное количество символов 2'
                                        }
                                    })}
                                type="text"
                                placeholder={'Surname'}
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
                        <label htmlFor="">Birthday:
                            <input
                                {...register('Birthday',
                                    {
                                        required : 'Поле "Год рождения" обязательно для заполнения',
                                        minLength:{
                                            value: 4,
                                            message:'Поле "Год рождения" не корректно ( Пример: 1922) '
                                        },
                                        min:{
                                            value:1922,
                                            message:'Дружище да ты прям -- Коннор Маклауд, но поставь годик так: 1922 -- и все будет ОК)))'
                                        },
                                        max:{
                                            value:2004,
                                            message:'Пользователь должен быть совершеннолетним'
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
                        <label htmlFor="">Portfolio:
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
                                placeholder={'Portfolio'}
                                onChange={onPortfolioChanged}
                            />
                            {errors?.Portfolio && <span className={s.span_error}><BiError/></span>}
                            <div className={s.span_error}>

                                {errors?.Portfolio && <p><MdError style={{marginRight:"5px"}}/>{errors?.Portfolio?.message || 'Поле "Portfolio" должно быть ссылкой на GitHub'}</p>}
                            </div>
                        </label>
                        {/*<p>Портфолио*/}
                        {/*    <input type="text" placeholder={"Портфолио"} value={portfolio} onChange={onPortfolioChanged}/>*/}
                        {/*</p>*/}

                    </div>

                    <div className={s.box_container}>
                        <div style={{marginRight:'15px'}} >
                            <Link to='/card'>
                                <button className={s.btn}
                                        type={'button'}
                                >Back</button>
                            </Link>
                        </div>
                        <div style={{marginLeft:'15px'}}>
                            <Link to='/card'>
                                <button className={!isValid? s.btn_disabled :s.btn}
                                        type={'button'}
                                        disabled={!isValid}
                                        onClick={onSavePostClicked}>
                                    Обновить
                                </button>
                            </Link>
                        </div>
                    </div>
                </form>
            </section>
        </Fragment>
    );
};

export default RedactPage;
