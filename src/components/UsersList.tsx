import React from 'react'
import { Table, Thead, TableContainer, Tr, Th, Tbody } from '@chakra-ui/react'
import User from './User'
import { TStateProps } from '../App'
type TUserListProps = {
    statesProps: TStateProps
}

const userFields = [
    'Nome',
    'E-mail',
    'CPF',
    'Data de nascimento',
    'Salário',
    'Atualizar',
    'Deletar',
]

export default function UsersList(props: TUserListProps) {
    const {
        statesProps: { usersList },
    } = props

    return (
        <TableContainer w="80vw" display="flex" margin="auto">
            <Table size="md">
                <Thead>
                    <Tr>
                        {userFields.map((field, index) => {
                            return (
                                <Th key={index} color="#fefefe">
                                    {field}
                                </Th>
                            )
                        })}
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
