export type ICard  = {
  name: string
} 

export type IListPokemonDetails = {
  id: number,
  name: string,
  types: [
    ITypes 
  ]
  sprites: ISprites
}

type ITypes = {
    type: {
      name: string
    }
}

type ISprites = {
  other: {
    dream_world: {
      front_default: string
    }
  }
}