import { useEffect, useMemo, useState } from 'react'
import { api } from '../../services/api'

import { IListDataPokemon } from './types' 
import { Card } from '../Card/index'
import { Container, Grid, Title } from './styles'

export const List = () => {
  const [listDataPokemon, setListDataPokemon] = useState<IListDataPokemon>()
  const [url, setUrl] = useState('pokemon?limit=50')

  useEffect(() => {
    api.get(url).then(response => setListDataPokemon(response.data))
    console.log(listDataPokemon)
    window.scrollTo(0, 0)
  }, [url])

  return (
    <Container>
      <Title>Pokedex</Title> 
      <Grid>
        {
          listDataPokemon?.results.map((item) => (
            <Card name={item.name} />
          ))
        }
      </Grid>
      <button onClick={()=> {setUrl(`${listDataPokemon?.next.replace('https://pokeapi.co/api/v2/', '')}`)}}>Proximo</button>
      <button onClick={()=> {setUrl(`${listDataPokemon?.previous.replace('https://pokeapi.co/api/v2/', '')}`)}}>Anterior</button>
    </Container>
  )
}