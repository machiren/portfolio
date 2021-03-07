import { Box, Heading, Flex, useColorMode, Button, Text, Center } from '@chakra-ui/react';

export default function Layout({ children }) {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <>
      <Heading as="header">
        <Box borderBottom="1px solid #ebebeb" >
          <Flex height="72px" px="16px" align="center" justify="space-between">
            <Box p="2">
                <Heading size="lg">
                  <Text>Match</Text>
                </Heading>
            </Box>
            <Box>
              <Flex>
                <Button size="sm" mr="16px" onClick={toggleColorMode}>
                  {colorMode === "light" ? "🌞" : "🌛"}
                </Button>
              </Flex>
            </Box>
          </Flex>
        </Box>
      </Heading>
      <Box>
        {children}
      </Box>
      <footer>
        <Box backgroundColor="#F9FAFF" pt="40px" pb="40px">
          <Center>
            <Text color="#93a5b1" fontSize="0.75rem">Copyright (C) Match Dev All Rights Reserved.</Text>
          </Center>
          <Center>
            <Text color="#93a5b1" fontSize="0.75rem"><a href="https://storyset.com/web">Illustration by Freepik Storyset</a></Text>
          </Center>
        </Box>
      </footer>
    </>
  )
}