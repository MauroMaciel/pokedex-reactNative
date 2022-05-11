import React, { useState } from "react";
import { Codigo, Container, ConteudoCodigo, ConteudoNome, ConteudoSvg, Nome } from "./styles";

import Bulbasaur from '../../assets/pokemons/Bulbasaur.svg';

function SmallCard(){
    return (
        <Container>
            <ConteudoCodigo>
                <Codigo>#001</Codigo>
            </ConteudoCodigo>
            <ConteudoSvg>
                <Bulbasaur width={72} height={72}/>
            </ConteudoSvg>
            <ConteudoNome>
                <Nome>Bulbasaur</Nome>
            </ConteudoNome>
        </Container>
    )
}

export default SmallCard;