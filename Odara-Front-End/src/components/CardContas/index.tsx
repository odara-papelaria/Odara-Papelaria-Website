import React from 'react';

import {
  Container,
  Text,
  ButtonEdit,
  ButtonDelete,
} from './styles';

interface Props {
  descricao: string;
  valor: number;
  dataVencimento: string;
  status: string;
}

export function CardContas({ descricao, valor, dataVencimento, status }: Props) {
  return (
    <Container>
      <Text>{descricao}</Text>
      <Text>{valor.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })}</Text>
      <Text>{dataVencimento}</Text>
      <Text>{status}</Text>
      <ButtonEdit />
      <ButtonDelete />
    </Container>
  );
}