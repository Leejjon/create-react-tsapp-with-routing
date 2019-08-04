import React from "react";
import {Link} from "react-router-dom";

const Menu: React.FC = () => {
    return (
        <li>
            <ul><Link to="/">Home</Link></ul>
            <ul><Link to="/Page1">Page 1</Link></ul>
        </li>
    );
};

export default Menu;