export interface IPokemonApiItem {
  name: string
  url: string
}

export interface IPokemonItem extends IPokemonApiItem {
  id: number
  avatar_uri: string
}

export interface IPokemon {
  name: string
  avatar_uri: string
  abilities: {
    ability: { name: string }
    is_hidden: boolean
    slot: number
  }[]
  base_experience: number
  height: number
  weight: number
}
