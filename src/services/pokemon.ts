import { pokeapi } from './api'

import { IPokemon } from 'src/interfaces/pokemon'
// import { IPokemonApiItem } from 'src/interfaces/pokemon'

class PokemonService {
  // public list(
  //   params: IPaginationParams
  // ): Promise<IPaginationResponse<ICampaign>> {
  //   return apiService.get('/campaigns', params)
  // }

  // IPokemonApiItem[]
  public findAll(): Promise<any> {
    return pokeapi.get('/?offset=0&limit=5')
  }

  public findOne(id: number): Promise<IPokemon> {
    return pokeapi.get(`/${id}`)
  }
}

export const pokemonService = new PokemonService()
