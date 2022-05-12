import React, { useState } from "react";
import { Codigo, Container, ConteudoCodigo, ConteudoNome, ConteudoSvg, Nome } from "./styles";

import Bulbasaur from '../../assets/pokemons/Bulbasaur.svg';
import { PokemonDTO } from "../../dtos/PokemonDTO";
import retornaSvg from "../../utils/retornaSvg";

interface SmallCardProps {
    pokemon: PokemonDTO
}

function SmallCard({ pokemon }: SmallCardProps) {
    console.log(pokemon);
    return (
        <Container type={pokemon.types[0].name}>
            <ConteudoCodigo>
                <Codigo type={pokemon.types[0].name}>{pokemon.code}</Codigo>
            </ConteudoCodigo>
            <ConteudoSvg>
                {
                    retornaSvg(pokemon.name)
                }
            </ConteudoSvg>
            <ConteudoNome type={pokemon.types[0].name}>
                <Nome>{pokemon.name}</Nome>
            </ConteudoNome>
        </Container>
    )
}

export default SmallCard;