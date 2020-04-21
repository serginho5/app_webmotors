import React from 'react';
import GlobalStyle from './styles/global';
import Header from './components/Header';
import Tab from './components/Tab';
import Search from './components/Search';
import { Container, Content } from './styles/components';

const App = () => (
  <>
    <GlobalStyle />
    <Container>
      <Content>
        <Header />
        <Tab />
        <Search />
      </Content>
    </Container>
  </>
)

export default App;
