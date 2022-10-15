import React, {Fragment, useEffect, useState} from 'react';
import s from '../styles/FormPage.module.css'
import {Link} from "react-router-dom";
import {useDispatch} from "react-redux";



const RedactPage = () => {
    const dispatch = useDispatch()
    const [name, setName] = useState('')
    const [surname, setSurName] = useState('')
    const [birth_year, setBirthYear] = useState('')
    const [portfolio, setPortfolio] = useState('')

    const onNameChanged = e => setName(e.target.value)
    const onSurNameChanged = e => setSurName(e.target.value)
    const onBirthYearChanged = e => setBirthYear(e.target.value)
    const onPortfolioChanged = e => setPortfolio(e.target.value)
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
        <></>
        // <Fragment>
        //     <section className={s.form}>
        //         <form className={s.main_container}>
        //             <h1>Создать</h1>
        //             <div className={s.input_form}>
        //                 <p>Имя
        //                     <input type="text" placeholder={"Имя"} value={name} onChange={onNameChanged}/>
        //                 </p>
        //
        //             </div>
        //             <div className={s.input_form}>
        //                 <p>Фамилия
        //                     <input type="text" placeholder={"Фамилия"} value={surname} onChange={onSurNameChanged}/>
        //                 </p>
        //
        //             </div>
        //             <div className={s.input_form}>
        //                 <p>Год рождения
        //                     <input type="number" placeholder={"Год рождения"} value={birth_year} onChange={onBirthYearChanged}/>
        //                 </p>
        //
        //             </div>
        //             <div className={s.input_form}>
        //                 <p>Портфолио
        //                     <input type="text" placeholder={"Портфолио"} value={portfolio} onChange={onPortfolioChanged}/>
        //                 </p>
        //
        //             </div>
        //             {/*<Link to='/card'>*/}
        //             {/*    <button className={s.btn} type={'button'} onClick={onSavePostClicked}>Создать</button>*/}
        //             {/*</Link>*/}
        //             <Link to='/card'>
        //                 <button className={s.btn} type={'button'} >Back</button>
        //             </Link>
        //             <Link to='/card'>
        //                 <button className={s.btn} type={'button'} onClick={onSavePostClicked} >Изменить</button>
        //             </Link>
        //         </form>
        //
        //     </section>
        //
        // </Fragment>

    );
};

export default RedactPage;
