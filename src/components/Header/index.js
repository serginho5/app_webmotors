import React from 'react';
import { Container } from './styles';
import Logo from '../../assets/webmotors.svg';

const Header = () => (
  <Container>
    <img src={Logo} alt="logo" />
  </Container>
)

export default Header;
