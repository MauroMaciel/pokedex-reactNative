import React from 'react';
import { StyleSheet } from 'react-native';
import { ThemeProvider } from 'styled-components';
import { Container, Texto } from './styles';
import theme from './src/styles/theme'

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <Container>
        <Texto>
          Open up App.js to start working on your app!
        </Texto>
      </Container>
    </ThemeProvider>
  );
}