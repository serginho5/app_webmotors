import React from 'react';
import Car from '../../components/Car';
import Motocicle from '../../components/Motocicle';
import {
  Container, ContainerTab, Content,
  ContentImg, ContentText, ContainerButton
} from './styles';

const Tab = () => {
  return (
    <Container>
      <ContainerTab>
        <button>
          <Content>
            <ContentImg>
              <Car />
            </ContentImg>
            <ContentText>
              <p>COMPRAR</p>
              <h2>CARROS</h2>
            </ContentText>
          </Content>
        </button>
        <button>
          <Content>
            <ContentImg>
              <Motocicle />
            </ContentImg>
            <ContentText>
              <p>COMPRAR</p>
              <h2>MOTO</h2>
            </ContentText>
          </Content>
        </button>
      </ContainerTab>
      <ContainerButton>
        <button type="button">Vender meu carro</button>
      </ContainerButton>
    </Container>
  )
}

export default Tab;
