import React, { useState } from 'react';
import { ButtonMenuLateral } from '../../components/ButtonMenuLateral';
import Modal from 'react-modal';

import { cliente } from '../../api/listas';

import {
    Container,
    MenuLateral,
    ContentPrincipal,
    Content,
    LogoSite,
    Desctiption,
    CardFuncao,
    ViewTextFunc,
    TextFuncao,
    TextFuncaoDescription,
    ImageFuncao,
    ButtonModal,
    ContainerForm,
    Form,
    LabelInputForm,
    InputForm,
    ViewInput,
    ButtonClosed,
    ListaVendas,
    HeaderList,
    TitleList,
    TitleForm
} from './styles';

import { CardClientes } from '../../components/CardClientes';

interface Clientes {
    nome: string;
    telefone: string;
    email: string;
}

// eslint-disable-next-line @typescript-eslint/no-redeclare
export function Clientes() {
    const [nomeCliente, setNomeCliente] = useState<string>("");
    const [telefoneCliente, setTelefoneCliente] = useState<string>("");
    const [emailCliente, setEmailCliente] = useState<string>("");

    const [modalIsOpen2, setIsOpen2] = React.useState(false);

    const customStyles2 = {
        content: {
            top: '50%',
            left: '50%',
            right: 'auto',
            bottom: 'auto',
            marginRight: '-50%',
            transform: 'translate(-50%, -50%)',
        },
    };

    function openModal() {
        setIsOpen2(true);
    }

    function closeModal() {
        setIsOpen2(false);
    }

    function CadastrarCliente() {
        if (nomeCliente !== "" && telefoneCliente !== "" && emailCliente !== "") {
            cliente.push({
                nome: nomeCliente,
                telefone: telefoneCliente,
                email: emailCliente,
            });
            closeModal();
        } else {
            window.alert("Por favor preencha todos os campos e tente novamente.");
        }

    }

    return (
        <Container>
            <Content>
                <MenuLateral>
                    <LogoSite />
                    <Desctiption>Administração</Desctiption>
                    <ButtonMenuLateral />
                </MenuLateral>

                <ContentPrincipal>
                    <CardFuncao>
                        <ViewTextFunc>
                            <TextFuncao>Seus Clientes</TextFuncao>
                            <TextFuncaoDescription>Cadastre novos clientes em minutos.</TextFuncaoDescription>
                            <ButtonModal onClick={openModal}>Cadastrar</ButtonModal>
                        </ViewTextFunc>
                        <ImageFuncao />
                    </CardFuncao>

                    <ListaVendas>
                        <HeaderList>
                            <TitleList>Clientes</TitleList>
                            <TitleList>Telefone</TitleList>
                            <TitleList>E-mail</TitleList>
                            <TitleList style={{ width: 40 }}></TitleList>
                            <TitleList style={{ width: 40 }}></TitleList>
                        </HeaderList>
                        {
                            cliente.map((results: Clientes) => (
                                <CardClientes nome={results.nome} telefone={results.telefone} email={results.email} />
                            ))
                        }
                    </ListaVendas>
                </ContentPrincipal>
            </Content>

            <div>
                <Modal
                    isOpen={modalIsOpen2}
                    onRequestClose={closeModal}
                    style={customStyles2}
                    contentLabel="Example Modal2"
                >

                    <ContainerForm style={{ 'backgroundColor': 'var(--blue)' }}>
                        <ButtonClosed onClick={closeModal} />
                        <Form>
                            <TitleForm>Cadastrar Cliente</TitleForm>
                            <ViewInput>
                                <LabelInputForm>Nome</LabelInputForm>
                                <InputForm
                                    type={'text'}
                                    onChange={event => setNomeCliente(event.target.value)}
                                />
                            </ViewInput>


                            <ViewInput>
                                <LabelInputForm>Telefone</LabelInputForm>
                                <InputForm
                                    type={'text'}
                                    onChange={event => setTelefoneCliente(event.target.value)}
                                />
                            </ViewInput>

                            <ViewInput>
                                <LabelInputForm>E-mail</LabelInputForm>
                                <InputForm
                                    type={'text'}
                                    onChange={event => setEmailCliente(event.target.value)}
                                />
                            </ViewInput>
                        </Form>

                        <ButtonModal onClick={CadastrarCliente}>Cadastrar</ButtonModal>
                    </ContainerForm>

                </Modal>
            </div>
        </Container>
    );
}