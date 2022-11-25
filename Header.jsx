import React from 'react'
import {Link} from "react-router-dom";
import {IoFastFoodOutline} from "react-icons/io5";
import {FiShoppingCart,FiLogIn} from "react-icons/fi";
import {FaUser} from "react-icons/fa";
import { motion } from "framer-motion";
const Header = ({isAuthenticated=false}) => {
  return (
    <nav>
      <div>
          <IoFastFoodOutline/>
      </div>
      <div>
        <Link to="/">Home</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/about">About</Link>
        <Link to="/cart"><FiShoppingCart/></Link>
        <Link to={isAuthenticated?"/me":"/Login"}>
            {isAuthenticated ? <FaUser/>:<FiLogIn/>}
        </Link>
      </div>
    </nav>
    );  
};

export default Header