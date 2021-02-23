import { Box, Flex, Text } from '@chakra-ui/react';
import Head from 'next/head';
import Layout from '../components/Layout';

const Home = () => {
  return (
    <>
      <Head>
        <title>Match App</title>
        <link rel="icon" href="/favicon.png" />
      </Head>
      <Layout>
        <section>
          <Box minH={["160px", "240px", "320px", "360px"]}>
            <Text>マッチのポートフォリオ</Text>
          </Box>
        </section>
        <section>
          <Box minH={["160px", "240px", "320px", "360px"]}>
            <Text>Skills</Text>
          </Box>
        </section>
        <section>
          <Box minH={["160px", "240px", "320px", "360px"]}>
            <Text>Works</Text>
          </Box>
        </section>
        <section>
          <Box minH={["160px", "240px", "320px", "360px"]}>
            <Text>Contact</Text>
          </Box>
        </section>
      </Layout>
    </>
  )
}

export default Home
