import React from 'react'
import { Tr, Td } from '@chakra-ui/react'
import { EditIcon, DeleteIcon } from '@chakra-ui/icons'
import { IconButton } from '@chakra-ui/react'
import { TUserProps } from '../App'

export default function User(props: TUserProps) {
    const {
        userProps: { user, statesProps },
    } = props
    const { name, email, cpf, birthDay, salary, id } = user
    const { setId, setName, setEmail, setCpf, setBirthDay, setSalary } =
        statesProps

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
                />
            </Td>
        </Tr>
    )
}
