import styled from "styled-components";
import { NavLink as Link } from "react-router-dom";

export const Nav = styled.nav`
    background: #000;
    height: 80px;
    display: flex;
    position: fixed;
    top: 0;
    width: 100%;
    justify-content: space-between; 
    padding: 0.5rem calc((100vw - 1000px) / 2);
    z-index: 10;
`

export const NavLink = styled(Link)`
    color: #fff;
    display: flex;
    align-items: center;
    text-decoration: none;
    padding: 0 1rem;
    height: 100%;
    cursor: pointer;

    &.active {
        color: #15cdfc;
    }
`

export const NavMenu = styled.div`
    display: flex;
    margin-top: 22px;
    // margin-right: 
    @media screen and (max-width: 768px) {
        background-color: #000000;
        flex-flow: column nowrap;
        position: fixed;
        transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(100%)'};
        top: -22px;
        right: 0;
        height: 100%;
        width: 300px;
        padding-top: 3.5rem;
        padding-bottom: 20rem;
        padding-left: 1.3rem;
        font-size: 25px;
        z-index: 2;
        transition: transform 0.3s ease-in-out;
    }
`