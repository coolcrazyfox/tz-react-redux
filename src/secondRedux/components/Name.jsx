import React from 'react';
import {useSelector} from "react-redux";

const Name = () => {
    const firstName=useSelector(state=>state.user.first_name)
    return (
        <div>
            First name:
            {firstName}
        </div>
    );
};

export default Name;
