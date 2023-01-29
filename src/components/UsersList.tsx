import React from 'react'
import { Table, Thead, TableContainer, Tr, Th, Tbody } from '@chakra-ui/react'
import User from './User'
import { TStateProps } from '../App'
type TUserListProps = {
    statesProps: TStateProps
}

export default function UsersList(props: TUserListProps) {
    const {
        statesProps: { usersList },
    } = props

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
                    {usersList.map((user, index) => {
                        const { statesProps } = props
                        const userProps = { user, statesProps }
                        return <User key={index} userProps={userProps} />
                    })}
                </Tbody>
            </Table>
        </TableContainer>
    )
}
