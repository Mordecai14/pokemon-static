import React, { FC } from 'react'
import { Card, Grid } from '@nextui-org/react'
import Link from 'next/link';

interface Props {
    pokemonId: number;
}

export const FavoriteCardPokemon: FC<Props> = ({ pokemonId }) => {
    return (
        <Grid key={pokemonId} xs={4} sm={3} md={2} xl={1}>
            <Link href={`/pokemon/${pokemonId}`}>
                <Card isHoverable isPressable css={{ padding: 10 }}>
                    <Card.Image
                        src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${pokemonId}.svg`}
                        width={"100%"}
                        height={140}
                    />
                </Card>
            </Link>
        </Grid>
    )
}
