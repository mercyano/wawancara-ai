import React from 'react';
import { Container, Box } from '@chakra-ui/react';
import Header from './components/Header';
import Footer from './components/Footer';

const App = () => {
  return (
    <Box bg='white' color='blackAlpha.900' height='100vh' paddingTop={70}>
      <Container maxW='50%' centerContent>
        <Header />
        <Footer />
      </Container>
    </Box>
  );
};

export default App;
