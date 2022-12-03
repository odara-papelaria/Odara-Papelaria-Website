import React, { useEffect, useState } from 'react';
import { ButtonMenuLateral } from '../../components/ButtonMenuLateral';
import Modal from 'react-modal';

import { conta } from '../../api/listas';

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
    CardValores,
    CardValor,
    TextValorDescription,
    TextValor,
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

import { CardContas } from '../../components/CardContas';

interface Divida {
    descricao: string;
    valor: number;
    dataVencimento: string;
    status: string;
}

// eslint-disable-next-line @typescript-eslint/no-redeclare
export function Contas() {
    const [totalContas, setTotalContas] = useState(0);

    const [descricaoContas, setDescricaoContas] = useState<string>("");
    const [valorConta, setValorConta] = useState<number>(0);
    const [dataVencimentoConta, setDataVencimentoConta] = useState<string>("26/09/2022");
    const [status, setStatus] = useState<string>("Pendente");

    const customStyles = {
        content: {
            top: '50%',
            left: '50%',
            right: 'auto',
            bottom: 'auto',
            marginRight: '-50%',
            transform: 'translate(-50%, -50%)',
        },
    };

    const [modalIsOpen2, setIsOpen2] = React.useState(false);

    function openModal() {
        setIsOpen2(true);
    }

    function closeModal() {
        setIsOpen2(false);
    }

    function CadastrarVenda() {
        if (descricaoContas !== "" && valorConta !== 0 && dataVencimentoConta !== "") {
            conta.push({
            descricao: descricaoContas,
            valor: valorConta,
            dataVencimento: dataVencimentoConta,
            status: status,
        });
        closeModal();
        }else {
            window.alert("Por favor preencha todos os campos e tente novamente.");
        }
        
    }

    function CalculoTotalDespesas() {
        const totalVendido = conta.map(item => item.valor).reduce((prev, curr) => prev + curr, 0);
        setTotalContas(totalVendido)
    }

    useEffect(() => {
        CalculoTotalDespesas();
    },[])

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
                            <TextFuncao>Suas Contas</TextFuncao>
                            <TextFuncaoDescription>Cadastre novas contas em minutos.</TextFuncaoDescription>
                            <ButtonModal onClick={openModal}>Cadastrar</ButtonModal>
                        </ViewTextFunc>
                        <ImageFuncao />
                    </CardFuncao>

                    <CardValores>
                        <CardValor>
                            <TextValorDescription>Valor total das contas: </TextValorDescription>
                            <TextValor style={{ color: 'red' }}>{totalContas.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})}</TextValor>
                        </CardValor>
                    </CardValores>

                    <ListaVendas>
                        <HeaderList>
                            <TitleList>Descrição</TitleList>
                            <TitleList>Valor</TitleList>
                            <TitleList>Venc.</TitleList>
                            <TitleList>Status</TitleList>
                            <TitleList style={{ width: 40 }}></TitleList>
                            <TitleList style={{ width: 40 }}></TitleList>
                        </HeaderList>
                        {
                            conta.map((results: Divida) => (
                                <CardContas descricao={results.descricao} valor={results.valor} dataVencimento={results.dataVencimento} status={results.status} />
                            ))
                        }
                    </ListaVendas>
                </ContentPrincipal>
            </Content>

            <div>
                <Modal
                    isOpen={modalIsOpen2}
                    onRequestClose={closeModal}
                    style={customStyles}
                    contentLabel="Example Modal2"
                >

                    <ContainerForm style={{ 'backgroundColor': 'var(--red)' }}>
                        <ButtonClosed onClick={closeModal} />
                        <Form>
                            <TitleForm>Cadastrar Conta</TitleForm>
                            <ViewInput>
                                <LabelInputForm>Descrição</LabelInputForm>
                                <InputForm
                                    type={'text'}
                                    onChange={event => setDescricaoContas(event.target.value)}
                                />
                            </ViewInput>
                            <ViewHorizontalForm>
                                <ViewInput style={{ width: "48%" }}>
                                    <LabelInputForm>Valor</LabelInputForm>
                                    <InputForm
                                        type={'number'}
                                        onChange={event => setValorConta(parseFloat(event.target.value))}
                                    />
                                </ViewInput>
                                <ViewInput style={{ width: "48%" }}>
                                    <LabelInputForm>Data Vencimento</LabelInputForm>
                                    <InputForm
                                        type={'date'}
                                        onChange={event => setDataVencimentoConta(event.target.value)}
                                    />
                                </ViewInput>
                            </ViewHorizontalForm>
                            <ViewInput>
                                <LabelInputForm>Status</LabelInputForm>
                                <InputForm
                                    type={'text'}
                                    onChange={event => setStatus(event.target.value)}
                                />
                            </ViewInput>
                        </Form>

                        <ButtonModal onClick={CadastrarVenda}>Cadastrar</ButtonModal>
                    </ContainerForm>

                </Modal>
            </div>
        </Container>
    );
}