import { Center, Heading, Box } from '@chakra-ui/react'
import Layout from '../layout/layout.js'

export default function News() {
  return (
    <Layout>
      <div className='news'>
        <Box
          pt='3rem'
          w='100%'
          h='1rem'
          data-scroll
          data-scroll-sticky
          data-scroll-target='.news'>
          <Heading>Новости</Heading>
        </Box>
        <Center h='100vh' bg='red.400'>
          <Heading>News1</Heading>
        </Center>
        <Center h='100vh' bg='blue.400'>
          <Heading>News2</Heading>
        </Center>
      </div>
      <div className='coment'>
        <Box
          pt='3rem'
          w='100%'
          h='10rem'
          data-scroll
          data-scroll-sticky
          data-scroll-target='.coment'>
          <Heading>Коментарии</Heading>
        </Box>
        <Center h='100vh' bg='green.400'>
          <Heading>coment1</Heading>
        </Center>
        <Center h='100vh' bg='pink.400'>
          <Heading>coment2</Heading>
        </Center>
        <Center h='100vh' bg='purple.400'>
          <Heading>coment3</Heading>
        </Center>
      </div>
    </Layout>
  )
}
