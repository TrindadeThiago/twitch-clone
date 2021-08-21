import React from 'react';

import Header from '../../components/Header';

import { Wrapper, Container, Heading } from './styles';


const ComingSoon: React.FC = () => {
  return (
    <Wrapper>
      <Header />

      <Container>
        <Heading>Coming soon...</Heading>
      </Container>
    </Wrapper>
  );
};

export default ComingSoon;
