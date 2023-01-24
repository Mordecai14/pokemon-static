import React, { useEffect, useState } from 'react'
import { Layout } from '@/components/layouts'

import { NoFavorites } from '@/components/ui'
import { localFavorites } from '@/utils'
import { FavoritesPokemons } from '@/components/pokemon'

const FavoritesPage = () => {
    const [favoritePokemon, setFavoritePokemon] = useState<number[]>([])

    useEffect(() => {
        setFavoritePokemon(localFavorites.pokemons())
    }, [])

    return (
        <Layout title='Favoritos'>
            {
                favoritePokemon.length === 0 ?
                    <NoFavorites />
                    :
                    <FavoritesPokemons pokemons={favoritePokemon} />

            }

        </Layout>

    )
}

export default FavoritesPage