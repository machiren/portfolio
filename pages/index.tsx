import { EmailIcon } from '@chakra-ui/icons';
import { Box, Text, Center, Button } from '@chakra-ui/react';
import { Container } from "@chakra-ui/react"
import { Flex, Spacer } from "@chakra-ui/react"
import { FaFacebook, FaTwitter, FaGithub } from 'react-icons/fa';
import Head from 'next/head';
import Layout from '../components/Layout';
import LikeJs from '../public/assets/js-like.svg';
import FrameWorks from '../public/assets/frameworks.svg';

const Home = () => {
  return (
    <>
      <Head>
        <title>Match App</title>
        <link rel="icon" href="/favicon.png" />
      </Head>
      <Layout>
        <section>
          <Container maxW="container.lg">
            <Flex flexWrap="wrap">
              <Box>
                <Text fontSize="5xl" as="i">Web Engineer Programmer</Text>
              </Box>
              <LikeJs />
            </Flex>
            <Box>
                <Center>
                  <Text>Portfolio</Text>
                </Center>
                <Center>
                  <Button leftIcon={<FaGithub />}>view GitHub</Button>
                </Center>
              </Box>
          </Container>
        </section>
        <section>
          <Container maxW="container.lg">
            <Flex flexWrap="wrap">
              <FrameWorks />
              <Box>
                <Text fontSize="5xl" as="i">Web Engineer Programmer</Text>
              </Box>
            </Flex>
            <Box>
              <Center>
                <Text>Skills</Text>
              </Center>
              <Center>
                <Button>view Resume</Button>
              </Center>
            </Box>
          </Container>
        </section>
        <section>
          <Box>
            <Text>Works</Text>
          </Box>
        </section>
        <section>
          <Box>
            <Center>
              <Text>Contact</Text>
            </Center>
            <Center>
              <Button leftIcon={<EmailIcon />}>Email</Button>
              <Button leftIcon={<FaFacebook />} colorScheme="twitter">Twitter</Button>
              <Button leftIcon={<FaTwitter />} colorScheme="linkedin">LinkedIn</Button>
            </Center>
          </Box>
        </section>
      </Layout>
    </>
  )
}

export default Home
