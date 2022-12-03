import styled from 'styled-components';
import { backgroundLogin, iconeClosed, ImageProdutos, Logo } from '../../assets/images';

export const Container = styled.body`
    flex: 1;
    background-image: url(${backgroundLogin});
`;

export const Content = styled.div`
    max-width: 1040px;
    padding: 50px 0 50px 0;
    margin: 0 auto;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    @media screen and (min-width: 300px) and (max-width: 640px){
        flex-direction: column;
        padding: 10px 0 10px 0;
    } 
`;

export const MenuLateral = styled.div`
    display: flex;
    flex-direction: column;
    width: 30%;
    height: 850px;
    background-color: white;
    border-radius: 20px 0 0 20px;

    @media screen and (min-width: 300px) and (max-width: 640px){
        width: 95%;
        border-radius: 10px;
        height: 100%;
        margin-bottom: 20px;
    } 
`;

export const ContentPrincipal = styled.div`
    display: flex;
    flex-direction: column;
    width: 69%;
    height: 850px;
    background-color: white;
    border-radius: 0 20px 20px 0;

    @media screen and (min-width: 300px) and (max-width: 640px){
        width: 95%;
        border-radius: 10px;
        height: 100%;
        margin-bottom: 10px;
    } 
`;

export const LogoSite = styled.div`
    width: 150px;
    height: 150px;
    margin: 0 auto;
    background-repeat: no-repeat;
    background-size: 100%; 
    background-position: center;
    background-image: url(${Logo});
    margin-bottom: 20px;
    
    @media screen and (min-width: 300px) and (max-width: 640px){
        width: 100px;
        height: 100px;
        margin-bottom: 10px;
    } 
`;

export const Desctiption = styled.h5`
    font-size: 1rem;
    text-align: center;
    color: var(--textGray);
    margin-bottom: 20px;

    @media screen and (min-width: 300px) and (max-width: 640px){
        font-size: 1.5rem;
        margin-bottom: 10px;
    } 
`;

export const TextWelcome = styled.h1`
    font-size: 3rem;
    color: var(--textgray);
    margin: 20px;

    @media screen and (min-width: 300px) and (max-width: 640px){
        font-size: 2rem;
        margin: 20px;
    } 
`;

export const CardFuncao = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    background-color: var(--blue);
    margin: 0 10px;
    border-radius: 10px;
    padding: 20px;  
`;

export const ViewTextFunc = styled.div`
    width: 50%;

    @media screen and (min-width: 300px) and (max-width: 640px){
        width: 75%;
    } 
`;

export const TextFuncao = styled.h1`
    font-size: 2rem;
    color: white;
    margin-bottom: 20px;
`;

export const TextFuncaoDescription = styled.h1`
    font-size: 1rem;
    color: white;
    margin-bottom: 20px;
`;

export const ImageFuncao = styled.div`
    width: 150px;
    height: 150px;
    background-repeat: no-repeat;
    background-size: 100%; 
    background-position: center;
    background-image: url(${ImageProdutos});

    @media screen and (min-width: 300px) and (max-width: 640px){
        width: 100px;
        height: 100px;
    } 
`;

export const ButtonModal = styled.button`
    width: 190px;
    height: 56px;
    border-radius: 20px;
    background-color: var(--orange);
    color: white;
    font-size: 1.5rem;
    font-weight: bold;

    :hover{
        background-color: var(--orangeblack);
    }

    @media screen and (min-width: 300px) and (max-width: 640px){
        width: 100px;
        height: 56px;
        border-radius: 10px;
        font-size: 1.2rem;
    } 
`;

export const CardValores = styled.div`
    padding: 10px 20px 0 20px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
`;

export const CardValor = styled.div`
    width: 31%;
    text-align: center;
`;

export const TextValorDescription = styled.h4`
    font-size: 1rem;
    color: black;
    margin-bottom: 10px;

    @media screen and (min-width: 300px) and (max-width: 640px){
        font-size: .8rem;
    } 
`;

export const TextValor = styled.h3`
    font-size: 2.2rem;
    font-weight: bold;

    @media screen and (min-width: 300px) and (max-width: 640px){
        font-size: 1.2rem;
    } 
`;

export const Filtro = styled.div`
    padding: 20px;
`;

export const TextVendas = styled.h4`
    font-size: 1.5rem;
    font-weight: bold;
    margin-bottom: 10px;
`;

export const ViewFiltro = styled.div`
    display: flex;
    justify-content: space-between;
`;

export const FiltroData = styled.input`
    width: 40%;
    border-radius: 10px;
    padding-right: 10px;
    padding-left: 10px;
    font-size: 1.2rem;
    font-weight: bold;

    @media screen and (min-width: 300px) and (max-width: 640px){
        width: 60%;
    } 
`;

export const ContainerForm = styled.div`
    text-align: center;
    padding: 50px;
    border-radius: 20px;
    border: 2px solid white;
`;

export const Form = styled.form`
   margin-bottom: 50px;
`;

export const TitleForm = styled.h2`
    font-size: 2rem;
    font-weight: bold;
    text-align: center;
    margin-bottom: 20px;
    color: white;
`;

export const LabelInputForm = styled.h5`
    font-size: 1rem;
    font-weight: bold;
    margin-bottom: 5px;
    color: white;
    text-align: start;
`;

export const InputForm = styled.input`
    width: 100%;
    height: 70px;
    border-radius: 10px;
    padding-right: 10px;
    padding-left: 10px;
    font-size: 1.2rem;
    font-weight: bold;
`;

export const ViewInput = styled.div`
    margin-bottom: 20px;
`;

export const ViewHorizontalForm = styled.form`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
`;

export const ButtonClosed = styled.button`
    width: 50px;
    height: 50px;
    margin-left: 90%;
    border-radius: 50px;
    background-repeat: no-repeat;
    background-size: 100%; 
    background-position: center;
    background-image: url(${iconeClosed});
    text-align: end;
`;

export const ListaVendas = styled.div`
    padding: 0 20px 0 20px;
    overflow:auto; 
    margin-bottom: 20px;
`;

export const HeaderList = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    margin-bottom: 20px;
`;

export const TitleList = styled.h3`
    width: 19%;
    color: var(--blueclaro);
    font-size: 1.5rem;
    font-weight: bold;
    text-align: center;

    @media screen and (min-width: 300px) and (max-width: 640px){
        font-size: 0.8rem;
    } 
`;