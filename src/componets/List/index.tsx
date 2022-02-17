import { useEffect, useMemo, useState } from 'react'
import { api } from '../../services/api'

import { IListDataPokemon } from './types' 
import { Card } from '../Card/index'
import { Container, Grid, Title } from './styles'

export const List = () => {
  const [listDataPokemon, setListDataPokemon] = useState<IListDataPokemon>()
  
  function createListPokemon(url: string) {
    api.get(url).then(response => setListDataPokemon(response.data))
    window.scrollTo(0, 0)
  }

  useEffect(() => {
    createListPokemon('pokemon?limit=50')
  }, [])

  return (
    <Container>
      <Title>Pokedex</Title> 
      <Grid>
      {console.log(listDataPokemon)}
        {
          listDataPokemon?.results.map((item) => (
            <Card name={item.name} />
          ))
        }
      </Grid>
      <button onClick={()=> {createListPokemon(`${listDataPokemon?.next.replace('https://pokeapi.co/api/v2/', '')}`)}}>Proximo</button>
      <button onClick={()=> {createListPokemon(`${listDataPokemon?.previous.replace('https://pokeapi.co/api/v2/', '')}`)}}>Anterior</button>
    </Container>
  )
}