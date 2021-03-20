import React from 'react'
import PokemonCard from './PokemonCard'
import { Card } from 'semantic-ui-react'

const PokemonCollection = ({ pokemons }) => {
    const renderedPokemon = pokemons.map(p => {
      return <PokemonCard key={p.id} pokemon={p} />
    });
    return (
      <Card.Group itemsPerRow={6}>
        {renderedPokemon}
      </Card.Group>
    )
}

export default PokemonCollection
