import React from 'react';
import { Nav, NavLink } from "./NavbarElements";
import Logo from '../../image/KJ.svg';
import Burger from './Burger';

const Navbar = () => {
    return (
        <>
            <Nav>
                <NavLink to="/">
                    <img src={Logo} alt='logo' />
                </NavLink>
                <Burger />
            </Nav>
        </>
    )
}

export default Navbar
