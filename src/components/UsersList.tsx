import React from 'react'
import { Table, Thead, TableContainer, Tr, Th, Tbody } from '@chakra-ui/react'
import User from './User'

export default function UsersList(props: any) {
    const users = [
        {
            id: 1,
            name: 'Jao',
            email: 'jao@gmail.com',
            cpf: '4323423434',
            birthDay: '1991-06-07',
            salary: 'R$ 6000,00',
        },
        {
            id: 2,
            name: 'Jao',
            email: 'jao@gmail.com',
            cpf: '4323423434',
            birthDay: '1991-06-07',
            salary: 'R$ 6000,00',
        },
        {
            id: 3,
            name: 'Jao',
            email: 'jao@gmail.com',
            cpf: '4323423434',
            birthDay: '1991-06-07',
            salary: 'R$ 6000,00',
        },
        {
            id: 4,
            name: 'Jao',
            email: 'jao@gmail.com',
            cpf: '4323423434',
            birthDay: '1991-06-07',
            salary: 'R$ 6000,00',
        },
    ]

    return (
        <TableContainer>
            <Table size="md">
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
                    {users.map((user, index) => {
                        const { statesProps } = props
                        const userProps = { user, statesProps }
                        return <User key={index} userProps={userProps} />
                    })}
                </Tbody>
            </Table>
        </TableContainer>
    )
}
