import React, { FormEvent, useState } from 'react'
import { Button } from '@chakra-ui/button'
import { FormControl, FormLabel } from '@chakra-ui/react'
import { Input } from '@chakra-ui/input'
import { Heading, VStack } from '@chakra-ui/react'
import Header from './components/Header'
import Users from './components/Users'

function App() {
    const [nome, setNome] = useState('')
    const [email, setEmail] = useState('')
    const [cpf, setCpf] = useState('')
    const [birthDay, setBirthDay] = useState(undefined)
    const [salary, setSalary] = useState('')

    function saveData(e: FormEvent) {
        e.preventDefault()
    }

    return (
        <>
            <VStack
                as="form"
                mx="auto"
                w={{ base: '90%', md: 500 }}
                h="100vh"
                justifyContent="center"
                onSubmit={saveData}
            >
                <Heading>
                    <Header />
                </Heading>
                <FormControl>
                    <FormLabel>Nome</FormLabel>
                    <Input name="name" />
                </FormControl>
                <FormControl>
                    <FormLabel>E-mail</FormLabel>
                    <Input name="E-mail" type="email" />
                </FormControl>
                <FormControl>
                    <FormLabel>CPF</FormLabel>
                    <Input name="email" type="number" />
                </FormControl>
                <FormControl>
                    <FormLabel>Data de nascimento</FormLabel>
                    <Input name="birthDay" type="date" />
                </FormControl>
                <FormControl>
                    <FormLabel>Salário</FormLabel>
                    <Input name="salary" type="number" />
                </FormControl>
                <Button type="submit" variant="outline" colorScheme="teal">
                    Salvar
                </Button>
            </VStack>
            <Users />
        </>
    )
}

export default App
