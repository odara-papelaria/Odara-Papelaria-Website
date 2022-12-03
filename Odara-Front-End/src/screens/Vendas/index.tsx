import React, { useEffect, useState } from 'react';
import { ButtonMenuLateral } from '../../components/ButtonMenuLateral';
import Modal from 'react-modal';

import { vendas } from '../../api/listas';

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

import { CardVenda } from '../../components/CardVenda';

interface Vendas {
    produto: string;
    quantidade: number;
    preco: number;
    data: string;
    valorTotal: number;
}

// eslint-disable-next-line @typescript-eslint/no-redeclare
export function Vendas() {
    const [totalVendas, setTotalVendas] = useState(0);

    const [produtoVenda, setProdutoVenda] = useState<string>("");
    const [quantidadeVenda, setQuantidadeVenda] = useState<number>(0);
    const [precoVenda, setPrecoVenda] = useState<number>(0);
    const [dataVenda, setDataVenda] = useState<string>("26/09/2022");

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
        if (produtoVenda !== "" && quantidadeVenda !== 0 && precoVenda !== 0 && dataVenda !== "") {
            vendas.push({
                produto: produtoVenda,
                quantidade: quantidadeVenda,
                preco: precoVenda,
                data: dataVenda,
                valorTotal: precoVenda * quantidadeVenda
            });
            CalculoTotalVendas();
            closeModal();
        } else {
            window.alert("Por favor preencha todos os campos e tente novamente.");
        }

    }

    function CalculoTotalVendas() {
        const totalVendido = vendas.map(item => item.preco).reduce((prev, curr) => prev + curr, 0);
        setTotalVendas(totalVendido)
    }

    useEffect(() => {
        CalculoTotalVendas();
    }, []);

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
                            <TextFuncao>Suas Vendas</TextFuncao>
                            <TextFuncaoDescription>Cadastre novas vendas em minutos.</TextFuncaoDescription>
                            <ButtonModal onClick={openModal}>Cadastrar</ButtonModal>
                        </ViewTextFunc>
                        <ImageFuncao />
                    </CardFuncao>

                    <CardValores>
                        <CardValor>
                            <TextValorDescription>Valor de vendas: </TextValorDescription>
                            <TextValor style={{ color: 'green' }}>{totalVendas.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })}</TextValor>
                        </CardValor>
                    </CardValores>

                    <ListaVendas>
                        <HeaderList>
                            <TitleList>Produto</TitleList>
                            <TitleList>Quant.</TitleList>
                            <TitleList>Valor</TitleList>
                            <TitleList>Data</TitleList>
                            <TitleList style={{ width: 40 }}></TitleList>
                            <TitleList style={{ width: 40 }}></TitleList>
                        </HeaderList>
                        {
                            vendas.map((results: Vendas) => (
                                <CardVenda produto={results.produto} quantidade={results.quantidade} preco={results.preco} data={results.data} />
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

                    <ContainerForm style={{ 'backgroundColor': 'var(--blueclaro)' }}>
                        <ButtonClosed onClick={closeModal} />
                        <Form>
                            <TitleForm>Cadastrar Venda</TitleForm>
                            <ViewInput>
                                <LabelInputForm>Produto</LabelInputForm>
                                <InputForm
                                    type={'text'}
                                    onChange={event => setProdutoVenda(event.target.value)}
                                />
                            </ViewInput>
                            <ViewHorizontalForm>
                                <ViewInput style={{ width: "48%" }}>
                                    <LabelInputForm>Valor</LabelInputForm>
                                    <InputForm
                                        type={'number'}
                                        onChange={event => setPrecoVenda(parseFloat(event.target.value))}
                                    />
                                </ViewInput>
                                <ViewInput style={{ width: "48%" }}>
                                    <LabelInputForm>Quantidade</LabelInputForm>
                                    <InputForm
                                        type={'number'}
                                        onChange={event => setQuantidadeVenda(parseFloat(event.target.value))}
                                    />
                                </ViewInput>
                            </ViewHorizontalForm>
                            <ViewInput>
                                <LabelInputForm>Data</LabelInputForm>
                                <InputForm
                                    type={'date'}
                                    onChange={event => setDataVenda(event.target.value)}
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