import React, { useState, useEffect } from 'react'
import PokemonCollection from './PokemonCollection'
import PokemonForm from './PokemonForm'
import Search from './Search'
import { Container } from 'semantic-ui-react';
import axios from 'axios';

const PokemonPage = () => {
  const [pokemonList, setPokemonList] = useState([]);
  const [pokemonShow, setPokemonShow] = useState(pokemonList);
  const [search, setSearch] = useState('');


  const getPokemon = async () => {
    const res = await axios.get('http://localhost:3000/pokemon');
    setPokemonList(res.data);
    setPokemonShow(res.data);
  };

  const onPokemonCreate = async obj => {
    await axios.post('http://localhost:3000/pokemon', obj);
    getPokemon();
  };

  useEffect(() => {
    getPokemon();
  }, []);

  useEffect(() => {
    if (search.length) {
      const timerId = setTimeout(() => {
        const filteredPokemon = pokemonList.filter(p => {
            return p.name.toLowerCase().includes(search.toLowerCase());
          });
        setPokemonShow(filteredPokemon);
      }, 500);

      return () => {
        clearTimeout(timerId);
      }
    } else {
      setPokemonShow(pokemonList);
    }
  }, [search]);

  return (
    <Container>
      <h1>Pokemon Searcher</h1>
      <br />
      <PokemonForm onPokemonCreate={onPokemonCreate} />
      <br />
      <Search search={search} setSearch={setSearch} />
      <br />
      <PokemonCollection
        pokemons={pokemonShow}
      />
    </Container>
  )
}

export default PokemonPage
