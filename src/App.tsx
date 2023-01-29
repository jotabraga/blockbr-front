import React, { useState, useEffect } from 'react'
import UserForm from './components/UserForm'
import UsersList from './components/UsersList'
import { UserApi } from './hooks/userApi'
import styled from 'styled-components'

function App() {
    const [id, setId] = useState(undefined)
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [cpf, setCpf] = useState('')
    const [birthDay, setBirthDay] = useState('')
    const [salary, setSalary] = useState('')
    const [usersList, setUsersList] = useState([])

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

    const componentsProps = {
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
            <UserForm componentsProps />
            <UsersList componentsProps />
        </MainContainer>
    )
}

export default App

const MainContainer = styled.div`
    background-color: #0e3c62;
    color: white;
`
