import React from 'react';

import { Link } from 'react-router-dom';

import {
    View,
    Container,
    TextButton,
    Content,
    Icone3,
    Icone5,
    Icone6,
    Icone4,
    Icone2,
    Icone1
} from './styles';


export function ButtonMenuLateral() {
    return (
        <View> 
        <Link to="/Principal" style={{ "textDecoration": "none" }}>
            <Content>
                <Container style={{ "width": "90%" }}>
                    <Icone1/>
                    <TextButton>Principal</TextButton>
                </Container>
            </Content>

        </Link>

        <Link to="/Fornecedor" style={{ "textDecoration": "none" }}>
            <Content>
                <Container style={{ "width": "90%" }}>
                    <Icone2/>
                    <TextButton>Fornecedor</TextButton>
                </Container>
            </Content>

        </Link>

        <Link to="/Estoque" style={{ "textDecoration": "none" }}>
            <Content>
                <Container style={{ "width": "90%" }}>
                    <Icone3/>
                    <TextButton>Estoque</TextButton>
                </Container>
            </Content>

        </Link>

        <Link to="/Vendas" style={{ "textDecoration": "none" }}>
            <Content>
                <Container style={{ "width": "90%" }}>
                    <Icone4/>
                    <TextButton>Vendas</TextButton>
                </Container>
            </Content>
        </Link>

        <Link to="/Clientes" style={{ "textDecoration": "none" }}>
            <Content>
                <Container style={{ "width": "90%" }}>
                    <Icone5/>
                    <TextButton>Clientes</TextButton>
                </Container>
            </Content>

        </Link>

        <Link to="/Contas" style={{ "textDecoration": "none" }}>
            <Content>
                <Container style={{ "width": "90%" }}>
                    <Icone6/>
                    <TextButton>Contas</TextButton>
                </Container>
            </Content>

        </Link>
        </View>
       

    );
}