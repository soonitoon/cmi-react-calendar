import React from 'react';
import Container from '../Container/Container';

const Controller: React.FC = (): React.ReactElement => {
  return (
    <>
      <Container type="YEAR"></Container>
      <Container type="MONTH"></Container>
    </>
  );
};

export default Controller;
