import { Box,  Badge, Image } from '@chakra-ui/react';

export default function PortfolioCard() {
  const comingSoonImgPath = '/assets/coming-soon.png';
  return (
    <Box>
      <Image src={comingSoonImgPath} alt='' />
      <Box p="6">
        <Box d="flex" alignItems="baseline">
          <Badge borderRadius="full" px="2" colorScheme="teal">Coming Soon</Badge>
        </Box>
        <Box
          mt="1"
          fontWeight="semibold"
          as="h4"
          lineHeight="tight"
          isTruncated
        >
          タイトル
        </Box>
      </Box>
    </Box>
  )
}