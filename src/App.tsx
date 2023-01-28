import React, { useState } from 'react'
import { Button } from '@chakra-ui/button'
import { FormControl, FormLabel } from '@chakra-ui/react'
import { Input } from '@chakra-ui/input'
import { Heading, VStack } from '@chakra-ui/react'

function App() {
    return (
        <VStack
            as="form"
            mx="auto"
            w={{ base: '90%', md: 500 }}
            h="100vh"
            justifyContent="center"
        >
            <Heading>BlockBR</Heading>
        </VStack>
    )
}

export default App
