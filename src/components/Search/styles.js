import styled from 'styled-components';
import Local from '../../assets/localize.png';

export const Container = styled.div`
  background: #fff;
  margin: 0 24px;
  padding: 0 40px;
  padding-bottom: 8px;
`;

export const Check = styled.div`
    padding: 8px 0;
    display: flex;
    align-items: center;

input {
    margin-left: 15px;
    margin-right: 5px;
    margin-top: 0px;
}

label {
    color: #7c7b7b;
}
`;

export const Switch = styled.div`

`;

export const BoxGroup = styled.div`
    display: flex;

@media (max-width: 980px){
    flex-wrap: wrap;
}
`;

export const BoxGroup1 = styled.div`
    display: flex;
    margin-top: 10px;

@media (max-width: 980px){
    flex-wrap: wrap-reverse;
}
`;


export const GroupLocal = styled.div`
    width: 36%;
    position: relative;

&:after {
  content: url('${Local}');
  position: absolute;
  left: 5px;
  top: 5px;
}

&:before {
    content: 'Onde:';
    position: absolute;
    left: 31px;
    top: 9px;
    color: #7c7b7b;
    font-weight: 500;
    font-size: 15px;
}

select#local {
    width: 100%;
    height: 36px;
    padding-left: 77px;
    font-size: 15px;
    color: #474646;
    font-weight: 600;
}

@media (max-width: 980px){
  width: 49%;
  margin-right: 10px;
}

@media (max-width: 685px){
  width: 100%;
  margin-bottom: 10px;
  margin-right: 0px;
}
`;

export const GroupRaio = styled.div`
    width: 18%;
    position: relative;

select#raio {
    width: 100%;
    height: 36px;
    padding-left: 43px;
    font-size: 15px;
    color: #474646;
    font-weight: 600;
}

&:before {
    content: 'Raio:';
    position: absolute;
    left: 8px;
    top: 9px;
    color: #7c7b7b;
    font-weight: 500;
    font-size: 15px;
}

@media (max-width: 980px){
  width: 49%;
}

@media (max-width: 685px){
  width: 100%;
}
`;

export const GroupMarcas = styled.div`
    width: 28%;
    margin: 0 18px;
    position: relative;

select#marcas {
    width: 100%;
    height: 36px;
    padding-left: 60px;
    font-size: 15px;
    color: #474646;
    font-weight: 600;
}

&:before {
    content: 'Marca:';
    position: absolute;
    left: 8px;
    top: 9px;
    color: #7c7b7b;
    font-weight: 500;
    font-size: 15px;
}

@media (max-width: 980px){
  width: 49%;
  margin-right: 10px;
  margin-left: 0px;
  margin-top: 10px;
}

@media (max-width: 685px){
  width: 100%;
  margin-right: 0px;
}
`;

export const GroupModelos = styled.div`
    width: 28%;
    position: relative;

select#modelo {
    width: 100%;
    height: 36px;
    padding-left: 70px;
    font-size: 15px;
    color: #474646;
    font-weight: 600;
}

&:before {
    content: 'Modelo:';
    position: absolute;
    left: 8px;
    top: 9px;
    color: #7c7b7b;
    font-weight: 500;
    font-size: 15px;
}

@media (max-width: 980px){
  width: 49%;
  margin-top: 10px;
}

@media (max-width: 685px){
  width: 100%;
  margin-right: 0px;
}
`;

export const GroupAno = styled.div`
    width: 21%;
    position: relative;

select#ano {
    width: 100%;
    height: 36px;
    padding-left: 110px;
    font-size: 15px;
    color: #474646;
    font-weight: 600;
}

&:before {
    content: 'Ano Desejado:';
    position: absolute;
    left: 8px;
    top: 9px;
    color: #7c7b7b;
    font-weight: 500;
    font-size: 15px;
}

@media (max-width: 980px){
  width: 49%;
  margin-right: 10px;
  margin-left: 0px;
  margin-top: 10px;
}

@media (max-width: 685px){
  width: 100%;
  margin-right: 0px;
}
`;

export const GroupPreco = styled.div`
    width: 24%;
    position: relative;

select#preco {
    width: 100%;
    height: 36px;
    padding-left: 114px;
    font-size: 15px;
    color: #474646;
    font-weight: 600;
    margin-left: 15px;
}

&:before {
    content: 'Faixa de Preço:';
    position: absolute;
    left: 24px;
    top: 9px;
    color: #7c7b7b;
    font-weight: 500;
    font-size: 15px;
}

@media (max-width: 980px){
  width: 49%;
  margin-top: 10px;
  margin-left: 0px;
  margin-right: 0px;

select#preco {
  margin-left: 0px;
}

&:before {
  left: 9px;
}
}

@media (max-width: 685px){
  width: 100%;
  margin-right: 0px;
}
`;

export const GroupVersao = styled.div`
    width: 51%;
    position: relative;
    margin-left: 19px;

select#versao {
    width: 100%;
    height: 36px;
    padding-left: 62px;
    font-size: 15px;
    color: #474646;
    font-weight: 600;
    margin-left: 15px;
}

&:before {
    content: 'Versão:';
    position: absolute;
    left: 24px;
    top: 9px;
    color: #7c7b7b;
    font-weight: 500;
    font-size: 15px;
}

@media (max-width: 980px){
    width: 99%;
    margin-left: 0px;

select#versao {
  margin-left: 0px;
}

&:before {
    left: 8px;
}
}

@media (max-width: 685px){
  width: 100%;
}
`;

export const GroupButton = styled.div`
    display: flex;
    justify-content: space-between;
    margin: 10px 0;

@media (max-width: 685px){
  flex-direction: column;
}
`;

export const ButtonAvancada = styled.div`

button {
    padding: 10px 0px;
    padding-right: 50px;
    color: #f51344;
    font-weight: 600;
    border: 0;
    background: transparent;
    display: flex;

@media (max-width: 685px){
    display: flex;
    width: 100%;
    align-items: center;
    justify-content: center;
}
}
`;

export const ButtonOfertas = styled.div`

`;

export const Filtros = styled.button`
    padding: 10px 40px;
    margin-right: 11px;
    font-size: 16px;
    color: #474646;
    font-weight: 600;
    border: 0;
    background: transparent;

@media (max-width: 685px){
    display: flex;
    width: 100%;
    align-items: center;
    justify-content: center;
}
`;

export const Ofertas = styled.button`
    padding: 10px 40px;
    width: 250px;
    border: 1px solid #f51344;
    background: #f51344;
    color: #fff;
    font-weight: 600;
    font-size: 16px;

@media (max-width: 685px){
    display: flex;
    width: 100%;
    align-items: center;
    justify-content: center;
}
`;
