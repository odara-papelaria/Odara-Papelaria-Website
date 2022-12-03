import styled from 'styled-components';
import { backgroundLogin, backgroundLoginCard, Logo } from '../../assets/images';

export const Container = styled.body`
    flex: 1;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    padding-top: 150px;
    padding-bottom: 250px;
 
    background-image: url(${backgroundLogin});
`;


export const ContentLogin = styled.div`
    width: 500px;
    height: 500px;
    
    border-radius: 20px;
    display: flex;
    flex-direction: column;

    background-image: url(${backgroundLoginCard});
    background-repeat: no-repeat;
    background-size: 100%; 
    background-position: center;

    @media screen and (min-width: 300px) and (max-width: 640px){
        width: 350px;
        height: 385px;

        border-radius: 10px;
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
        width: 120px;
        height: 120px;

        margin-bottom: 20px;
    }    
`;

export const TitleCampo = styled.h5`
    font-size: 0.9rem;
    color: white;
    text-align: start;
`;

export const CampoLogin = styled.input`
    width: 400px;
    height: 3rem;
    border-radius: 10px;
    background-color: white;
    padding-left: 20px;

    @media screen and (min-width: 300px) and (max-width: 640px){
        width: 300px;
        height: 3rem;
    } 
`;

export const CardView = styled.div`
     margin: 0 auto;
     margin-bottom: 30px;

     @media screen and (min-width: 300px) and (max-width: 640px){
        margin-bottom: 10px;
    } 
`;