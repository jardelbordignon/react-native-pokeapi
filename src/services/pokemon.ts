import { pokeapi } from './api'

import { IPokemon, IPokemonApiItem } from 'src/interfaces/pokemon'
// import { IPokemonApiItem } from 'src/interfaces/pokemon'

interface IFindAllReturn {
  count: number
  next: string | null
  previous: string | null
  results: IPokemonApiItem[]
}

class PokemonService {
  // public list(
  //   params: IPaginationParams
  // ): Promise<IPaginationResponse<ICampaign>> {
  //   return apiService.get('/campaigns', params)
  // }

  // IPokemonApiItem[]
  public findAll(paginationParams?: string): Promise<IFindAllReturn> {
    return pokeapi.get(`${paginationParams}`)
  }

  public findAllByUserdId(paginationParams?: string): Promise<IFindAllReturn> {
    return pokeapi.get(`${paginationParams}`)
  }

  public findOne(id: number): Promise<IPokemon> {
    return pokeapi.get(`/${id}`)
  }
}

export const pokemonService = new PokemonService()
