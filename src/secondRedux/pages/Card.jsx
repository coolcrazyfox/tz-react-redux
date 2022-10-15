import React from 'react';
import Name from "../components/Name";
import Surname from "../components/Surname";
import Birthday from "../components/Birthday";
import Portfolio from "../components/Portfolio";

const Card = () => {
    return (
        <div>
            <Name/>
            <Surname/>
            <Birthday/>
            <Portfolio/>
        </div>
    );
};

export default Card;
