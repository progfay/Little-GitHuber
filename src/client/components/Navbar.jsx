import React from 'react'
import { Box, Fixed, Flex, Avatar, Text } from '@primer/components'

const Navbar = () => (
  <Box height={'64px'}>
    <Fixed width={'100vw'} top={0} left={0} bg='gray.9' color='white' zIndex={100} >
      <Flex alignItems={'center'}>
        <Avatar src={'/static/favicon.png'} m={3} size={32} />
        <Text color='white' fontWeight={600} letterSpacing={'0.2px'}> Little GitHuber </Text>
      </Flex>
    </Fixed>
  </Box>
)

export default Navbar
