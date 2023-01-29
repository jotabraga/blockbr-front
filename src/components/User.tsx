import React from 'react'
import { Tr, Td } from '@chakra-ui/react'
import { EditIcon, DeleteIcon } from '@chakra-ui/icons'
import { IconButton } from '@chakra-ui/react'

type TUserProps = {
    name: string
    email: string
    cpf: string
    birthDay: string
    salary: string
}

export default function User(props: TUserProps) {
    const { name, email, cpf, birthDay, salary } = props
    return (
        <Tr>
            <Td>{name}</Td>
            <Td>{email}</Td>
            <Td>{cpf}</Td>
            <Td>{birthDay}</Td>
            <Td>{salary}</Td>
            <Td>
                <IconButton aria-label="atualizar" icon={<EditIcon />} />
            </Td>
            <Td>
                <IconButton aria-label="deletar" icon={<DeleteIcon />} />
            </Td>
        </Tr>
    )
}
