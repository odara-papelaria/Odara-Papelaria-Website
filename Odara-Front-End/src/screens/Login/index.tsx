import React from 'react';
import { Button } from '../../components/Button';

import {
    Container,
    ContentLogin,
    LogoSite,
    TitleCampo,
    CampoLogin,
    CardView,

} from './styles';

export function Login() {
    return (
        <Container>
          
                <ContentLogin>
                    <LogoSite />

                    <CardView>
                        <TitleCampo>Usuário</TitleCampo>
                        <CampoLogin />
                    </CardView>

                    <CardView>
                        <TitleCampo>Senha</TitleCampo>
                        <CampoLogin />
                    </CardView>

                    <Button title='Entrar' destino='/principal' width='50%' />

                </ContentLogin>
           
        </Container>
    );
}