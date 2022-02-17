import { IPokemon } from 'src/interfaces/pokemon'
import { localApi } from './api'
import { pokemonService } from './pokemon'

interface IFavorite {
  id: number
  userId: number
  pokemons: number[]
}

class FavoriteService {
  public async findAllByUserId(userId: number): Promise<IPokemon[]> {
    const res = await localApi.get<IFavorite[]>(`favorites?userId=${userId}`)

    const promises = res[0].pokemons.map(id => pokemonService.findOne(id))

    const favorites = await Promise.all(promises)

    return favorites
  }
}

export const favoriteService = new FavoriteService()
