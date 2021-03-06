import React, { useEffect, useState } from "react";
import { BotaoOrdenacao, Container, ConteudoTitulo, Header, InputTexto, Titulo } from "./styles";

import Pokebola from '../../assets/icons/pokeball.svg';
import SortAsc from '../../assets/icons/sortasc.svg';
import SortDesc from '../../assets/icons/sortdesc.svg';
import SmallCard from "../../components/SmallCard";
import api from "../../services/api";
import { PokemonDTO } from "../../dtos/PokemonDTO";
import { FlatList, Keyboard, TouchableWithoutFeedback } from "react-native";
import { useNavigation } from "@react-navigation/native";

function Home() {
    const [decrescente, setDecrescente] = useState<boolean>(false); //variavel e a funcao q vai alterar ele
    const [nomeFiltro, setNomeFiltro] = useState('');
    const [pokemons, setPokemons] = useState<PokemonDTO[]>([]);
    const [pokemonsFiltro, setPokemonsFiltro] = useState<PokemonDTO[]>([]);

    const navigation = useNavigation();

    function navegarParaDetalhes(pokemon: PokemonDTO){
        navigation.navigate('Detalhes' as never, {
            pokemon
        } as never);
    }

    function alteraTipoFiltro() {
        setDecrescente(estadoAnterior => !estadoAnterior);
    }

    function alteraNomeFiltro(nome: string) {
        setNomeFiltro(nome);
        const filtrados = pokemons.filter(p => p.name.toLowerCase().includes(nome.toLowerCase()));
        setPokemonsFiltro(filtrados);
    }

    async function getPokemons() {
        try {
            const filtro = decrescente ? '?_sort=name&_order=desc' : '?_sort=name&_order=asc';
            const resposta = await api.get<PokemonDTO[]>(`/pokemons${filtro}`);

            if (resposta.data && resposta.data.length > 0) {
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
        <TouchableWithoutFeedback onPress={() => Keyboard.dismiss}>
            <Container>
                <Header>
                    <ConteudoTitulo>
                        <Pokebola width={24} height={24} />
                        <Titulo>Pokemon</Titulo>
                    </ConteudoTitulo>
                    <BotaoOrdenacao
                        onPress={() => alteraTipoFiltro()}>
                        {
                            decrescente ? <SortAsc /> : <SortDesc />
                        }

                    </BotaoOrdenacao>
                </Header>
                <InputTexto
                    placeholder="Procurar"
                    onChangeText={(texto) => alteraNomeFiltro(texto)}
                    value={nomeFiltro}
                />

                <FlatList
                    data={pokemonsFiltro}
                    keyExtractor={(item) => item.code.toString()}
                    numColumns={3}
                    contentContainerStyle={
                        {
                            alignItems: "center",
                            justifyContent: "center"
                        }
                    }
                    style={
                        {
                            width: '100%'
                        }
                    }
                    renderItem={({ item }) => (<SmallCard pokemon={item}
                    onPress={()=> navegarParaDetalhes(item)}></SmallCard>)}
                />
            </Container>
        </TouchableWithoutFeedback>

    );
}

export default Home;