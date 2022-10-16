import React from 'react';
import {useSelector} from "react-redux";

const Name = () => {
    const firstName=useSelector(state=>state.user.first_name)
    return (
        <div style={{display:"flex", flexDirection:"row" , margin:"2px"}}>
            <div>
                <label htmlFor="">Имя:</label>
                <span style={{marginLeft:'10px'}}>{firstName}</span>
            </div>

        </div>
    );
};

export default Name;
