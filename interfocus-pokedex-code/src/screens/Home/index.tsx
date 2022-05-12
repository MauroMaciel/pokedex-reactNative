import React, { useEffect, useState } from "react";
import { BotaoOrdenacao, Container, ConteudoTitulo, Header, InputTexto, Titulo } from "./styles";

import Pokebola from '../../assets/icons/pokeball.svg';
import SortAsc from '../../assets/icons/sortasc.svg';
import SortDesc from '../../assets/icons/sortdesc.svg';
import SmallCard from "../../components/SmallCard";
import api from "../../services/api";

function Home(){
    const [decrescente, setDecrescente] = useState<boolean>(false); //variavel e a funcao q vai alterar ele

    function alteraTipoFiltro(){
        setDecrescente(estadoAnterior => !estadoAnterior);
    }

    async function getPokemons() {
        const resposta = await api.get('/pokemons');

        if(resposta.data){
            console.log(resposta.data);
        }
    }

    useEffect(() => {
        getPokemons();
    }, []);

    return (
        <Container>
            <Header>
                <ConteudoTitulo>
                    <Pokebola width={24} height={24}/>
                    <Titulo>Pokemon</Titulo>
                </ConteudoTitulo>
                <BotaoOrdenacao
                    onPress={() => alteraTipoFiltro()}>
                        {
                            decrescente ? <SortAsc/> : <SortDesc/>
                        }
                    
                </BotaoOrdenacao>
            </Header>
            <InputTexto
                placeholder="Procurar"                
            />

            <SmallCard></SmallCard>
        </Container>
    );
}

export default Home;