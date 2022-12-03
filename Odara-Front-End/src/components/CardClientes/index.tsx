import React from 'react';

import {
  Container,
  Text,
  ButtonEdit,
  ButtonDelete,
} from './styles';

interface Props{
    nome: string;
    telefone: string;
    email: string
}

export function CardClientes({nome, telefone, email}: Props){
  return (
    <Container>
        <Text>{nome}</Text>
        <Text>{telefone}</Text>
        <Text>{email}</Text>
        <ButtonEdit/>
        <ButtonDelete/>
    </Container>
  );
}