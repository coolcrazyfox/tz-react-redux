import React from 'react';
import {useSelector} from "react-redux";

const Surname = () => {
    const lastName=useSelector(state=>state.user.surname)
    return (
        <div>
            Surname:
            {lastName}
        </div>
    );
};

export default Surname;
