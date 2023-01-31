import React, { FormEvent } from 'react'
import { Button } from '@chakra-ui/button'
import { FormControl, FormLabel } from '@chakra-ui/react'
import { Input } from '@chakra-ui/input'
import { Heading, VStack } from '@chakra-ui/react'
import Header from './Header'
import { UserApi } from '../hooks/userApi'
import { TStateProps } from '../App'
import styled from 'styled-components'

type TUserListProps = {
    statesProps: TStateProps
}

export default function UserForm(props: TUserListProps) {
    const { statesProps } = props
    const {
        id,
        setId,
        name,
        setName,
        email,
        setEmail,
        cpf,
        setCpf,
        birthDay,
        setBirthDay,
        salary,
        setSalary,
        usersList,
        setUsersList,
    } = statesProps

    const api = new UserApi()

    async function handleSubmitForm(event: FormEvent) {
        event.preventDefault()
        if (id !== undefined) {
            await api
                .updateUser(id)
                .then((response) => setUsersList(response.data))
                .catch(() => console.error('Erro ao atualizar dado'))
        } else {
            await api
                .createUser({ name, email, cpf, birthDay, salary })
                .then((response) => {
                    const listWithAddedUser = [...usersList, response.data]
                    setUsersList(listWithAddedUser)
                })
                .catch(() => console.error('Erro ao criar usuário'))
        }
    }

    function cleanForm() {
        setId(undefined)
        setName('')
        setEmail('')
        setCpf('')
        setBirthDay('mm/dd/yyyy')
        setSalary('')
    }

    return (
        <VStack
            as="form"
            mx="auto"
            w={{ base: '90%', md: 500 }}
            justifyContent="center"
            h="75vh"
            onSubmit={handleSubmitForm}
            spacing="3"
        >
            <Heading>
                <Header />
            </Heading>
            <FormControl>
                <FormLabel>Nome</FormLabel>
                <Input
                    name="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
            </FormControl>
            <FormControl>
                <FormLabel>E-mail</FormLabel>
                <Input
                    name="E-mail"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
            </FormControl>
            <FormControl>
                <FormLabel>CPF</FormLabel>
                <Input
                    name="cpf"
                    type="number"
                    value={cpf}
                    onChange={(e) => setCpf(e.target.value)}
                />
            </FormControl>
            <FormControl>
                <FormLabel>Data de nascimento</FormLabel>
                <Input
                    name="birthDay"
                    type="date"
                    value={birthDay}
                    onChange={(e) => setBirthDay(e.target.value)}
                    color="#fefefe"
                />
            </FormControl>
            <FormControl>
                <FormLabel>Salário</FormLabel>
                <Input
                    name="salary"
                    type="string"
                    value={salary}
                    onChange={(e) => setSalary(e.target.value)}
                />
            </FormControl>
            <ButtonContainer>
                <Button
                    onClick={(e) => handleSubmitForm(e)}
                    bg="#6ee2fa"
                    color="#020e27"
                    type="submit"
                    variant="outline"
                    colorScheme="teal"
                >
                    {id !== undefined ? 'Atualizar' : 'Salvar'}
                </Button>
                <Button
                    bg="#6ee2fa"
                    color="#020e27"
                    onClick={cleanForm}
                    variant="outline"
                    colorScheme="teal"
                >
                    Limpar
                </Button>
            </ButtonContainer>
        </VStack>
    )
}

const ButtonContainer = styled.div`
    display: flex;
    flex-direction: row;
    gap: 20px;
`
