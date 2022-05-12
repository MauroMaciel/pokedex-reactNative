import React, { useEffect, useState } from "react";
import { BotaoOrdenacao, Container, ConteudoTitulo, Header, InputTexto, Titulo } from "./styles";

import Pokebola from '../../assets/icons/pokeball.svg';
import SortAsc from '../../assets/icons/sortasc.svg';
import SortDesc from '../../assets/icons/sortdesc.svg';
import SmallCard from "../../components/SmallCard";
import api from "../../services/api";
import { PokemonDTO } from "../../dtos/PokemonDTO";

function Home(){
    const [decrescente, setDecrescente] = useState<boolean>(false); //variavel e a funcao q vai alterar ele
    const [nomeFiltro, setNomeFiltro] = useState('');
    const [pokemons, setPokemons] = useState<PokemonDTO[]>([]);
    const [pokemonsFiltro, setPokemonsFiltro] = useState<PokemonDTO[]>([]);

    function alteraTipoFiltro(){
        setDecrescente(estadoAnterior => !estadoAnterior);
    }

    function alteraNomeFiltro(nome: string){
        setNomeFiltro(nome);
        const filtrados = pokemons.filter(p => p.name.toLowerCase().includes(nome.toLowerCase()));
        setPokemonsFiltro(filtrados);
        console.log(filtrados);
    }

    async function getPokemons() {
        try {
            const filtro = decrescente ? '?_sort=name&_order=desc' : '?_sort=name&_order=asc';
            const resposta = await api.get<PokemonDTO[]>(`/pokemons${filtro}`);

            if(resposta.data && resposta.data.length > 0){
                setPokemons(resposta.data);
                setPokemonsFiltro(resposta.data);
            }
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        getPokemons();
    }, [decrescente]);

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
                onChangeText={(texto) => alteraNomeFiltro(texto)}
            />

            <SmallCard></SmallCard>
        </Container>
    );
}

export default Home;