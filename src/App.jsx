import 'font-awesome/css/font-awesome.css'

import React from 'react'
import WebFont from 'webfontloader'
import { Container, Heading, VStack } from '@chakra-ui/react'

import ResumeContacts from './components/Contacts'
// import ResumeTimeline from './components/Timeline'

const App = () => {
  React.useEffect(() => {
    WebFont.load({
      custom: {
        families: ['Spoqa Han Sans'],
        urls: ['//spoqa.github.io/spoqa-han-sans/css/SpoqaHanSans-kr.css']
      }
    })
  }, [])

  return (
    <Container maxW='xl'>
      <VStack spacing={4} align={'start'}>
        <Heading>Junyoung Park</Heading>

        <VStack spacing='4'>
          <ResumeContacts />
        </VStack>
      </VStack>
    </Container>
  )
}

export default App
