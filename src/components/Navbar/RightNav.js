import React from 'react'
import { NavLink, NavMenu } from "./NavbarElements";

const RightNav = ({ open }) => {
    return (
        <div>
            <NavMenu open={open}>
                <NavLink to="/about" activeStyle>
                    About Me
                </NavLink>

                <NavLink to="/education" activeStyle>
                    Education
                </NavLink>

                <NavLink to="/experience" activeStyle>
                    Work Experience
                </NavLink>

                <NavLink to="/contact" activeStyle>
                    Contact Me
                </NavLink>
            </NavMenu>
        </div>
    )
}

export default RightNav
