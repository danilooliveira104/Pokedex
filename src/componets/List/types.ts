export type IListDataPokemon = {
  next: string 
  previous: string
  results: [ 
    {
      name: string,
      url: string
    }
  ]
}