import { Box,  Badge, Image } from '@chakra-ui/react';

type PortfolioStatus = 'comingSoon' | 'operation' | 'development';
interface PortfolioCardProps {
  title?: string,
  imgUrl?: string,
  status?: PortfolioStatus;
}

export default function PortfolioCard({title, imgUrl, status}: PortfolioCardProps) {
  const comingSoonImgPath = '/assets/coming-soon.png';
  return (
    <Box>
      <Image src={imgUrl || comingSoonImgPath} alt='' />
      <Box p="6">
        <Box d="flex" alignItems="baseline">
          <Badge borderRadius="full" px="2" colorScheme="teal">{status || 'COMING SOON'}</Badge>
        </Box>
        <Box
          mt="1"
          fontWeight="semibold"
          as="h4"
          lineHeight="tight"
          isTruncated
        >
          {title || '企画中'}
        </Box>
      </Box>
    </Box>
  )
}