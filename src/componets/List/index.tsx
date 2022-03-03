import { useEffect, useMemo, useState } from 'react'
import { api } from '../../services/api'

import { IListDataPokemon } from './types' 
import { Card } from '../Card/index'
import { Container, Grid, Title, Pagination } from './styles'

export const List = () => {
  const [listDataPokemon, setListDataPokemon] = useState<IListDataPokemon>()
  const [url, setUrl] = useState('pokemon?limit=50')
  const baseUrl = 'https://pokeapi.co/api/v2/'

  useEffect(() => {
    api.get(url).then(response => setListDataPokemon(response.data))
    window.scrollTo(0, 0)
  }, [url])

  return (
    <Container>
      <Title>Pokedex</Title> 
      <Grid>
        {
          listDataPokemon?.results.map((item) => (
            <Card key={item.name} name={item.name} />
          ))
        }
      </Grid>
      <Pagination>
        <button onClick={()=> {setUrl(`${listDataPokemon?.previous.replace(baseUrl, '')}`)}}>Anterior</button>
        <button onClick={()=> {setUrl(`${listDataPokemon?.next.replace(baseUrl, '')}`)}}>Proximo</button>
      </Pagination>
    </Container>
  )
}