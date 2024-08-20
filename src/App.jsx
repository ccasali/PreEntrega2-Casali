import { useState } from 'react'
import { ChakraProvider } from '@chakra-ui/react'

function App() {
  const [count, setCount] = useState(0)

  return (
    <ChakraProvider>
      
    </ChakraProvider>
  )
}

export default App
