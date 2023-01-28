import React, { useState } from 'react'

export const MainPage = () => {
    const [nome, setNome] = useState('')
    const [email, setEmail] = useState('')
    const [cpf, setCpf] = useState('')
    const [birthDay, setBirthDay] = useState(undefined)
    const [salary, setSalary] = useState('')

    return <div>MainPage</div>
}
