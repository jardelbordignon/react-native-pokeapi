import React from 'react'

import { Box, Txt } from 'src/components/base'

export const HomeScreen = () => (
  <Box bg="primary" p={10}>
    <Box bg="dark" btr={60} pt={40}>
      <Txt color="light">First Box</Txt>
    </Box>
    <Box bg="light" row h={60}>
      <Box bg="dark" px={1} />
      <Box bg="dark" bbrr={60} />
    </Box>
    <Box bg="dark" row h={60}>
      <Box bg="light" px={1} btlr={60} />
      <Box bg="light" />
    </Box>
    <Box bg="light" bbr={60} pb={40}>
      <Txt>Second Box</Txt>
    </Box>
  </Box>
)
