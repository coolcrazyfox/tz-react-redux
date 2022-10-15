import React, {useEffect, useState} from 'react';
import {useDispatch} from "react-redux";
import Name from "./Name";
import Surname from "./Surname";
import Birthday from "./Birthday";
import Portfolio from "./Portfolio";
import {setBirthDay, setFirstName, setLastName, setResume} from "../features/user/userSlice";
import {useForm} from "react-hook-form";
import {BiError} from "react-icons/bi";
import {MdError} from "react-icons/md";

const User = () => {
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
            // setName('')
            // setSurName('')
            // setBirthYear('')
            // setPortfolio('')
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
        <form onSubmit={handleSubmit(onSubmit)}>
            <div >
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
                    {errors?.name && <span style={{ color:'red'}}><BiError style={{ marginLeft:"5px"}}/></span>}

                    <div style={{height: '40px', color:'red'}}>

                        {/*{errors?.name && <p>Поле "Имя" обязательно для заполнения</p>}*/}
                        {errors?.name && <p><MdError style={{marginRight:"5px"}}/>{errors?.name?.message || 'Error!!!'}</p>}
                    </div>
                </label>
            </div>
            <div>
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
                    {errors?.Surname && <span style={{ color:'red'}}><BiError style={{ marginLeft:"5px"}}/></span>}

                    <div style={{height: '40px', color:'red'}}>

                        {errors?.Surname && <p><MdError style={{marginRight:"5px"}}/>{errors?.Surname?.message || 'Error!!!'}</p>}
                    </div>
                </label>
            </div>
            <div >
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
                    {errors?.Birthday && <span style={{ color:'red'}}><BiError style={{ marginLeft:"5px"}}/></span>}

                    <div style={{height: '40px', color:'red'}}>

                        {errors?.Birthday && <p><MdError style={{marginRight:"5px"}}/>{errors?.Birthday?.message || 'Error!!!'}</p>}
                    </div>
                </label>

            </div>
            <div >
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
                    {errors?.Portfolio && <span style={{ color:'red'}}><BiError style={{ marginLeft:"5px"}}/></span>}
                    <div style={{height: '40px', color:'red'}}>

                        {errors?.Portfolio && <p><MdError style={{marginRight:"5px"}}/>{errors?.Portfolio?.message || 'Поле "Portfolio" должно быть ссылкой на GitHub'}</p>}
                    </div>
                </label>
            </div>
            <button type={"submit"} disabled={!isValid} onClick={onSavePostClicked}>Submit</button>

            <div>
                <div>
                    <div>
                        <Name/>
                    </div>
                </div>
                <div>
                    <div>
                        <Surname/>
                    </div>
                </div>
                <div>
                    <div>
                        <Birthday/>
                    </div>
                </div>
                <div>
                    <div>
                        <Portfolio/>
                    </div>
                </div>
            </div>

        </form>
    );
};

export default User;
