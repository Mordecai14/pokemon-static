import { FC } from "react";
import { SmallPokemon } from "@/interfaces/pokemon-list";
import { Card, Grid, Row, Text } from '@nextui-org/react'
import { useRouter } from "next/router";
import Link from "next/link";

interface Props {
    pokemon: SmallPokemon;
}


export const PokemonCard: FC<Props> = ({ pokemon }) => {
    const router = useRouter();



    return (
        <Grid xs={6} sm={3} md={2} xl={1} key={pokemon.id}>
            <Card isHoverable isPressable>
                <Link href={`/pokemon/${pokemon.id}`}>
                    <Card.Body css={{ p: 5 }}>
                        <Card.Image
                            src={pokemon.img}
                            width="100%"
                            height={140}
                        />
                    </Card.Body>
                    <Card.Footer css={{ bgBlur: "#9d00ff05", borderTop: "0.5px solid #78787854" }}>
                        <Row justify='space-around'>
                            <Text transform='capitalize'>{pokemon.name}</Text>
                            <Text>#{pokemon.id}</Text>
                        </Row>
                    </Card.Footer>
                </Link>
            </Card>
        </Grid>

    )
}
