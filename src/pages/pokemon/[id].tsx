import { Layout } from "@/components/layouts";
import { GetStaticProps, GetStaticPaths, NextPage } from 'next';
import { pokeApi } from "@/services";
import { Pokemon } from "@/interfaces";
import { Button, Card, Container, Grid, Image, Text } from "@nextui-org/react";
import { localFavorites } from "@/utils";
import { useEffect, useState } from "react";
import confetti from "canvas-confetti";

interface Props {
    pokemon: Pokemon;
}

export const PokemonPage: NextPage<Props> = ({ pokemon }) => {
    const [isInfavorites, setIsInfavorites] = useState(false)

    const onToggleFavorite = () => {
        localFavorites.toggleFavorite(pokemon.id)
        setIsInfavorites(!isInfavorites)

        if (!isInfavorites) {
            confetti({
                zIndex: 999,
                particleCount: 100,
                spread: 160,
                angle: -100,
                origin: {
                    x: 0.5,
                    y: 0
                },
                shapes: ["star"]

            })
        }
    }

    useEffect(() => {
        setIsInfavorites(localFavorites.existInfavorites(pokemon.id))
    }, [pokemon.id])

    return (
        <Layout title={pokemon.name}>
            <Grid.Container css={{ marginTop: "5px" }} gap={2}>
                <Grid xs={12} sm={4}>
                    <Card isHoverable css={{ padding: "30px" }}>
                        <Card.Body>
                            <Card.Image
                                src={pokemon.sprites.other?.dream_world.front_default || "/no-image.png"}
                                alt={pokemon.name}
                                width="100%"
                                height={200}
                            />
                        </Card.Body>
                    </Card>
                </Grid>

                <Grid xs={12} sm={8}>
                    <Card>
                        <Card.Header css={{ display: "flex", justifyContent: "space-between" }}>
                            <Text h1 transform="capitalize">{pokemon.name}</Text>
                            <Button
                                shadow
                                color="gradient"
                                ghost={!isInfavorites}
                                onPress={onToggleFavorite}
                            >
                                {isInfavorites ? "En favoritos" : "Guardar en favoritos"}
                            </Button>
                        </Card.Header>

                        <Card.Body>
                            <Text size={30}>Sprites: </Text>
                            <Container direction="row" display="flex" gap={0}>
                                <Image
                                    src={pokemon.sprites.front_default}
                                    alt={pokemon.name}
                                    width={100}
                                    height={100}
                                />
                                <Image
                                    src={pokemon.sprites.back_default}
                                    alt={pokemon.name}
                                    width={100}
                                    height={100}
                                />
                                <Image
                                    src={pokemon.sprites.front_shiny}
                                    alt={pokemon.name}
                                    width={100}
                                    height={100}
                                />
                                <Image
                                    src={pokemon.sprites.back_shiny}
                                    alt={pokemon.name}
                                    width={100}
                                    height={100}
                                />
                            </Container>
                        </Card.Body>
                    </Card>
                </Grid>
            </Grid.Container>
        </Layout>
    )
}


export const getStaticPaths: GetStaticPaths = async (ctx) => {
    const pokemons151 = [...Array(151)].map((value, index) => `${index + 1}`);

    return {
        paths: pokemons151.map(id => ({
            params: { id }
        })),
        fallback: false
    }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
    const { id } = params as { id: string };

    const { data } = await pokeApi.get<Pokemon>(`/pokemon/${id}`);

    return {
        props: {
            pokemon: data
        }
    }
}

export default PokemonPage;