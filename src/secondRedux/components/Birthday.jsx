import React, {useState} from 'react';
import {useSelector} from "react-redux";

const Birthday = () => {
    const birth_year=useSelector(state=>state.user.birth_year)
    const thatYear = 2022
    const one= 'год'
    const two= 'года'
    const five = 'лет'
    const sum = thatYear - birth_year
    const getNoun=( sum ,one, two, five) => {
        let n = Math.abs(sum);
        n %= 100;
        if (n >= 5 && n <= 20) {
            return five;
        }
        n %= 10;
        if (n === 1) {
            return one;
        }
        if (n >= 2 && n <= 4) {
            return two;
        }
        return five;
    }

    return (
        <div style={{display:"flex", flexDirection:"row" , margin:"2px"}}>
            <div>
                <label htmlFor="">Год рождения:</label>
                <span style={{marginLeft:'10px'}}>{birth_year}&nbsp;&nbsp;&nbsp;
                    ({sum}&nbsp;{getNoun (sum ,one, two, five)})

                </span>
            </div>
        </div>

    );
};

export default Birthday;
