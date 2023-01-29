import React, { FormEvent, useState } from 'react'
import { Button } from '@chakra-ui/button'
import { FormControl, FormLabel } from '@chakra-ui/react'
import { Input } from '@chakra-ui/input'
import { Heading, VStack } from '@chakra-ui/react'
import Header from './components/Header'
import UsersList from './components/UsersList'
import { UserApi } from './hooks/userApi'

function App() {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [cpf, setCpf] = useState('')
    const [birthDay, setBirthDay] = useState('')
    const [salary, setSalary] = useState('')

    const api = new UserApi()

    async function submit(event: FormEvent) {
        event.preventDefault()
    }

    return (
        <>
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
                <Button type="submit" variant="outline" colorScheme="teal">
                    Salvar
                </Button>
            </VStack>
            <UsersList />
        </>
    )
}

export default App
