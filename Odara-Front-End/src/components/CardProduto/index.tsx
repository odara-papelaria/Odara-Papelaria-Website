import React from 'react';

import {
  Container,
  Text,
  ButtonEdit,
  ButtonDelete,
} from './styles';

interface Props{
    produto: string;
    quantidade: number;
    preco: number;
    data: string
}

export function CardProduto({produto, quantidade, preco, data}: Props){
  return (
    <Container>
        <Text>{produto}</Text>
        <Text>{quantidade}</Text>
        <Text>{preco.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })}</Text>
        <Text>{data}</Text>
        <ButtonEdit/>
        <ButtonDelete/>
    </Container>
  );
}