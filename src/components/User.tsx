import React from 'react'
import { Tr, Td } from '@chakra-ui/react'
import { EditIcon, DeleteIcon } from '@chakra-ui/icons'
import { IconButton } from '@chakra-ui/react'
import { TUserProps } from '../App'
import { UserApi } from '../hooks/userApi'

export default function User(props: TUserProps) {
    const {
        userProps: { user, statesProps },
    } = props
    const { name, email, cpf, birthDay, salary, id } = user
    const {
        setId,
        setName,
        setEmail,
        setCpf,
        setBirthDay,
        setSalary,
        setUsersList,
        usersList,
    } = statesProps
    const api = new UserApi()

    function updateEntry() {
        setId(id)
        setName(name)
        setEmail(email)
        setCpf(cpf)
        const [birthDayInDateFormat] = new Date(birthDay)
            .toISOString()
            .split('T')
        setBirthDay(birthDayInDateFormat)
        setSalary(salary)
    }

    function removeUser() {
        try {
            api.deleteUser(Number(id)).then(() => {
                const updatedListWithoutUser = usersList.filter(
                    (user) => user.id !== id
                )
                setUsersList(updatedListWithoutUser)
            })
        } catch (error) {
            console.trace(error)
        }
    }

    return (
        <Tr>
            <Td>{name}</Td>
            <Td>{email}</Td>
            <Td>{cpf}</Td>
            <Td>{birthDay}</Td>
            <Td>{salary}</Td>
            <Td>
                <IconButton
                    onClick={updateEntry}
                    aria-label="atualizar"
                    icon={<EditIcon />}
                    colorScheme="blue"
                />
            </Td>
            <Td>
                <IconButton
                    aria-label="deletar"
                    icon={<DeleteIcon />}
                    colorScheme="red"
                    onClick={removeUser}
                />
            </Td>
        </Tr>
    )
}
