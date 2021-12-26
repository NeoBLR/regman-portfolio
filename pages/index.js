import { Center, Heading, Stack, Flex } from '@chakra-ui/react'
import { motion } from 'framer-motion'
import Head from 'next/head'
import Image from 'next/image'
import Layout from '../layout/layout'
import styles from '../sass/Home.module.sass'

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>Главная страница</title>
        <meta name='description' content='Generated by create next app' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <div className='main'>
        <Center h='100vh'>
          <Stack>
            <Heading
              className={styles.main__Heading}
              pt='3rem'
              color='gray.800'
              fontSize={styles.main__Heading}
              fontWeight='black'
              textShadow='white 1px 1px 0, white -1px -1px 0, 
                 white -1px 1px 0, white 1px -1px 0; '
              textTransform='uppercase'
              textAlign='center'
              data-scroll
              data-scroll-speed='-5'>
              Welcome to Index Page
            </Heading>
            <Heading
              className={styles.side__Heading}
              textAlign='center'
              fontWeight='thin'
              fontSize={styles.side__Heading}
              data-scroll
              data-scroll-speed='1'>
              Добро пожаловать на мой сайт!
            </Heading>
          </Stack>
        </Center>

        <Center h='100vh'>
          <Stack>
            <Heading data-scroll data-scroll-speed='2'>
              to Index Page
            </Heading>

            <Heading data-scroll data-scroll-speed='1'>
              Welcome to Index Page
            </Heading>
          </Stack>
        </Center>
      </div>

      <Center h='100vh'>
        <Stack>
          <Heading data-scroll data-scroll-speed='2'>
            Welcome to Index Page
          </Heading>

          <Heading data-scroll data-scroll-speed='1'>
            Welcome to Index Page
          </Heading>
        </Stack>
      </Center>
    </Layout>
  )
}
