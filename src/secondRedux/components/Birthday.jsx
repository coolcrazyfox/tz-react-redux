import React, {useState} from 'react';
import {useSelector} from "react-redux";

const Birthday = () => {
    const birth_year=useSelector(state=>state.user.birth_year)
    const thatYear = 2022
    const sum = thatYear - birth_year

    return (
        <div>
            Birth Year:
            {birth_year}
            --
            {sum}(years)

        </div>
    );
};

export default Birthday;
