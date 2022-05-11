import React from "react";
import { BotaoOrdenacao, Container, ConteudoTitulo, Header, Titulo } from "./styles";

function Home(){
    return (
        <Container>
            <Header>
                <ConteudoTitulo>
                    <></>
                    <Titulo>Pokemon</Titulo>
                </ConteudoTitulo>
                <BotaoOrdenacao>
                    <></>
                </BotaoOrdenacao>
            </Header>
        </Container>
    );
}

export default Home;