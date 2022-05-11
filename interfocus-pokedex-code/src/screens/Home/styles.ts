import styled from "styled-components/native";

export const Container = styled.View`
    flex: 1;
    background-color: ${({theme}) => theme.background};
`;

export const Header = styled.View`
    width: 100%;
    flex-direction: row;
    align-items: flex-start;
    justify-content: space-between;
`;

export const ConteudoTitulo = styled.View`
    flex-direction: row;
`;

export const Titulo = styled.Text`
    font-family: ${({theme}) => theme.fonts.BOLD};
    font-size: 24px;
    margin-left: 16px;
    color: ${({theme}) => theme.dark_gray};
`;

export const BotaoOrdenacao = styled.TouchableOpacity`
    align-items: center;
    justify-content: center;
`;
