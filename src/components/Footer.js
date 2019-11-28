import React from 'react';
import { Container } from '@material-ui/core';
import styled from 'styled-components';

const FooterContainer = styled.div`
  background: black;
  width: 100%;
  padding: 50px;
`;

const FooterText = styled.p`
  color: white;
  text-align: center;
  margin: 0;
`;

function Footer() {
  return (
    <FooterContainer>
      <Container>
        <FooterText>Harvard Flight Centres Limited</FooterText>
        <FooterText>Aero 16, Redhill Aerodrome, Redhill, Surrey RH1 5JY</FooterText>
        <FooterText>01737 823001</FooterText>
        <FooterText>info@harvardflightcentres.com</FooterText>
      </Container>
    </FooterContainer>
  )
}

export default Footer;