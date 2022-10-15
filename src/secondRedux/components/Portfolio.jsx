import React from 'react';
import {useSelector} from "react-redux";

const Portfolio = () => {
    const portfolio=useSelector(state=>state.user.portfolio)
    return (
        <div style={{display: "flex", flexDirection: "row", margin:"2px"}}>
            <div>
                <label htmlFor="">Portfolio:</label>
                <span style={{marginLeft: '15px'}}>
                    <b>
                        <a style={{color:"rgb(4,61,96)", textDecoration:"none"}} href={portfolio}>{portfolio}</a>
                    </b>
                </span>
            </div>
        </div>
    );
};

export default Portfolio;
