import React from 'react';
import {useSelector} from "react-redux";

const Portfolio = () => {
    const portfolio=useSelector(state=>state.user.portfolio)
    return (
        <div>
            Portfolio:
            <a href={portfolio}>{portfolio}</a>

        </div>
    );
};

export default Portfolio;
