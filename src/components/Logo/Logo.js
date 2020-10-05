import React from 'react';

import gramFactory from "../../assets/images/GFLogo.jpg";
import "./Logo.css";

const logo = (props) => (
    <div>
        <img style={{height: "50px", marginLeft: 0, marginTop: 0}} src={gramFactory} alt="GramFactory"></img>

    </div>
);

export default logo;
