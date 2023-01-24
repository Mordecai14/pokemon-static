import { Pokemon } from "@/interfaces";
import { pokeApi } from "@/services";

export const getPokemonInfo = async (nameorId: string) => {

    const { data } = await pokeApi.get<Pokemon>(`/pokemon/${nameorId}`);

    // No envia toda la data
    return  {
        id: data.id,
        name: data.name,
        sprites: data.sprites
    }

    
}

