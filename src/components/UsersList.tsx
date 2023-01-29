import React from 'react'
import { Table, Thead, TableContainer, Tr, Th, Tbody } from '@chakra-ui/react'
import User from './User'

export default function UsersList() {
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
                        const { name, email, cpf, birthDay, salary } = user
                        return (
                            <User
                                key={index}
                                name={name}
                                email={email}
                                cpf={cpf}
                                birthDay={birthDay}
                                salary={salary}
                            />
                        )
                    })}
                </Tbody>
            </Table>
        </TableContainer>
    )
}
