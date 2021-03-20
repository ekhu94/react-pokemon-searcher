import React from 'react'
import { Card } from 'semantic-ui-react'

const PokemonCard = ({ pokemon }) => {
  return (
    <Card>
      <div>
        <div className="image">
          <img alt={pokemon.name} src={pokemon.sprites.front} />
        </div>
        <div className="content">
          <div className="header">{pokemon.name}</div>
        </div>
        <div className="extra content">
          <span>
            <i className="icon heartbeat red" />
            {pokemon.hp} hp
          </span>
        </div>
      </div>
    </Card>
  )
}

export default PokemonCard
