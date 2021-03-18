import { EmailIcon } from '@chakra-ui/icons';
import { Box, Text, Center, Button } from '@chakra-ui/react';
import { Container } from "@chakra-ui/react"
import { Flex } from "@chakra-ui/react"
import { FaTwitter, FaGithub, FaLinkedin } from 'react-icons/fa';
import { BiBook } from 'react-icons/bi';
import Head from 'next/head';
import Layout from '../components/Layout';
import LikeJs from '../public/assets/js-like.svg';
import FrameWorks from '../public/assets/frameworks.svg';
import PortfolioCard from '../components/PortfolioCard';

const Home = () => {
  const myGitHubUrl = 'https://github.com/machiren';
  const myResumeUrl = 'https://www.resume.id/machiren';
  const myTwitterUrl = 'https://twitter.com/machiren111';
  const myLinkedInUrl = 'https://www.linkedin.com/in/%E9%80%A3-%E7%94%BA%E7%94%B0-05a75518b/';
  const myMailAddress = 'mailto:machiren111@gmail.com?subject=件名&amp;body="こちらに本文を入力ください';
  return (
    <>
      <Head>
        <title>Match App</title>
        <link rel="icon" href="/favicon.png" />
      </Head>
      <Layout>
        <section>
          <Container maxW="container.lg" minH="300px" mt="2rem" p="2rem">
            <Flex flexWrap="wrap" justifyContent="space-around">
              <Flex flexDirection="column" justifyContent="center" alignItems="center">
                <Center>
                  <Text fontSize="2xl" as="samp">Hello World</Text>
                </Center>
                <Center>
                  <Text fontSize="4xl" as="i">Web Engineer</Text>
                </Center>
                <Box mt="1rem">
                  <Center>
                    <a href={myGitHubUrl} target="_blank">
                      <Button textDecor="underline" leftIcon={<FaGithub />}>view on GitHub</Button>
                    </a>
                  </Center>
                </Box>
              </Flex>
              <Box w="100%" maxW="500px">
                <LikeJs />
              </Box>
            </Flex>
          </Container>
        </section>
        <section>
          <Container maxW="container.lg" mt="2rem" minH="300px" p="2rem">
            <Flex flexWrap="wrap" justifyContent="center">
              <Text fontSize="5xl" as="i">Portfolio</Text>
            </Flex>
            <Flex flexWrap="wrap" justifyContent="center" flexDirection={['column', 'column', 'column', 'row']} alignItems="center">
              <Box w="100%" maxW="240px" mt="2rem" borderWidth="1px" borderRadius="lg" overflow="hidden">
                <PortfolioCard title="OSS有志を募るWebサービス" />
              </Box>
              <Box w="100%" maxW="240px" mt="2rem" borderWidth="1px" borderRadius="lg" overflow="hidden" ml={['0px', '0px', '0px', '2rem']}>
                <PortfolioCard title="ボイスシェアプラットフォーム" />
              </Box>
              <Box w="100%" maxW="240px" mt="2rem" borderWidth="1px" borderRadius="lg" overflow="hidden" ml={['0px', '0px', '0px', '2rem']}>
                <PortfolioCard />
              </Box>
            </Flex>
          </Container>
        </section>
        <section>
          <Container maxW="container.lg" mt="2rem" minH="300px" p="2rem">
            <Flex flexWrap="wrap" justifyContent="space-around" flexDirection="row-reverse">
              <Flex flexDirection="column" justifyContent="center" alignItems="center">
                <Text fontSize="5xl" as="i">Tech stack</Text>
                <Box mt="1rem">
                  <Center>
                    <a href={myResumeUrl} target="_blank">
                      <Button textDecor="underline" leftIcon={<BiBook />}>view on Resume</Button>
                    </a>
                  </Center>
                </Box>
              </Flex>
              <Box w="100%" maxW="500px">
                <FrameWorks />
              </Box>
            </Flex>
          </Container>
        </section>
        <section>
          <Container maxW="container.lg" mt="2rem" mb="2rem" minH="300px" p="2rem">
            <Flex flexWrap="wrap" justifyContent="center" mb="2rem">
              <Text fontSize="5xl" as="i">Contact</Text>
            </Flex>
            <Flex mt="2.5rem" flexWrap="wrap" flexDirection={['column', 'column', 'row', 'row']} justifyContent="center" alignItems="center">
              <a href={myMailAddress} target="_blank">
                <Button minW="120px" maxW="150px" textDecor="underline" mt="1rem" leftIcon={<EmailIcon />}>Email</Button>
              </a>
              <a href={myTwitterUrl} target="_blank">
                <Button minW="120px" maxW="150px" mt="1rem" ml={['0px', '0px', '2rem', '2rem']} textDecor="underline" leftIcon={<FaTwitter />} colorScheme="twitter">Twitter</Button>
              </a>
              <a href={myLinkedInUrl} target="_blank">
                <Button minW="120px" maxW="150px" mt="1rem" ml={['0px', '0px', '2rem', '2rem']} textDecor="underline" leftIcon={<FaLinkedin />} colorScheme="linkedin">LinkedIn</Button>
              </a>
            </Flex>
          </Container>
        </section>
      </Layout>
    </>
  )
}

export default Home
