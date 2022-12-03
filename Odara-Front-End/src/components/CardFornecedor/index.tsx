import React from 'react';

import {
  Container,
  Text,
  ButtonEdit,
  ButtonDelete,
} from './styles';

interface Props{
    fornecedor: string;
    regiao: string;
    telefone: string;
    email: string
}

export function CardFornecedor({fornecedor, regiao, telefone, email}: Props){
  return (
    <Container>
        <Text>{fornecedor}</Text>
        <Text>{regiao}</Text>
        <Text>{telefone}</Text>
        <Text>{email}</Text>
        <ButtonEdit/>
        <ButtonDelete/>
    </Container>
  );
}