import React, { useEffect, useState } from 'react';
import { ButtonMenuLateral } from '../../components/ButtonMenuLateral';
import Modal from 'react-modal';

import { vendas, produtos, conta } from '../../api/listas';

import {
    Container,
    MenuLateral,
    ContentPrincipal,
    Content,
    LogoSite,
    Desctiption,
    TextWelcome,
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
    Filtro,
    TextVendas,
    ViewFiltro,
    FiltroData,
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

export function Princicpal() {

    const [totalVendas, setTotalVendas] = useState(0);
    const [totalEstoque, setTotalEstoque] = useState(0);
    const [totalContas, setTotalContas] = useState(0);

    const [produtoVenda, setProdutoVenda] = useState<string>("");
    const [quantidadeVenda, setQuantidadeVenda] = useState<number>(0);
    const [precoVenda, setPrecoVenda] = useState<number>(0);
    const [dataVenda, setDataVenda] = useState<string>("26/09/2022");

    const [produtoCadastro, setProdutoCadastro] = useState<string>("");
    const [quantidadeCadastro, setQuantidadeCadastro] = useState<number>(0);
    const [precoCadastro, setPrecoCadastro] = useState<number>(0);
    const [dataCadastro, setDataCadastro] = useState<string>("26/09/2022");

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

    const [modalIsOpen, setIsOpen] = React.useState(false);
    const [modalIsOpen2, setIsOpen2] = React.useState(false);

    function openModal() {
        setIsOpen(true);
    }
    function openModal2() {
        setIsOpen2(true);
    }

    function closeModal() {
        setIsOpen(false);
    }

    function closeModal2() {
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

    function CadastrarProduto() {
        if (produtoCadastro !== "" && quantidadeCadastro !== 0 && precoCadastro !== 0 && dataCadastro !== "") {
            produtos.push({
                produto: produtoCadastro,
                quantidade: quantidadeCadastro,
                preco: precoCadastro,
                data: dataCadastro,
                valorTotal: quantidadeCadastro * precoCadastro
            });
            CalculoTotalEstoque();
            closeModal2();
        } else {
            window.alert("Por favor preencha todos os campos e tente novamente.");
        }

    }

    function CalculoTotalVendas() {
        const totalVendido = vendas.map(item => item.preco).reduce((prev, curr) => prev + curr, 0);
        setTotalVendas(totalVendido)
    }

    function CalculoTotalEstoque() {
        const totalVendido = produtos.map(item => item.preco).reduce((prev, curr) => prev + curr, 0);
        setTotalEstoque(totalVendido)
    }

    function CalculoTotalDespesas() {
        const totalVendido = conta.map(item => item.valor).reduce((prev, curr) => prev + curr, 0);
        setTotalContas(totalVendido)
    }

    useEffect(() => {
        CalculoTotalVendas();
        CalculoTotalEstoque();
        CalculoTotalDespesas();
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
                    <TextWelcome>Seja bem vindo!</TextWelcome>
                    <CardFuncao>
                        <ViewTextFunc>
                            <TextFuncao>Seus Produtos</TextFuncao>
                            <TextFuncaoDescription>Cadastro de novos produtos em minutos.</TextFuncaoDescription>
                            <ButtonModal onClick={openModal2}>Cadastrar</ButtonModal>
                        </ViewTextFunc>
                        <ImageFuncao />
                    </CardFuncao>

                    <CardValores>
                        <CardValor>
                            <TextValorDescription>Total de vendas:</TextValorDescription>
                            <TextValor style={{ color: 'green' }}>{totalVendas.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })}</TextValor>
                        </CardValor>

                        <CardValor>
                            <TextValorDescription>Total de contas:</TextValorDescription>
                            <TextValor style={{ color: 'red' }}>{totalContas.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })}</TextValor>
                        </CardValor>

                        <CardValor>
                            <TextValorDescription>Valor do estoque: </TextValorDescription>
                            <TextValor style={{ color: 'gray' }}>{totalEstoque.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })}</TextValor>
                        </CardValor>
                    </CardValores>

                    <Filtro>
                        <TextVendas>Ultimas vendas</TextVendas>
                        <ViewFiltro>
                            <FiltroData type={"date"} />
                            <ButtonModal onClick={openModal}>Venda</ButtonModal>
                        </ViewFiltro>
                    </Filtro>

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
                    isOpen={modalIsOpen}
                    onRequestClose={closeModal}
                    style={customStyles}
                    contentLabel="Example Modal"
                >

                    <ContainerForm style={{ 'backgroundColor': 'green' }}>
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
                                        step="0.01"
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

            <div>
                <Modal
                    isOpen={modalIsOpen2}
                    onRequestClose={closeModal2}
                    style={customStyles2}
                    contentLabel="Example Modal2"
                >

                    <ContainerForm style={{ 'backgroundColor': 'blue' }}>
                        <ButtonClosed onClick={closeModal2} />
                        <Form>
                            <TitleForm>Cadastrar produtos</TitleForm>
                            <ViewInput>
                                <LabelInputForm>Produto</LabelInputForm>
                                <InputForm
                                    type={'text'}
                                    onChange={event => setProdutoCadastro(event.target.value)}
                                />
                            </ViewInput>
                            <ViewHorizontalForm>
                                <ViewInput style={{ width: "48%" }}>
                                    <LabelInputForm>Valor</LabelInputForm>
                                    <InputForm
                                        step="0.01"
                                        type={'number'}
                                        onChange={event => setPrecoCadastro(parseFloat(event.target.value))}
                                    />
                                </ViewInput>
                                <ViewInput style={{ width: "48%" }}>
                                    <LabelInputForm>Quantidade</LabelInputForm>
                                    <InputForm
                                        type={'number'}
                                        onChange={event => setQuantidadeCadastro(parseFloat(event.target.value))}
                                    />
                                </ViewInput>
                            </ViewHorizontalForm>
                            <ViewInput>
                                <LabelInputForm>Data</LabelInputForm>
                                <InputForm
                                    type={'date'}
                                    onChange={event => setDataCadastro(event.target.value)}
                                />
                            </ViewInput>
                        </Form>

                        <ButtonModal onClick={CadastrarProduto}>Cadastrar</ButtonModal>
                    </ContainerForm>

                </Modal>
            </div>
        </Container>
    );
}