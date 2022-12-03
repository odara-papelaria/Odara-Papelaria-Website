import React from 'react';

import { Link } from 'react-router-dom';

import {
    Container,
    TextButton,
    Content
} from './styles';


interface Props {
    title: string;
    destino: string;
    width: string;
}

export function Button({ title, destino, width }: Props) {
    return (
        <Link to={destino} style={{ "textDecoration": "none" }}>
            <Content>
                <Container style={{ "width": width }}>
                    <TextButton>{title}</TextButton>
                </Container>
            </Content>

        </Link>

    );
}