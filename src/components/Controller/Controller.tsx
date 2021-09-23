import React from "react";
import Container from "../Container/Container";

const Controller: React.FC = (): React.ReactElement => {
  return (
    <>
      <Container type="year"></Container>
      <Container type="month"></Container>
    </>
  );
};

export default Controller;
