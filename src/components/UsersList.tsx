import React from 'react'
import {
    Table,
    Thead,
    TableContainer,
    Tr,
    Th,
    Tbody,
    color,
} from '@chakra-ui/react'
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
        <TableContainer w="80vw" display="flex" margin="auto">
            <Table size="md">
                <Thead>
                    <Tr>
                        <Th color="#fefefe">Nome</Th>
                        <Th color="#fefefe">E-mail</Th>
                        <Th color="#fefefe">CPF</Th>
                        <Th color="#fefefe">Data de nascimento</Th>
                        <Th color="#fefefe">Salário</Th>
                        <Th color="#fefefe">Atualizar</Th>
                        <Th color="#fefefe">Deletar</Th>
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
