import React, { useEffect, useState } from 'react'
import { Layout } from '@/components/layouts'
import { Card, Container, Grid, Image, Text } from '@nextui-org/react'
import { NoFavorites } from '@/components/ui'
import { localFavorites } from '@/utils'

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
                    <Grid.Container gap={2} direction="row" justify='flex-start'>
                        {
                            favoritePokemon.map((item, index) => (
                                <Grid key={index} xs={4} sm={3} md={2} xl={1}>
                                    <Card isHoverable isPressable css={{ padding: 10 }}>
                                        <Card.Image
                                            src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${item}.svg`}
                                            width={"100%"}
                                            height={140}
                                        />
                                    </Card>
                                </Grid>
                            ))
                        }

                    </Grid.Container>

            }

        </Layout>

    )
}

export default FavoritesPage