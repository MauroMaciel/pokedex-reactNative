import styled from "styled-components/native";

export const Container = styled.View`
    width: 104px;
    height: 112px;

    border-radius: 8px;
    border-width: 1px;
    border-color: ${({theme}) => theme.grass};
`;

export const ConteudoCodigo = styled.View`
    width: 100%;
    align-items: flex-end;
    justify-content: center;
    padding: 4px 8px 0px 8px;
`;

export const Codigo = styled.Text`
    font-size: 8px;
    font-family: ${({theme}) => theme.fonts.REGULAR};
    color: ${({theme}) => theme.grass};
`;

export const ConteudoSvg = styled.View`
    align-items: center;
    justify-content: center;
`;

export const ConteudoNome = styled.View`
    width: 100%;
    align-items: center;
    justify-content: center;

    background-color: ${({theme}) => theme.grass};
    border-bottom-left-radius: 8px;
    border-bottom-right-radius: 8px;

    padding: 4px 8px;
`;

export const Nome = styled.Text`
    font-size: 10px;
    font-family: ${({theme}) => theme.fonts.REGULAR};
    color: ${({theme}) => theme.white};
`;