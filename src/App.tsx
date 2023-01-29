import React, { useState, useEffect } from 'react'
import UserForm from './components/UserForm'
import UsersList from './components/UsersList'
import { UserApi } from './hooks/userApi'
import styled from 'styled-components'

export type TUserProps = {
    userProps: {
        user: TUser
        statesProps: TStateProps
    }
}

export type TUser = {
    id: number | undefined
    name: string
    email: string
    cpf: string
    birthDay: string
    salary: string
}

export type TStateProps = {
    id: number | undefined
    setId: React.Dispatch<React.SetStateAction<any>>
    name: string
    setName: React.Dispatch<React.SetStateAction<string>>
    email: string
    setEmail: React.Dispatch<React.SetStateAction<string>>
    cpf: string
    setCpf: React.Dispatch<React.SetStateAction<string>>
    birthDay: string
    setBirthDay: React.Dispatch<React.SetStateAction<string>>
    salary: string
    setSalary: React.Dispatch<React.SetStateAction<string>>
    usersList: TUser[]
    setUsersList: React.Dispatch<React.SetStateAction<TUser[]>>
}

function App() {
    const [id, setId] = useState(undefined)
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [cpf, setCpf] = useState('')
    const [birthDay, setBirthDay] = useState(null)
    const [salary, setSalary] = useState('')
    const [usersList, setUsersList] = useState([
        {
            id: 1,
            name: 'Jao',
            email: 'jao@gmail.com',
            cpf: '4323423434',
            birthDay: '1991-06-07',
            salary: 'R$ 6000,00',
        },
        {
            id: 2,
            name: 'Jao',
            email: 'jao@gmail.com',
            cpf: '4323423434',
            birthDay: '1991-06-07',
            salary: 'R$ 6000,00',
        },
        {
            id: 3,
            name: 'Jao',
            email: 'jao@gmail.com',
            cpf: '4323423434',
            birthDay: '1991-06-07',
            salary: 'R$ 6000,00',
        },
        {
            id: 4,
            name: 'Jao',
            email: 'jao@gmail.com',
            cpf: '4323423434',
            birthDay: '1991-06-07',
            salary: 'R$ 6000,00',
        },
    ])

    const api = new UserApi()

    useEffect(() => {
        const getUsersList = async () => {
            const response = await api.getUsersList()
            return response.data
        }
        getUsersList()
            .then((list) => setUsersList(list))
            .catch((error) => console.error(error.message))
    }, [])

    const statesProps = {
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
    }

    return (
        <MainContainer>
            <UserForm statesProps={statesProps} />
            <UsersList statesProps={statesProps} />
        </MainContainer>
    )
}

export default App

const MainContainer = styled.div`
    background-color: #0e3c62;
    color: #fefefe;
`
