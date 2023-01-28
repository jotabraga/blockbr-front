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
    return (
        <TableContainer>
            <Table size="md">
                <TableCaption>
                    Imperial to metric conversion factors
                </TableCaption>
                <Thead>
                    <Tr>
                        <Th>Nome</Th>
                        <Th>E-mail</Th>
                        <Th>CPF</Th>
                        <Th>Data de nascimento</Th>
                        <Th>Salário</Th>
                        <Th>Atualizar</Th>
                        <Th>Deletar</Th>
                    </Tr>
                </Thead>
                <Tbody>
                    <Tr>
                        <Td>inches</Td>
                        <Td>millimetres (mm)</Td>
                        <Td isNumeric>25.4</Td>
                    </Tr>
                    <Tr>
                        <Td>feet</Td>
                        <Td>centimetres (cm)</Td>
                        <Td isNumeric>30.48</Td>
                    </Tr>
                    <Tr>
                        <Td>yards</Td>
                        <Td>metres (m)</Td>
                        <Td isNumeric>0.91444</Td>
                    </Tr>
                </Tbody>
                <Tfoot>
                    <Tr>
                        <Th>To convert</Th>
                        <Th>into</Th>
                        <Th isNumeric>multiply by</Th>
                    </Tr>
                </Tfoot>
            </Table>
        </TableContainer>
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
