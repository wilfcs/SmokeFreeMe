import React from 'react'
import {
  Box,
  Container,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Text,
} from "@chakra-ui/react";
import Login from '../components/authentication/Login';
import Signup from '../components/authentication/Signup';
const Homepage = () => {
  return (
    <Container maxW="xl" centerContent>
    <Box
      display="flex"
      justifyContent="center"
      p={3}
      bg="white"
      w="100%"
      m="40px 0 15px 0"
      borderRadius="lg"
      borderWidth="1px"
    >
      <Text fontSize="4xl" fontFamily="Work sans">
          CHAT APP
        </Text>
    </Box>
    <Box bg="white" w="100%" p={4} borderRadius="lg"  borderWidth="1px">
    <Tabs variant='soft-rounded'>
  <TabList margin="10px">
    <Tab>Login</Tab>
    <Tab>Signup</Tab>
  </TabList>
  <TabPanels>
    <TabPanel>
     <Login/>
    </TabPanel>
    <TabPanel>
    <Signup/>
    </TabPanel>
  </TabPanels>
</Tabs>
      </Box>
    </Container>
  )
}

export default Homepage




