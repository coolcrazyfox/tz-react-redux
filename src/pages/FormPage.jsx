import React, {Fragment} from 'react';
import s from '../styles/FormPage.module.css'

const FormPage = () => {
    return (
        <Fragment>
            <div className={s.form}>
                <div className={s.main_container}>
                    <h1>Создать</h1>
                    <div className={s.input_form}>
                        <p>Имя
                            <input type="text" placeholder={"Имя"}/>
                        </p>

                    </div>
                    <div className={s.input_form}>
                        <p>Фамилия
                            <input type="text" placeholder={"Фамилия"}/>
                        </p>

                    </div>
                    <div className={s.input_form}>
                        <p>Год рождения
                            <input type="number" placeholder={"Год рождения"}/>
                        </p>

                    </div>
                    <div className={s.input_form}>
                        <p>Портфолио
                            <input type="text" placeholder={"Портфолио"}/>
                        </p>

                    </div>
                    <div>
                        <button className={s.btn}>Создать</button>
                    </div>
                </div>


            </div>



        </Fragment>
    );
};

export default FormPage;
