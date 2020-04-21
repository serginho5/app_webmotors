import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 0 25px;
    align-items: center;
    margin-top: -15px;

@media (max-width: 720px){
    flex-direction: column;
    flex-flow: column-reverse;
    margin-top: 10px;
    }
`;

export const ContainerTab = styled.div`
    display: flex;

button {
    border: 0;
    background: transparent;
    border-bottom: 2px solid #7c7b7b;
    padding-bottom: 10px;
    position: relative;
    color: #7c7b7b;

&:hover{
  border-bottom: 2px solid #f51344;
  color: #f51344;
}

&:focus{
  border-bottom: 2px solid #f51344;
  color: #f51344;
}

&:active{
  border-bottom: 2px solid #f51344;
  color: #f51344;
}
}
`;

export const Content = styled.div`
    display: flex;
    align-items: flex-end;
    padding: 0 10px;
`;

export const ContentImg = styled.div`
    display: flex;

img {
    width: 50px;
    margin-bottom: -4px;
}
`;

export const ContentText = styled.div`
    padding: 0 10px;
    display: flex;
    flex-direction: column;
    align-items: end;
    position: absolute;
    left: 71px;

p{
    color: #7c7b7b;
    font-size: 11px;
}
h2 {
    padding: 0;
    line-height: 0.9;
    font-size: 22px;
    color: inherit;
    padding-bottom: 2px;
}
`;

export const ContainerButton = styled.div`


button {
    padding: 10px 40px;
    border: 1px solid #f69d26;
    color: #f69d26;
    font-weight: 600;
    font-size: 16px;

&:hover {
  color: #fff;
  background: #f51344;
  border: 1px solid #f51344;
}
}
`;
