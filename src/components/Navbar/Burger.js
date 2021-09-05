import styled from "styled-components";
import React, { useState } from 'react'
import RightNav from "./RightNav";

const StyledBurger = styled.div`
    width: 2rem;
    height: 2rem;
    position: fixed;
    top: 23px;
    right: 25px;
    z-index: 5;
    display: none;

    @media screen and (max-width: 768px) {
        display: flex;
        justify-content: space-around;
        flex-flow: column nowrap;
        &:hover {
            cursor: pointer;
        }
    }

    div {
        width: 2rem;
        height: 0.25rem;
        background-color: #fff;
        border-radius: 10px;
        transform-origin: 1px;
        transition: all 0.3s linear;

        &:nth-child(1) {
            transform: ${({ open })  => open ? 'rotate(45deg)' : 'rotate(0)'};
        }

        &:nth-child(2) {
            opacity: ${({ open })  => open ? 0 : 1};
        }

        &:nth-child(3) {
            transform: ${({ open })  => open ? 'rotate(-45deg)' : 'rotate(0)'};
        }
    }
`

const Burger = () => {
    const [open, setOpen] = useState(false)

    return (
        <>
            <StyledBurger open={open} onClick={() => setOpen(!open)}>
                <div />
                <div />
                <div />
            </StyledBurger>
            <RightNav open={open}/>
        </>
    )
}

export default Burger
