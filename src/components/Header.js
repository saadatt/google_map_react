import React from 'react';
import Logo from "./Logo";
import Menu from "./Menu";
import '../App.css';

const Header = () =>{
        return(
            <div>
                <Logo/>
            <nav className='menu'>
                <Menu/>
            </nav>
            </div>
        );
    };


export default Header;
