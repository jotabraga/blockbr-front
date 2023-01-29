import React, { FormEvent } from 'react'
import { Button } from '@chakra-ui/button'
import { FormControl, FormLabel } from '@chakra-ui/react'
import { Input } from '@chakra-ui/input'
import { Heading, VStack } from '@chakra-ui/react'
import Header from './Header'

export default function UserForm(props: any) {
    const { statesProps } = props
    const {
        id,
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
    } = statesProps

    async function submit(event: FormEvent) {
        event.preventDefault()
    }

    async function handleSubmitForm(event: FormEvent) {
        event.preventDefault()
    }
    return (
        <VStack
            as="form"
            mx="auto"
            w={{ base: '90%', md: 500 }}
            justifyContent="center"
            h="75vh"
            onSubmit={submit}
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
                />
            </FormControl>
            <FormControl>
                <FormLabel>Salário</FormLabel>
                <Input
                    name="salary"
                    type="number"
                    value={salary}
                    onChange={(e) => setSalary(e.target.value)}
                />
            </FormControl>
            <Button
                onClick={(e) => handleSubmitForm(e)}
                type="submit"
                variant="outline"
                colorScheme="teal"
            >
                {id !== undefined ? 'Atualizar' : 'Salvar'}
            </Button>
        </VStack>
    )
}
