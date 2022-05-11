import React from "react";
import { BotaoOrdenacao, Container, ConteudoTitulo, Header, InputTexto, Titulo } from "./styles";

import Pokebola from '../../assets/icons/pokeball.svg';
import SortAsc from '../../assets/icons/sortasc.svg';
import SortDesc from '../../assets/icons/sortdesc.svg';

function Home(){
    return (
        <Container>
            <Header>
                <ConteudoTitulo>
                    <Pokebola width={24} height={24}/>
                    <Titulo>Pokemon</Titulo>
                </ConteudoTitulo>
                <BotaoOrdenacao
                    onPress={() => console.log('Pressionado')}>
                    <SortAsc/>
                </BotaoOrdenacao>
            </Header>
            <InputTexto
                placeholder="Procurar"
                
            />
        </Container>
    );
}

export default Home;