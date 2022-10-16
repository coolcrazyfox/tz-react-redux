import React from 'react';
import {useSelector} from "react-redux";

const Surname = () => {
    const lastName = useSelector(state => state.user.surname)
    return (
        <div style={{display: "flex", flexDirection: "row" , margin:"2px"}}>
            <div>
                <label htmlFor="">Фамилия:</label>
                <span style={{marginLeft: '10px'}}>{lastName}</span>
            </div>
        </div>
    );
};

export default Surname;
