import { Pokemon } from "@/interfaces";
import { pokeApi } from "@/services";

export const getPokemonInfo = async (nameOrId: string) => {

    try {
        const { data } = await pokeApi.get<Pokemon>(`/pokemon/${nameOrId}`);

    // No envia toda la data
    return  {
        id: data.id,
        name: data.name,
        sprites: data.sprites
    }
        
    } catch (error) {
        return null;
    }

    

    
}

