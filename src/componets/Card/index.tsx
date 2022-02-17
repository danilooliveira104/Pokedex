import { useEffect, useState } from 'react'
import { api } from '../../services/api'
import type { ICard, IListPokemonDetails} from './type'

import { defineColor } from '../../utils/utils'

import { Container, Summary, Badge } from './styles'

export const Card = (props: ICard) => {

  const { name } = props

  const [listPokemonDetails, setListPokemonDetails] = useState<IListPokemonDetails>()

  useEffect(() => {
      api.get(`pokemon/${name}`).then(response => setListPokemonDetails(response.data))
  }, [])

  return (
    <Container color={defineColor(listPokemonDetails?.types[0].type.name)}>
      <Summary>
        <span>{listPokemonDetails?.name}</span>
        <Badge color={defineColor(listPokemonDetails?.types[0].type.name)}>{listPokemonDetails?.types[0].type.name}</Badge>
      </Summary>
      <img src={listPokemonDetails?.sprites.other.dream_world.front_default} />
    </Container>
  )
}