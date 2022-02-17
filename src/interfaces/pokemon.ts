export interface IPokemonApiItem {
  name: string
  url: string
}

export interface IPokemonItem extends IPokemonApiItem {
  id: number
  thumbUri: string
  imageUri: string
  isVisible?: boolean
}

export interface IPokemon {
  id: number
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
