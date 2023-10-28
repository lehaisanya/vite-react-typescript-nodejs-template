import { useEffect, useState } from 'react'
import { Box } from '@mantine/core'

export const App = () => {
  const [message, setMessage] = useState<string>('Loading...')

  useEffect(() => {
    const fetchMessage = async () => {
      const response = await fetch('/api', {
        method: 'GET',
      })

      const message = await response.text()

      setMessage(message)
    }

    fetchMessage()
  }, [])

  return <Box>{message}</Box>
}
