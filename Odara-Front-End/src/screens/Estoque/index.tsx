import React, { useEffect, useState } from 'react';
import { ButtonMenuLateral } from '../../components/ButtonMenuLateral';
import Modal from 'react-modal';

import { produtos } from '../../api/listas';

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

import { CardProduto } from '../../components/CardProduto';

interface Product {
    produto: string;
    quantidade: number;
    preco: number;
    data: string;
}

export function Estoque() {
    const [totalEstoque, setTotalEstoque] = useState(0);

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

    const [modalIsOpen2, setIsOpen2] = React.useState(false);

    function openModal() {
        setIsOpen2(true);
    }

    function closeModal() {
        setIsOpen2(false);
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
            closeModal();
        }else {
            window.alert("Por favor preencha todos os campos e tente novamente.");
        }

    }


    function CalculoTotalEstoque() {
        const totalVendido = produtos.map(item => item.valorTotal).reduce((prev, curr) => prev + curr, 0);
        setTotalEstoque(totalVendido)
    }

    useEffect(() => {
        CalculoTotalEstoque();
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
                            <TextFuncao>Seus Estoque</TextFuncao>
                            <TextFuncaoDescription>Cadastre novos produtos em minutos.</TextFuncaoDescription>
                            <ButtonModal onClick={openModal}>Cadastrar</ButtonModal>
                        </ViewTextFunc>
                        <ImageFuncao />
                    </CardFuncao>

                    <CardValores>
                        <CardValor>
                            <TextValorDescription>Valor do estoque: </TextValorDescription>
                            <TextValor style={{ color: 'gray' }}>{totalEstoque.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })}</TextValor>
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
                            produtos.map((results: Product) => (
                                <CardProduto produto={results.produto} quantidade={results.quantidade} preco={results.preco} data={results.data} />
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

                    <ContainerForm style={{ 'backgroundColor': 'var(--yellow)' }}>
                        <ButtonClosed onClick={closeModal} />
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