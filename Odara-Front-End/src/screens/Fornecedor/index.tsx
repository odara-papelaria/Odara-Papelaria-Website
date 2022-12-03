import React, { useState } from 'react';
import { ButtonMenuLateral } from '../../components/ButtonMenuLateral';
import Modal from 'react-modal';

import { fornecedor } from '../../api/listas';

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
    ViewHorizontalForm,
    ButtonClosed,
    ListaVendas,
    HeaderList,
    TitleList,
    TitleForm
} from './styles';

import { CardFornecedor } from '../../components/CardFornecedor';

interface Fornecedor {
    fornecedor: string;
    regiao: string;
    telefone: string;
    email: string;
}

// eslint-disable-next-line @typescript-eslint/no-redeclare
export function Fornecedor() {
    const [nomeFornecedor, setNomeFornecedor] = useState<string>("");
    const [regiaoFornecedor, setRegiaoFornecedor] = useState<string>("");
    const [telefoneFornecedor, setTelefoneFornecedor] = useState<string>("");
    const [emailFornecedor, setEmailFornecedor] = useState<string>("");
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

    function CadastrarFornecedor() {
        if (nomeFornecedor !== "" && regiaoFornecedor !== "" && telefoneFornecedor !== "" && emailFornecedor !== "") {
            fornecedor.push({
            fornecedor: nomeFornecedor,
            regiao: regiaoFornecedor,
            telefone: telefoneFornecedor,
            email: emailFornecedor,
        });
        closeModal();
        }else {
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
                            <TextFuncao>Seus Fornecedores</TextFuncao>
                            <TextFuncaoDescription>Cadastre novos fornecedores em minutos.</TextFuncaoDescription>
                            <ButtonModal onClick={openModal}>Cadastrar</ButtonModal>
                        </ViewTextFunc>
                        <ImageFuncao />
                    </CardFuncao>

                    <ListaVendas>
                        <HeaderList>
                            <TitleList>Fornec.</TitleList>
                            <TitleList>Região</TitleList>
                            <TitleList>Telefone</TitleList>
                            <TitleList>E-mail</TitleList>
                            <TitleList style={{ width: 40 }}></TitleList>
                            <TitleList style={{ width: 40 }}></TitleList>
                        </HeaderList>
                        {
                            fornecedor.map((results: Fornecedor) => (
                                <CardFornecedor fornecedor={results.fornecedor} regiao={results.regiao} telefone={results.telefone} email={results.email} />
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

                    <ContainerForm style={{ 'backgroundColor': 'var(--pink)' }}>
                        <ButtonClosed onClick={closeModal} />
                        <Form>
                            <TitleForm>Cadastrar Fornecedor</TitleForm>
                            <ViewInput>
                                <LabelInputForm>Fornecedor</LabelInputForm>
                                <InputForm
                                    type={'text'}
                                    onChange={event => setNomeFornecedor(event.target.value)}
                                />
                            </ViewInput>
                            <ViewHorizontalForm>
                                <ViewInput style={{ width: "48%" }}>
                                    <LabelInputForm>Região</LabelInputForm>
                                    <InputForm
                                        type={'text'}
                                        onChange={event => setRegiaoFornecedor(event.target.value)}
                                    />
                                </ViewInput>
                                <ViewInput style={{ width: "48%" }}>
                                    <LabelInputForm>Telefone</LabelInputForm>
                                    <InputForm
                                        type={'text'}
                                        onChange={event => setTelefoneFornecedor(event.target.value)}
                                    />
                                </ViewInput>
                            </ViewHorizontalForm>
                            <ViewInput>
                                <LabelInputForm>E-mail</LabelInputForm>
                                <InputForm
                                    type={'text'}
                                    onChange={event => setEmailFornecedor(event.target.value)}
                                />
                            </ViewInput>
                        </Form>

                        <ButtonModal onClick={CadastrarFornecedor}>Cadastrar</ButtonModal>
                    </ContainerForm>

                </Modal>
            </div>
        </Container>
    );
}