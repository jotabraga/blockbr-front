import React from 'react'
import {
    Table,
    Thead,
    TableContainer,
    Tr,
    Th,
    TableCaption,
    Tfoot,
    Tbody,
    Td,
} from '@chakra-ui/react'
import styled from 'styled-components'
export default function Users() {
    const users = [
        {
            name: 'Jao',
            email: 'jao@gmail.com',
            cpf: '4323423434',
            birthDay: '07/06/1991',
            salary: 'R$ 6000,00',
        },
        {
            name: 'Jao',
            email: 'jao@gmail.com',
            cpf: '4323423434',
            birthDay: '07/06/1991',
            salary: 'R$ 6000,00',
        },
        {
            name: 'Jao',
            email: 'jao@gmail.com',
            cpf: '4323423434',
            birthDay: '07/06/1991',
            salary: 'R$ 6000,00',
        },
        {
            name: 'Jao',
            email: 'jao@gmail.com',
            cpf: '4323423434',
            birthDay: '07/06/1991',
            salary: 'R$ 6000,00',
        },
    ]
    return (
        <Tr>
            <Td>inches</Td>
            <Td>millimetres (mm)</Td>
            <Td isNumeric>25.4</Td>
        </Tr>
    )
}

const StyledTable = styled.div`
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
