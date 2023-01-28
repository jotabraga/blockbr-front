import React from 'react'
import styled from 'styled-components'
import Blockbr from '../assets/Blockbr.jpeg'

export default function Header() {
    return (
        <StyledHeader>
            <img src={Blockbr} />
            BlockBR
        </StyledHeader>
    )
}

const StyledHeader = styled.div`
    height: auto;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10px;
    img {
        border-radius: 50%;
        width: 50px;
        height: 50px;
    }
`
