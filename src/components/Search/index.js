import React, { useState, useEffect, useRef } from 'react';
import api from '../../services/api';
import apiModels from '../../services/apiModels';
import apiVersion from '../../services/apiVersion';
import { FaChevronRight } from 'react-icons/fa';
import {
  Container, Check, BoxGroup, GroupLocal,
  GroupRaio, GroupMarcas, GroupModelos, GroupAno, BoxGroup1, GroupPreco, GroupVersao,
  GroupButton, ButtonAvancada, ButtonOfertas, Filtros, Ofertas,
} from './styles';

const Search = () => {
  const [marcas, setMarcas] = useState([]);
  const [models, setModels] = useState([]);
  const [versions, setVersions] = useState([]);
  const [version, setVersion] = useState('');
  const [model, setModel] = useState('');

  useEffect(() => {
    async function loadMarcas() {
      const response = await api.get('/');
      setMarcas(response.data);
    }
    loadMarcas();
  }, [])

  const handleAddModels = function (e) {
    setModel(e.target.value);
    console.log(setModel);
  }

  useEffect(() => {
    async function loadModels() {
      const response = await apiModels.get(`Model?MakeID=${model}`);
      setModels(response.data);
      console.log(response.data);
    }
    loadModels();
  }, [model])

  const handleAddVersion = function (e) {
    setVersion(e.target.value);
    console.log(setVersion);

  }

  useEffect(() => {
    async function loadVersion() {
      const response = await apiVersion.get(`Version?ModelID=${version}`);
      setVersions(response.data);
      console.log(response.data);
    }
    loadVersion();
  }, [version])

  const selectRef = useRef(null);
  const selectRef1 = useRef(null);
  const selectRef2 = useRef(null);
  const selectRef3 = useRef(null);
  const selectRef4 = useRef(null);
  const selectRef5 = useRef(null);
  const selectRef6 = useRef(null);

  const handleClear = function (e) {
    selectRef.current.value = null;
    selectRef1.current.value = null;
    selectRef2.current.value = null;
    selectRef3.current.value = null;
    selectRef4.current.value = null;
    selectRef5.current.value = null;
    selectRef6.current.value = null;
  }

  return (
    <Container>
      <Check>
        <input type="checkbox" id="novos" /><label htmlFor="novos">Novos</label>
        <input type="checkbox" id="usados" /><label htmlFor="usados">Usados</label>
      </Check>
      <BoxGroup>
        <GroupLocal>
          <select name="local" id="local" ref={selectRef}>
            <option value={0} selected></option>
            <option value="São Paulo - SP" >São Paulo - SP</option>
            <option value={2} >Rio de Janeiro - RJ</option>
            <option value={3}>Minas Gerais - MG</option>
            <option value={4}>Parana - PR</option>
          </select>
        </GroupLocal>
        <GroupRaio>
          <select name="raio" id="raio" ref={selectRef1}>
            <option value="valor0" ></option>
            <option value="valor1" >100 km</option>
            <option value="valor2" >50 km</option>
            <option value="valor3">30 km</option>
            <option value="valor34">10km</option>
          </select>
        </GroupRaio>
        <GroupMarcas>
          <select name="marcas" id="marcas" onClick={handleAddModels} ref={selectRef2}>
            <option value={0} selected>Todas</option>
            {
              marcas.map((item) => (
                <option key={item.ID} value={item.ID}>{item.Name}</option>
              ))
            }
          </select>
        </GroupMarcas>
        <GroupModelos>
          <select name="modelo" id="modelo" onClick={handleAddVersion} ref={selectRef3}>
            <option value={0} selected>Todos</option>
            {
              models.map((model) => (
                <option key={model.ID} value={model.ID}>{model.Name}</option>
              ))
            }
          </select>
        </GroupModelos>
      </BoxGroup>

      <BoxGroup1>
        <GroupAno>
          <select name="ano" id="ano" ref={selectRef4}>
            <option value="valor0" selected></option>
            <option value="valor1" >2020</option>
            <option value="valor2" >2019</option>
            <option value="valor3">2018</option>
            <option value="valor34">2017</option>
          </select>
        </GroupAno>
        <GroupPreco>
          <select name="preco" id="preco" ref={selectRef5}>
            <option value="valor0" selected></option>
            <option value="valor1" >100.000</option>
            <option value="valor2" >90.000</option>
            <option value="valor3">70.000</option>
            <option value="valor34">50.000</option>
          </select>
        </GroupPreco>
        <GroupVersao>
          <select name="versao" id="versao" ref={selectRef6}>
            <option value={0} selected>Todas</option>
            {
              versions.map((ver) => (
                <option key={ver.ID} value={ver.ID}>{ver.Name}</option>
              ))
            }
          </select>
        </GroupVersao>
      </BoxGroup1>

      <GroupButton>
        <ButtonAvancada>
          <button><FaChevronRight />Busca Avançada</button>
        </ButtonAvancada>
        <ButtonOfertas>
          <Filtros onClick={handleClear}>Limpar filtros</Filtros>
          <Ofertas>VER OFERTAS</Ofertas>
        </ButtonOfertas>
      </GroupButton>

    </Container >

  )
}

export default Search;
