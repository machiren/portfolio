import { EmailIcon } from '@chakra-ui/icons';
import { Box, Text, Center, Button } from '@chakra-ui/react';
import Head from 'next/head';
import Layout from '../components/Layout';
import { FaFacebook, FaTwitter, FaGithub } from 'react-icons/fa';
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
          <LikeJs />
          <Box minH={["160px", "240px", "320px", "360px"]}>
            <Center>
              <Text>Portfolio</Text>
            </Center>
            <Center>
              <Button leftIcon={<FaGithub />}>view GitHub</Button>
            </Center>
          </Box>
        </section>
        <section>
          <FrameWorks />
          <Box minH={["160px", "240px", "320px", "360px"]}>
            <Center>
              <Text>Skills</Text>
            </Center>
            <Center>
              <Button>view Resume</Button>
            </Center>
          </Box>
        </section>
        <section>
          <Box minH={["160px", "240px", "320px", "360px"]}>
            <Text>Works</Text>
          </Box>
        </section>
        <section>
          <Box minH={["160px", "240px", "320px", "360px"]}>
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
