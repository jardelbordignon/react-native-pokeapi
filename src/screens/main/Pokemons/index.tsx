import React, { useCallback, useEffect, useRef, useState } from 'react'
import {
  ActivityIndicator,
  FlatList,
  View,
  ViewabilityConfigCallbackPairs,
} from 'react-native'
// import { FlatList } from 'react-native-bidirectional-infinite-scroll'

import { pokemonService } from 'src/services/pokemon'
import { Pokemon, ITEM_HEIGHT } from './Pokemon'

import { IPokemonApiItem, IPokemonItem } from 'src/interfaces/pokemon'
import { ViewToken } from 'react-native'

// let renderCount = 0

export const PokemonsScreen = () => {
  // if (__DEV__) {
  //   renderCount += 1
  //   console.log(`PokemonsScreen renderCount: `, renderCount)
  // }
  const [pokemons, setPokemons] = useState<IPokemonItem[]>([])
  const [changedItems, setChangedItems] = useState<number[]>([])
  const [refreshing, setRefreshing] = useState(false)
  const [loading, setLoading] = useState(false)
  const [totalPages, setTotalPages] = useState(0)
  const [page, setPage] = useState(0)
  const limit = 5

  const flatListRef = useRef<FlatList>(null)

  const loadPokemons = async (): Promise<IPokemonItem[]> => {
    const offset = page * limit
    const paginationParams = `?offset=${offset}&limit=${limit}`

    const res = await pokemonService.findAll(paginationParams)

    const pokemons = res.results.map(
      (pokemon: IPokemonApiItem): IPokemonItem => {
        const id = pokemon.url.split('/')[6]
        return {
          ...pokemon,
          id: Number(id),
          imageUri: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/${id}.png`,
          thumbUri: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`,
        }
      }
    )

    setTotalPages(Math.ceil(res.count / limit))

    console.log(`page ${page} of ${totalPages}`)

    return pokemons
  }

  const loadPreviousPage = async (): Promise<void> => {
    if (refreshing || page <= 0) return

    // setPage(page - 1)
    setPage(0)
    setRefreshing(true)

    const loadedPokemons = await loadPokemons()

    // mantem os pokemons da próxima página e insere os da anterior
    // const nextPage = pokemons.slice(
    //   pokemons.length - limit * 2,
    //   pokemons.length - limit
    // )

    // setPokemons([...loadedPokemons, ...nextPage])
    setPokemons(loadedPokemons)

    setRefreshing(false)

    setTimeout(() => {
      console.log('items', pokemons.map(p => p.id).join(', '))
    })
  }

  const loadNextPage = async (): Promise<void> => {
    if (loading) return

    setPage(page + 1)
    setLoading(true)

    const loadedPokemons = await loadPokemons()

    if (page > 0) {
      // mantem os pokemons da pagina anterior e insere os da próxima
      // const previous = pokemons.slice(pokemons.length - limit)
      // setPokemons([...previous, ...loadedPokemons])
      setPokemons([...pokemons, ...loadedPokemons])
    } else {
      setPokemons(loadedPokemons)
    }

    setLoading(false)
  }

  const FooterList = useCallback(() => {
    if (!loading) return null
    return (
      <View>
        <ActivityIndicator />
      </View>
    )
  }, [])

  useEffect(() => {
    loadNextPage()
  }, [])

  const keyExtractor = ({ name }: { name: string }) => name
  const renderItem = useCallback(
    ({ item }) => (
      <Pokemon {...item} isVisible={changedItems.includes(item.id)} />
    ),
    []
  )

  const getItemLayout = useCallback(
    (data, index) => ({
      length: ITEM_HEIGHT,
      offset: ITEM_HEIGHT * index,
      index,
    }),
    []
  )

  interface IProps {
    changed: ViewToken[]
    viewableItems: ViewToken[]
  }

  // https://stackoverflow.com/questions/68054891/flatlist-itemvisiblepercentthreshold-doesnt-work-correctly
  const onViewableItemsChanged = ({ changed }: IProps) => {
    const currentChangedItems = changed.map(({ item }) => item.id)

    // TODO: resolver o armazenamento dos ids para servir como argumento para o renderItem e fazer o lazy na Image
    setChangedItems([...changedItems, ...currentChangedItems])
  }

  const viewabilityConfigCallbackPairs = useRef<ViewabilityConfigCallbackPairs>(
    [
      {
        viewabilityConfig: {
          minimumViewTime: 500,
          itemVisiblePercentThreshold: 75,
        },
        onViewableItemsChanged,
      },
    ]
  )

  return (
    <View>
      <FlatList
        ref={flatListRef}
        data={pokemons}
        keyExtractor={keyExtractor}
        renderItem={renderItem}
        // scroll to bottom of list
        onEndReached={loadNextPage}
        onEndReachedThreshold={0.1}
        ListFooterComponent={<FooterList />}
        // scroll to top of list
        // onMomentumScrollEnd={onScrollEnd}
        onRefresh={loadPreviousPage}
        refreshing={refreshing}
        // showsVerticalScrollIndicator={false}
        // maxToRenderPerBatch={7}
        getItemLayout={getItemLayout} // usar somente quando o item tem um tamanho fixo
        viewabilityConfigCallbackPairs={viewabilityConfigCallbackPairs.current}
        style={{
          paddingHorizontal: 20,
        }}
      />
    </View>
  )
}
