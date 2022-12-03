import styled from 'styled-components';

import { iconeHomeBlack, iconeClientesBlack, iconeClientesWhite, iconeContasBlack, iconeEstoqueBlack, iconeEstoqueWhite, iconeFornecedorBlack, iconeFornecedorWhite, iconeHomeWhite, iconeVendaBlack, iconeVendaWhite, iconesContaWhite } from '../../assets/images';

export const View = styled.div`
    @media screen and (min-width: 300px) and (max-width: 640px){
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        justify-content: center;
    } 
`;

export const Container = styled.div`
    padding: 10px;
    margin: 0 auto;
    border: 1px solid white;
    border-radius: 10px;
    background-color: white;
    display: flex;
    align-items: center;
    justify-content: space-around;

     :hover{
        background-color: var(--orange);
     }

     @media screen and (min-width: 300px) and (max-width: 640px){
       margin-top: 10px;
    } 
     
`;

export const Content = styled.div`
    margin-bottom: 10px;

    @media screen and (min-width: 300px) and (max-width: 640px){
        width: 80%;
        margin: 0 auto;
    } 
`;

export const TextButton = styled.h4`
    text-align: center;
    font-size: 24px;
    color: black;

    :hover{
        color: white;
    }

    @media screen and (min-width: 300px) and (max-width: 640px){
        text-align: center;
        font-size: 15px;
    } 
`;

export const Icone1 = styled.div`
    width: 40px;
    height: 40px;
    background-image: url(${iconeHomeBlack});
    background-repeat: no-repeat;
    background-size: 100%; 
    background-position: center;
    :hover{
        background-image: url(${iconeHomeWhite});
    }

    @media screen and (min-width: 300px) and (max-width: 640px){
        width: 0px;
        height: 0px;
    } 
`;

export const Icone2 = styled.div`
    width: 40px;
    height: 40px;
    background-image: url(${iconeFornecedorBlack});
    background-repeat: no-repeat;
    background-size: 100%; 
    background-position: center;
    :hover{
        background-image: url(${iconeFornecedorWhite});
    }

    @media screen and (min-width: 300px) and (max-width: 640px){
        width: 0px;
        height: 0px;
    } 
`;

export const Icone3 = styled.div`
    width: 40px;
    height: 40px;
    background-image: url(${iconeEstoqueBlack});
    background-repeat: no-repeat;
    background-size: 100%; 
    background-position: center;
    :hover{
        background-image: url(${iconeEstoqueWhite});
    }

    @media screen and (min-width: 300px) and (max-width: 640px){
        width: 0px;
        height: 0px;
    } 
`;

export const Icone4 = styled.div`
    width: 40px;
    height: 40px;
    background-image: url(${iconeVendaBlack});
    background-repeat: no-repeat;
    background-size: 100%; 
    background-position: center;
    :hover{
        background-image: url(${iconeVendaWhite});
    }

    @media screen and (min-width: 300px) and (max-width: 640px){
        width: 0px;
        height: 0px;
    } 
`;

export const Icone5 = styled.div`
    width: 40px;
    height: 40px;
    background-image: url(${iconeClientesBlack});
    background-repeat: no-repeat;
    background-size: 100%; 
    background-position: center;
    :hover{
        background-image: url(${iconeClientesWhite});
    }

    @media screen and (min-width: 300px) and (max-width: 640px){
        width: 0px;
        height: 0px;
    } 
`;

export const Icone6 = styled.div`
    width: 40px;
    height: 40px;
    background-image: url(${iconeContasBlack});
    background-repeat: no-repeat;
    background-size: 100%; 
    background-position: center;
    :hover{
        background-image: url(${iconesContaWhite});
    }

    @media screen and (min-width: 300px) and (max-width: 640px){
        width: 0px;
        height: 0px;
    } 
`;



