import React, {useState} from 'react';
import {useSelector} from "react-redux";

const Birthday = () => {
    const birth_year=useSelector(state=>state.user.birth_year)
    const thatYear = 2022
    const sum = thatYear - birth_year

    return (
        <div style={{display:"flex", flexDirection:"row" , margin:"2px"}}>
            <div>
                <label htmlFor="">Birth Year:</label>
                <span style={{marginLeft:'10px'}}>{birth_year}&nbsp;&nbsp;&nbsp;({sum}&nbsp;years)</span>
            </div>
        </div>

    );
};

export default Birthday;
